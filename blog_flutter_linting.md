| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Blog](blog)                | [FlexColorPicker](colorpicker) | [Grid](gridview) | [Talo](talo)         |

# Flutter Linting Comparison
*(Published July 28, 2021, Updated May 1, 2022)*

Dart and Flutter linting is important, if you have not used it before it is a good idea to start now. At the end of this article I also present a comparison of different popular lint packages and the Dart and Flutter lint rules they use.

[<img src="https://rydmike.com/assets/lint_compare.png?raw=true" alt="lint_compare" width="400"/>](#what-are-the-rule-differences-between-all-these-packages)

## What Is the Dart Linter?

The Dart linter is a static analyzer for identifying possible problems in your Dart source code. There are close to two hundred linter rules are available, checking anything from potential typing issues, coding style and formatting.

You can set up the Dart analyzer and linter to do your bidding the way you like it. Some rules are more important than others, and some are just style and personal preference related, the kind that developers like to debate forever. When it comes to them, there is no real right or wrong, do what you prefer if a certain style is not mandated in your project.

Enabling very strict linting rules on a code base that previously did not use it, can also be very time-consuming. For such cases, gradually introducing more stringent lint rules is a good idea. To do that, you may want to get to know the lint rules better and how to set them up yourself, without using a package.

To study and read more about each lint rule, you can head over to the [Linter for Dart](https://dart-lang.github.io/linter/lints/) site.

## How Do I Use the Dart Linter?

Personally I like to start by enabling all lint rules in one file, and then including it in my `analysis_options.yaml` file. I simply call this file `all_lint_rules.yaml`. You can get the latest official and always up-to-date version of all lint rules [here](https://dart-lang.github.io/linter/lints/options/options.html), grab its content and put it in a file called `all_lint_rules.yaml`.

If you do not want to track the Dart lint site for updates to all available lint rules, there is also an excellent package made by [Gaëtan Schwartz @gaetschwartz](https://github.com/gaetschwartz) called [all_lint_rules_community](https://pub.dev/packages/all_lint_rules_community) that you can use to add all lint rules to your project, instead of adding and updating the file manually. The package is automatically updated when new lint rules are added to the Dart [all lint rules page](https://dart-lang.github.io/linter/lints/options/options.html) so all you have to do is bump the package version to get the latest list of all lint rules when the package has been updated. 

Both the `analysis_options.yaml` and the `all_lint_rules.yaml` can be placed in the root of your Flutter project folder, same place where you have your `pubspec.yaml` file. In my `analysis_options.yaml` I include the `all_lint_rules.yaml` file. In `analysis_options.yaml` I also exclude commonly generated Dart files from being analyzed, and enable analyzer strong-mode. In strong mode, I disable implicit type casts and implicit dynamic. I highly recommend doing so. Coding with it might feel a bit tedious if you are used to dynamically typed languages, but it will save you from a bunch of potential gotchas in Dart code.

I lift common mistakes that I think should be errors, to error level. Then the analyzer won't even let me compile code with these mistakes. So I set it to flag missing return and missing required parameters as errors, not as warnings or info. I keep parameter re-assignments as only a warning though, there are occasions when it may be needed, but I want a warning, so I can consider a rewrite of it, or on a case by case ignore the warning after consideration.

My `analysis_options.yaml` file starts like this:


```yaml
# RydMike LINTER Preferences v1.2.9
#
# Get this file here: https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c
#
# We include and activate all lint rules, later below we disable the not used or desired ones.
# You can find a list of all lint rules to put in your all_lint_rules.yaml file here:
# https://dart-lang.github.io/linter/lints/options/options.html
#
# For a full comparison of all lint rules settings in rule styles listed below, please see this
# sheet: https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA
include: all_lint_rules.yaml
analyzer:
  exclude:
    - "**/*.g.dart"
    - "**/*.freezed.dart"
    - "test/.test_coverage.dart"
    - "bin/cache/**"
    - "lib/generated_plugin_registrant.dart"

  language:
    strict-casts: true
    strict-inference: true
    strict-raw-types: true

  errors:
    # Without ignore here, we cause import of all_lint_rules to warn, because some rules conflict.
    # We explicitly enabled even conflicting rules and are fixing the conflicts in this file.
    # Put it to warning temporarily troubleshoot lint rule settings.
    included_file_warning: ignore

    # Treat missing required parameters as an error, not as a hint or a warning.
    missing_required_param: error

    # Treat missing returns as an error, not as a hint or a warning.
    missing_return: error

    # Allow self-reference to deprecated members. This is done because otherwise we have
    # to annotate every member in every test, assert, etc., when we deprecate something.
    deprecated_member_use_from_same_package: ignore

    # DON'T assign new values to parameters of methods or functions.
    # https://dart-lang.github.io/linter/lints/parameter_assignments.html
    parameter_assignments: warning

    # Allow having TODOs in the code.
    todo: ignore

# LINTER Preferences
#
# Explicitly disable only the rules we do not want.
linter:
  rules:
```

The rest of the settings is just turning OFF linting rules I do not want to use. Since all rules are now ON by default, it is a list of rules that should NOT be used. I try to keep it relatively short.

As for what actually gets turned OFF, first there are some linting rules that conflict with each other. When it comes to them, you can go two ways. If you don't want to make a choice and want to be able to use both alternatives, then disable both rules. Alternatively choose one of them and disable the one you do not want to use. I prefer to make a choice, the conflicting rules are often highly opinionated, in certain scenarios, it might be more lenient to allow both options, but if it is a personal project, then go ahead and use what you prefer.

A typical example of a personal preference linting rule, is the `prefer_double_quotes` versus `prefer_single_quotes` choice. Even if a linting rule is highly opinionated, in large project you may still want to make choice to enforce a consistent style.

Here is my choice and my rationale on the quote style:

```yaml
    # DO use double quotes where they wouldn't require additional escapes.
    #
    # https://dart-lang.github.io/linter/lints/prefer_double_quotes.html
    #
    # This rule is mostly about what style you want to use and enforce, if any.
    # It of course conflicts with rule:
    # `prefer_single_quotes` : "DO use single quotes where they wouldn't require additional escapes."
    # https://dart-lang.github.io/linter/lints/prefer_single_quotes.html
    #
    # For us single quotes are easier to type. On our ISO keyboards it is next to Enter key, and
    # we don't need the Shift plus the far to reach nr 2 key on R1 to type it. Also, we don't think
    # they compromise on readability.
    # Then again if you don't care and don't mind mixing and matching, then ALSO
    # turning OFF `prefer_single_quotes` works fine too, and then you can use both options.
    #
    # We thought it was cleaner to stick to one style. Single quotes are easier to type for us,
    # thus we turn OFF this `prefer_double_quotes` rule. There is another lint rules that recommends you
    # to use double quotes when you otherwise would need to escape the single quote char, it works
    # well when you use the prefer_single_quotes rule as well.
    #
    # Other known linters use:
    #
    # Core           disabled : https://pub.dev/packages/lints
    # Recommended    disabled : https://pub.dev/packages/lints
    # Flutter Lints  disabled : https://pub.dev/packages/flutter_lints
    # Pedantic       disabled : https://pub.dev/packages/pedantic
    # Effective Dart disabled : https://pub.dev/packages/effective_dart
    # Flutter repo   disabled : https://github.com/flutter/flutter/blob/master/analysis_options.yaml
    # Lint           disabled : https://pub.dev/packages/lint
    # VG Analysis    disabled : https://pub.dev/packages/very_good_analysis
    # RydMike        disabled : https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c
    prefer_double_quotes: false
```

In addition to things that conflict with their own counter-part, what else do I turn off? As little as possible, I prefer things pretty strict, but that is just my personal preference. 

I documented the choices I made, and the reasoning behind the choices at the point in time when I made them. I vary it slightly depending on if I am using linting for a package or an app, keeping it even stricter for public packages. These options and selections are also documented.

[Here is a Gist](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) with the full details of the settings I use in `analysis_options.yaml` for my personal projects.

I might change a few settings as things evolve. One rule I found myself disliking recently and disabling, is the `sort_constructors_first`. Sounds like it is a fine rule, right? For the default constructor I agree, I want it first too. However, **after that** I want to see all the properties of the default constructor, with their documentation comments. I find this useful for more complex packages that may have constructors with a lot of named parameters.

If the `sort_constructors_first` rule is enabled, I am forced to use an order where I have to scroll far down to find the properties much further below, after all the named constructors and factories. I find this very inconvenient. This is another minor example of personal style preference. There are many lint rules that are style and code consistency related. Get to know them and find your own personal preferences.

When you disable a lint rule, try to write a short note to your future self why you disabled it. This is what I wrote down concerning why I turned off the `sort_constructors_first` rule. The good thing is you can certainly change your mind about a rule's usefulness or add more as you need, well at least in your personal projects.

```yaml
    # DO sort constructor declarations before other members.
    #
    # We do like this lint rule, but we want to have the default constructor first, followed
    # by its properties, after this other named constructors and factories. This rule gets
    # in the way of that and forces you to put (often final) constructor properties after all
    # the named constructors and factories, making them tedious to find and disconnected from
    # where we want to see, read and handily edit them. This is especially the case if there are
    # many constructors and factories, and they have a lot of parameters. For now, we disable
    # this rule and order things as described above, which apart from the default constructor
    # properties coming right after the constructor, is the only part where we in practice
    # deviate from this rule, so other yes, we do put constructors first as well anyway.
    #
    # Other known linters use:
    #
    # Core           disabled : https://pub.dev/packages/lints
    # Recommended    disabled : https://pub.dev/packages/lints
    # Flutter Lints  disabled : https://pub.dev/packages/flutter_lints
    # Pedantic       disabled : https://pub.dev/packages/pedantic
    # Effective Dart disabled : https://pub.dev/packages/effective_dart
    # Flutter repo   enabled  : https://github.com/flutter/flutter/blob/master/analysis_options.yaml
    # Lint           disabled : https://pub.dev/packages/lint
    #                           Discussion https://github.com/passsy/dart-lint/issues/1
    # VG Analysis    enabled  : https://pub.dev/packages/very_good_analysis
    # RydMike        disabled : https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c
    sort_constructors_first: false
```

The above is also an example of the documentation style I use for all lint rules that I turned OFF. Yes it is verbose, but now I can find my past reasoning for the choice I made. I can also find references to what others have chosen as their lint preference for each rule that I do not use.

## What About Using a Third Party Linting Package?

There are many 3rd party packages that define linting rules for you. Previously most notably [Effective Dart](https://pub.dev/packages/effective_dart), [Pedantic](https://pub.dev/packages/pedantic) and [Lint](https://pub.dev/packages/lint) as well as [Very Good Analysis](https://pub.dev/packages/very_good_analysis) are popular packages that comes with their recommended rules.

There is nothing wrong with using any of these packages if they fit your needs. Using a ready-made linting package may very well be the right choice for you. If you are not interested in getting to know the rules yourself and follow-up on new rules that are added by the Dart team occasionally, then please do use a package. I have a personal recommendation regarding which one as well.

For my personal projects I just prefer the clarity of enabling all rules in one file, and then disabling the ones that do not fit my use case and preferences. 

Earlier I started with one of the above packages too, but I noticed that when I needed or wanted to modify a few rules. I then ended up with **enabling or disabling** rules in relation to used package settings. This got a bit messy to keep track of. Eventually it felt cleaner to just turn everything ON, and then just have OFF definitions in my `analysis_options.yaml`. Super simple, clear and easy to modify when needed, without messing things up.
Plus no need for a package for this relatively simple setup.

In a big project the lint rules have probably been agreed and defined already for you, then just stick to that. If you find that the lint rules have not been defined, nor documented why they are a certain way in the project, well then they really should be.

## Which Lint Package Should I Use?

If I want to use a package, which lint package should I use? Answering this question got a lot easier with Flutter 2.5. First, both the package
[Effective Dart](https://pub.dev/packages/effective_dart) and [Pedantic](https://pub.dev/packages/pedantic) have been deprecated. For a new project I do not recommend them anymore. 

The Pedantic package from Google was originally intended mostly for their internal use. Despite its name, it was not very strict nor pedantic. It started as a minimum set they could agree on internally for Dart projects.

Starting from Flutter 2.5.0 Dart and Flutter teams launched two new lint packages that are used as default when you make a new Flutter package. Let us take a look at them.

### Lints
The first one is called [Lints](https://pub.dev/packages/lints). It was launched as version 1.0.0 on May 12, 2021. This package contains the new official recommended selection of lint rules for **Dart** projects.

It comes in two flavors, the absolute minimum lints, called **Core lints**, and a broader set called **Recommended lints**. The recommended set also includes the core lints. In the Dart guide you can read more about it [here](https://dart.dev/guides/language/analysis-options#enabling-linter-rules).

### Flutter lints

The second package is called [Flutter lints](https://pub.dev/packages/flutter_lints), It was also launched as version 1.0.0 on May 12, 2021. The Flutter lints package includes the recommended set from Dart lints, plus a few more rules that are important in Flutter projects. These Dart and Flutter lint rule sets are built as supersets, with increasing amount of rules enabled.

Starting from Flutter version 2.3.0-12.0.pre and included in stable 2.5.0 and later versions, the package [Flutter lints](https://pub.dev/packages/flutter_lints) defines the latest set of officially recommended lints that encourage good coding practices for **Flutter** apps, packages, and plugins.

Projects created with **flutter create** using Flutter **version 2.3.0-12.0.pre or newer**, and thus also in stable 2.5.0 and later, are automatically setup to use the **Flutter lints** package. 

You can find the instructions [here](https://flutter.dev/docs/release/breaking-changes/flutter-lints-package).

Since this lint rule set is the new default lint package for new Flutter projects, there is no major reason to recommend any other linter package than [Flutter lints](https://pub.dev/packages/flutter_lints) as a general good starting point. However, if you want more and much stricter rules, there are two good options, in addition to rolling your own setup.

### Other Packaged Linters

Both [Lint](https://pub.dev/packages/lint) and [Very Good Analysis](https://pub.dev/packages/very_good_analysis) are very solid choices offering much tighter linting rule sets than Flutter lints.

They both enable more and even stricter lint rules than the new default **flutter_lints**. Both **lint** and **very_good_analysis** use strong mode and disable implicit casts. Very Good Analysis also wisely opts to disable implicit dynamic. 

From package version 2.3.0 Very Good Analysis (VGA) also started treating missing required parameters and missing return, as code errors. I consider this
a wise and welcome addition. From version 1.8.1 the **lint** package does this as well, it even adds treating function parameter new value assignments as warnings, bringing its strictness even higher than VGA in this respect. 

The **lint** package includes excellent reasoning documentation for its lint rule choices in the source, allowing you to read and understand the author's rationale for the used choices. It also comes with a variant for packages, adding a few more useful rules for public packages. This is actually a very good feature if you write packages. Some of those rules are not so useful or even get in the way when you write applications, but important when you write packages to help your package get a higher score on pub.dev. 

I also find it interesting to follow what lint rules the Flutter SDK repo uses. Recently there has been many new rules enabled in the Flutter SDK as well.In the older version (1.4.0) of the comparison table from September 10, 2021, to the current one (1.7.0), the Flutter repo (master channel) has gone from 129 to 152 enabled lint rules.

Out of the packaged linters **very_good_analysis**, enables the highest number of lint rules of the compared packaged linters. With 82.8% of available lint rules enabled in packages version 2.4.0, it is the most strict and "pedantic" of the compared packaged linters, at least if I exclude my own custom setup from the comparison. 

The **lint** package is not far behind. With its 1.8.2 version it is at 74.9% of lint rules enabled. The difference is really minor and matter of taste at this level of lints enabled. 

Both packages track development of new Dart and Flutter lint rules actively and are updated regularly and enable all critical and important rules. Both are excellent choices if you want stricter linting than Flutter offers out of the box and don't want to track and maintain the rule set yourself, and would rather just update a package dependency to update your linting game.

You can use my comparison table to compare popular lint setups and the rules they enable and make your own preferred choice based on it.

If you want to stay on top of your linting rule setup yourself, then do as I do. Roll your own linting rule configuration. Mostly I do this to use even stricter lint rules than current package linters offer, and to make the opinionated choices I prefer. Most lint packages on purpose avoid making any choice for you when it comes to highly opinionated personal preferences rules.

I also like the clean setup of enabling all rules in one file, by include all currently available rules and then only turning OFF the rules I don't use. This keeps the setup easy to maintain. Feel free to do the same **or** take the easy route and just use default [Flutter lints](https://pub.dev/packages/flutter_lints) or walk the narrow and strict path with [Very Good Analysis](https://pub.dev/packages/very_good_analysis) or [Lint](https://pub.dev/packages/lint).

If you don't care about linting and tuning it yourself, the really nice part is that a good basic linting setup is now part of Flutter. Starting from version 2.5.0 you get a solid rule set enabled by default for new projects. It is a really cool and a smart move by the Dart and Flutter teams to offer this. It means that eventually all Flutter developers will use more strict lint rules by default, rules that will help improve the quality of produced Flutter apps and packages.

## What Are the Rule Differences Between All These Packages?

What are the lint rule differences between all these packages? That is a **very** good question. I guess I saved the most interesting part for last. I was very curious about this as well, so I went through **all** the lint settings for the following lint packages and setups:

| Lint style   | Previous             |  % of rules | Used now | +/- | % of rules |
| ----         | ----                   | ---- | ---- | ---- |  ---- |
|[Dart Core *(v1.0.1)*](https://pub.dev/packages/lints) | 26 | 13.5%| 26 | 0 | 12.8% |
|[Dart Recommended *(v1.0.1)*](https://pub.dev/packages/lints) | 74 | 38.5% | 74 | 0 | 36.5% |    
|[Flutter lints *(v1.0.4)*](https://pub.dev/packages/flutter_lints) | 85 | 44.3% | 85 | 0 | 41.9 % | 
|[Pedantic *(v1.11.1) (Deprecated)*](https://pub.dev/packages/pedantic) | 52 | 27.1% | 52 | 0 | 25.6% |
|[Effective Dart *(v1.3.2) (Deprecated)*](https://pub.dev/packages/effective_dart) | 57 | 29.7% | 57 | 0 | 28.1% |
|[Flutter SDK repository *(v2.13.0-0.2.pre)*](https://github.com/flutter/flutter/blob/master/analysis_options.yaml) | 129 | 67.2% | 152 | +23 | 74.9% | 
|[Lint *(v1.8.2)*](https://pub.dev/packages/lint) | 147 | 76.6% | 152 | +5 | 74.9% |
|[Very Good Analysis *(v2.4.0)*](https://pub.dev/packages/very_good_analysis) | 153 | 79.7% | 168 | +15 | 82.8% |
|[RydMike - All ON, then turn OFF some *(v1.2.9)*](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) | 171 | 89.1%| 182 | +11 | 89.7% |
|[All LINT rules](https://dart-lang.github.io/linter/lints/options/options.html) | 192 | 100.0% | 203 | +11 | 100.0% |

The "previous" values refer to the number of enabled lint rules in comparison table version 1.4.0 from September 10, 2021, and "used now" to the latest lint rules in comparison table, version 1.7.0 updated April 26, 2022.

Here is the full comparison in a [**Google Sheet**](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA), enjoy!

[<img src="https://rydmike.com/assets/lint_compare.png?raw=true" alt="lint_compare"/>](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA)

*I may have made some mistakes in the review of the settings, if you notice any, please let me know, and I will update it. You can find me on [Twitter](https://twitter.com/RydMike)*


## More Code Analysis?

If you want to go even deeper into Dart code analysis, I recommend taking a look at [Dart Code Metrics](https://dartcodemetrics.dev/). A static analysis tool that helps you analyze and improve your Dart code quality. It collects analytical data on the code through calculating code metrics with configurable thresholds and provides additional rules for the Dart analyzer.

---
*(Page updated May 1, 2022)*