---
title: "Flutter Linting and Linter Comparison"
description: "Custom linting setup and comparing used linting rules by different packages"
---

| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Articles](blog)            | [FlexColorPicker](colorpicker) | [Grid](gridview) |         |

# Flutter Linting and Linter Comparison
*(Published July 28, 2021, Updated Nov 20, 2023)*

> Updated to cover Flutter 3.16 and Dart 3.2 linters.

At the end of this article, I present a comparison of Flutter default linting and popular packages, comparing the Dart and Flutter lint rules they use.

[<img src="https://rydmike.com/assets/lint_compare.png?raw=true" alt="lint_compare" width="400"/>](#compare-and-choose)

## What Is the Dart Linter?

The Dart linter is a static analyzer for identifying possible problems in your Dart source code. There are over two hundred code linting rules available, checking anything from potential type issues, coding style, proper Flutter widget usage and formatting.

You can set up the Dart analyzer and linter to do your bidding the way you like it. Some rules are more important than others, and some are just style and personal preference related, the kind that developers like to debate forever. When it comes to them, there is no real right or wrong, do what you prefer if a certain style is not mandated in your project.

Enabling very strict linting rules on a code base that previously did not use it can be time-consuming. For such cases, gradually introducing more stringent lint rules is a good idea. To do that, you may want to get to know the lint rules better and how to set them up yourself, without using a package. 

Many Dart analyzer and linting errors can also be automatically fixed by using `dart fix`. This also works with many lint rules when you enable a rule in a project that did previously not use it. See the docs for more info on how to use [dart fix](https://dart.dev/tools/dart-fix). If there is a `dart fix` for a given lint rule, then using it to migrate a code base to use it is a big time saver.

To study and read more about each lint rule, you can head over to Dart docs about customizing the [static analysis](https://dart.dev/tools/analysis) and [linter rules](https://dart.dev/tools/linter-rules) for the Dart linter.

## How Do I Use the Dart Linter?

Personally I like to start by enabling all lint rules in one file, and then including it in my `analysis_options.yaml` file. I simply call this file `all_lint_rules.yaml`. You can get the latest official and always up-to-date version of [all lint rules here](https://dart.dev/tools/linter-rules/all), grab its content and put it in a file called `all_lint_rules.yaml`.

If you do not want to track the **all lint rules** page for updates, there is also an excellent package made by [Gaëtan Schwartz @gaetschwartz](https://github.com/gaetschwartz) called [all_lint_rules_community](https://pub.dev/packages/all_lint_rules_community). You can use to add all lint rules to your project, instead of adding and updating the file manually. The package is automatically updated when new lint rules are added to the Dart [all lint rules page](https://dart-lang.github.io/linter/lints/options/options.html). All you have to do is bump the package version to get the latest list of all lint rules when the package has been updated. 

Both the `analysis_options.yaml` and the `all_lint_rules.yaml` are placed in the root of your Flutter project folder, same place where you have your `pubspec.yaml` file. In my `analysis_options.yaml` I include the `all_lint_rules.yaml` file. In my `analysis_options.yaml` I also exclude some commonly generated Dart files from being analyzed.

I use the new Dart `language:` setting, where I set `strict-casts: true`, `strict-inference: true`, and `strict-raw-types: true`. These settings replace previous `strong-mode` settings `implicit-casts: false` and `implicit-dynamic: false`. See Dart documentation [Enabling stricter type checks](https://dart.dev/guides/language/analysis-options#enabling-additional-type-checks) for more information. I highly recommend using these settings. 

I lift common mistakes that I think should be errors, to **error** level. Then the analyzer won't even let me compile code with these mistakes present. These include setting it to flag missing return and missing required parameters as **errors**, not as **warnings** or **info**. I keep `parameter_assignments` as only a warning there are occasions when it may be needed, but I want a warning, so I can consider a rewrite of it, or in a case by case situation ignore the warning rule after consideration.

My `analysis_options.yaml` file starts like this:


```yaml
# RydMike LINTER Preferences v2.2.0
# Get this file here: https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c
#
# Include and activate all lint rules, later below we disable the not used or desired ones.
# You can find a list of all lint rules to put in your all_lint_rules.yaml file here:
# https://dart.dev/tools/linter-rules/all
include: all_lint_rules.yaml
analyzer:
  exclude:
    - "**/*.g.dart"
    - "**/*.freezed.dart"
    - "test/.test_coverage.dart"
    - "bin/cache/**"
    - "lib/generated_plugin_registrant.dart"

  # For more information see: https://dart.dev/tools/analysis
  language:
    strict-casts: true
    strict-inference: true
    strict-raw-types: true

  errors:
    # Without ignore here, we cause import of all_lint_rules to warn, because some rules conflict.
    # We explicitly enable conflicting rules and are fixing the conflicts in this file.
    # Put it to warning temporarily if you need to troubleshoot lint rule settings.
    included_file_warning: ignore

    # Treat missing required parameters as an error, not as a hint or a warning.
    missing_required_param: error

    # Treat missing returns as an error, not as a hint or a warning.
    missing_return: error

    # A record literal with exactly one positional field requires a trailing comma.
    record_literal_one_positional_no_trailing_comma: error

    # Invocation collection methods with arguments of unrelated types.
    collection_methods_unrelated_type: warning

    # Invocation of equality operator == with references of unrelated types.
    unrelated_type_equality_checks: warning

    # Allow self-reference to deprecated members. This is done because otherwise we have
    # to annotate every member in every test, assert, etc. when we deprecate something.
    # This is useful and typically needed when developing packages and libraries.
    deprecated_member_use_from_same_package: ignore

    # DON'T assign new values to parameters of methods or functions.
    parameter_assignments: warning

    # Allow having TODOs in the code.
    todo: ignore

# LINTER Preferences
#
# Explicitly disable only the rules we do not want.
linter:
  rules:
```

The rest of the settings are just turning **OFF** linting rules I do not want to use. Since all rules are now **ON** by default, it is a list of rules that should NOT be used that are set to FALSE. I try to keep it relatively short.

As for what actually gets turned OFF, first, there are some linting rules that conflict with each other. When it comes to them, you can go two ways. If you don't want to make a choice and want to be able to use both alternatives, then disable both rules. Alternatively, choose one of them and disable the one you do not want to use. I prefer to make a choice. The conflicting rules are often highly opinionated. In certain scenarios, it might be more lenient to allow both options. If it is a personal project, then go ahead and use what you prefer.

A typical example of a personal preference linting rule, is the `prefer_double_quotes` versus `prefer_single_quotes` choice. Even if a linting rule is highly opinionated, in a large project you may still want to make choice to enforce a consistent style.

Here is my choice and my rationale on the quote style:

```yaml
    # DO use double quotes where they wouldn't require additional escapes.
    # See https://dart-lang.github.io/linter/lints/prefer_double_quotes.html.
    #
    # This rule is mostly about what style you want to use and enforce, if any. Conflicts with rule
    # `prefer_single_quotes` - "DO use single quotes where they wouldn't require additional escapes".
    # See https://dart-lang.github.io/linter/lints/prefer_single_quotes.html.
    #
    # For us, single quotes are easier to type. On our ISO keyboards, it is next to Enter key, and
    # we don't need the Shift plus the far to reach the nr 2 key, on R1 to type it. Also, we don't think
    # they compromise on readability.
    #
    # If you don't care and don't mind mixing and matching, then ALSO
    # turning OFF `prefer_single_quotes` works fine too, then you can use both options.
    #
    # We thought it was cleaner to stick to one style. Single quotes are easier to type for us,
    # thus we turn OFF this `prefer_double_quotes` rule. There is another lint rule that recommends you
    # to use double quotes when you otherwise would need to escape the single quote char. It works
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

I might change a few settings as things evolve. One rule I found myself disliking and disabling, is the `sort_constructors_first`. It sounds like it is a fine rule, right? For the default unnamed constructor, I agree, I want it first then too. There is a separate lint for that, that I do use, it is called `sort_unnamed_constructors_first`. However, **after that**, I want to see all the properties of the default constructor, with their documentation comments. I find this useful for more complex classes that may have many named constructors or factories with a lot of named parameters.

If the `sort_constructors_first` rule is enabled, I am forced to use an order where I have to scroll far down to find the properties much further below all the named constructors and factories. I find this very inconvenient. This is another example of personal style preference. There are many lint rules that are style and code consistency related. Get to know them and find your own personal preferences.

When you disable a lint rule, try to write a short note to your future self explaining why you disabled it. This is what I wrote down concerning why I turned off the `sort_constructors_first` rule. The good thing is you can certainly change your mind about a rule's usefulness or add more as you need, at least in your personal projects.

```yaml
    # DO sort constructor declarations before other members.
    #
    # We do like this lint rule, but we want to have the default constructor first, followed
    # by its properties, after this, other named constructors and factories. This rule gets
    # in the way of that and forces you to put (often final) constructor properties after all
    # the named constructors and factories. Making them tedious to find and disconnected from
    # where we want to see, read and handily edit them. This is especially the case if there are
    # many constructors and factories, and they have a lot of parameters. For now, we disable
    # this rule and order things as described above. Which, apart from the default constructor
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

The above is also an example of the documentation style I use for lint rules that I turned OFF. Yes, it is verbose, but now I can find my past reasoning for the choice I made. I can also directly see references to what others have chosen as their lint preference for each rule that I do not use.

## Which Linting Package Should I Use?

If I want to use linting based on a package, which linting package should I use? Answering this question got a lot easier when Flutter 2.5 was released. 

Starting from Flutter version 2.5, **Flutter and Dart** use two new linting packages that are **enabled by default** when you create a new Flutter project. With the launch of **Flutter 3.16**, the used linting packages were updated to version 3 and include more Dart related rules than the rule set in version 1 and 2. When you create a new Flutter project with Flutter version 3.0.0 or later, you get version 3 linting rules enabled by default, for older Flutter projects that used version 1 or version 2, consider upgrading to version 3. 

If you created your Flutter project with version 2.5 or later, then you are already using the default linting package. This is a perfectly good starting point, but make sure to update it to the latest version. Further below, you can compare the Dart and Flutter default enabled linting rules to popular third party packages.

## What About Using a Third-Party Linting Package?

If you want to use a third party linting package, you can do so. There are many third-party packages that define linting rules for you. There is nothing wrong with using third-party linting packages if they fit your needs. Using a ready-made linting package may be the right choice for you. If you are not interested in getting to know the lint rules and their setup yourself, and want stricter linting than Flutter and Dart defaults, then consider a package. 

For my **personal projects**, I prefer the clarity of enabling all rules in one file, and then disabling the ones that do not fit my use case and preferences. Earlier, I started with a package too, but I noticed that when I needed or wanted to modify a few rules. I then ended up with **enabling or disabling** rules in relation to used package settings. This got a bit messy to keep track of. Eventually it felt cleaner to just turn **everything ON**, and then just have **OFF definitions** in my `analysis_options.yaml` for rules I do not want. It is simple, clean and easy to modify when needed. Plus, no need for a package for setting up my own custom lint preferences.

In a big project, the lint rules have probably been agreed and defined already for you, then stick to that. If you find that the lint rules have not been defined, nor documented why they are a certain way in the project, well then they really should be, consider addressing it.

In Flutter early days, [Effective Dart](https://pub.dev/packages/effective_dart) and [Pedantic](https://pub.dev/packages/pedantic) used to be popular linting package. However, both packages have been **deprecated**. For a new project, do not use them. Consider migrating applications and packages that used them, to here recommended alternatives. 

The [Pedantic](https://pub.dev/packages/pedantic) package from Google was originally intended mostly for their internal use. Despite its name, it was not very strict nor pedantic at all. It was used as a minimum set they could agree on internally for Dart projects. 

The [Effective Dart](https://pub.dev/packages/effective_dart) package, before it was deprecated, was a way to provide analysis options corresponding to the guidelines in [Effective Dart](https://dart.dev/guides/language/effective-dart) documentation.

I still include both these deprecated packages in my comparison table, so you can see how they compare to currently commonly used linting rule sets. As it is quite a long time ago since they were deprecated now, the comparison is only of historic interest. It shows how Dart has moved from being quite relaxed to adopting more stringent static analysis. Both by using more rules and also by adding more available static analysis rules to the Dart language. 

### Official Dart Language Lints

The Dart default used linting package is called [**lints**](https://pub.dev/packages/lints). It was launched as version 1.0.0 on May 12, 2021. This package contains the new official recommended selection of lint rules for **Dart** projects. With the release of Dart 3.2.0, the [lints](https://pub.dev/packages/lints) was updated to **version 3.0.0**, enabling more and new lint rules.

The [lints](https://pub.dev/packages/lints) package comes in two flavors, the absolute minimum lint rule set, called **Core lints**, and a broader set called **Recommended Lints**. The recommended set also **includes the core lints**. In the Dart guide, you can read more about it [here](https://dart.dev/guides/language/analysis-options#enabling-linter-rules).

In its latest version, **Lints Core**, enables **33 linting rules**. This is only **15.1%** of available and usable rules, only the most critical Dart rules. The **Lints Recommended** set, enables **88 rules**, or **40.4%** of available and usable that are **highly recommended** for Dart software development.

### Official Flutter Lints

The second out of the box used linting package is called [**flutter_lints**](https://pub.dev/packages/flutter_lints). It was also launched as version 1.0.0 on May 12, 2021. The [flutter_lints](https://pub.dev/packages/flutter_lints) package **includes the recommended set** from Dart `lints`, plus a few more rules that are important in Flutter projects. 

The default Dart and Flutter lint rule sets are built as supersets with increasing number of rules enabled. The Flutter lints package includes all Dart **Recommended Lints** rules that then include all Dart **Core Lints** rules.

Starting from the Flutter version stable 2.5.0, the package `flutter_lints` defines the latest set of officially recommended linting rules that encourage good coding practices for **Flutter** apps, packages, and plugins. In its latest version 3.0.1, released with Flutter 3.16.0, it enables **101 rules**, or **46.3%** of available linting rules.

Projects created with **flutter create**, using Flutter 2.5.0 and later, are automatically setup to use the **Flutter lints** package. When creating a Flutter project with **Flutter 3.16.0 or later**, the used `flutter_lints` linting package level is bumped to version 3. If you are using an older version of `flutter_lints` consider upgrading.

Since `flutter_lints` is included and setup automatically as default linting packages for new Flutter projects, there is no major reason to recommend any other linter package than [flutter_lints](https://pub.dev/packages/flutter_lints) as a general good starting point. **However**, if you want to use stricter static analysis, there are **two popular options** in addition to rolling your own setup, that you may want to consider.

### Third-party - Lint and Very Good Analysis

Both [**Lint**](https://pub.dev/packages/lint) and [**Very Good Analysis** (VGA)](https://pub.dev/packages/very_good_analysis) are solid choices offering much tighter linting rule sets and thus more strict static analysis than the official [**Flutter lints**](https://pub.dev/packages/flutter_lints). They both enable more and stricter lint rules than the default `flutter_lints` does.

The [lint](https://pub.dev/packages/lint) package has been around since **Sep 1, 2020**. It is excellently maintained and the most liked third party linting package, with more than 800 likes (Nov 20, 2023: **814 Likes**). It is made by Pascal Welsch, a Flutter and Dart GDE. You can find him on X/Twitter using handle [@passy](https://twitter.com/passsy).

The [lint](https://pub.dev/packages/lint) package includes excellent reasoning documentation for its lint rule choices in the source, allowing you to read and understand the author's rationale for the used choices. It also comes with three variants. Use `strict` for production, `casual` for prototypes and `package` for dart pub packages or other packages with a public API. The **package** option is a nice feature if you write pub packages. Some lint rules are not so useful, or even get in the way, when you write applications, but are important when you write packages to help your package get a higher score on [pub.dev](https://pub.dev/).

The [very_good_analysis](https://pub.dev/packages/very_good_analysis) package has been around since **Sep 1, 2020**. It is very well maintained and the second most liked third party linting package, with more than 490 likes (Nov 20, 2023: **498 Likes**). The package is made and maintained by **Very Good Ventures** and a part of their **Very Good** branded packages. You can find VGV via their [website](https://verygood.ventures/) and on X/Twitter using handle [@VGVentures](https://twitter.com/VGVentures). 

From version 2.3.0, **Very Good Analysis** started treating missing required parameters and a missing return as **code errors**. I consider this a wise and welcome addition. From version 1.8.1 the **lint** package does this as well. It even adds treating function parameter new value assignments as warnings, bringing its strictness even higher than VGA in this respect. With Dart 3, VGA added treating `record_literal_one_positional_no_trailing_comma` as an error. 

Out of the compared packaged linters **very_good_analysis** enables the highest number of lint rules. With **188 rules, or 86.2%** of available and usable lint rules enabled in package version 5.1.0, it is the most strict and pedantic of the compared packaged linters. The **lint** package is only slightly less strict. With its 2.2.0 version, it is at **170 rules, or 78.0%** of available and usable linting rules enabled. 

Both packages track development of new Dart and Flutter lint rules well and are updated regularly. They both enable all critical and important rules. Both are excellent choices if you want stricter linting than Flutter offers out of the box, and would rather just update a package dependency to update your linting game.

If I was not using my own custom setup, I would perhaps use **very_good_analysis** over **lint**. Mostly because it is stricter in `lanaguage` analyzer setup section, by also enabling `strict-inference` and `strict-raw-types`. It is perhaps also a bit more actively maintained, at least it, for example, adopted Flutter 3.3 and Dart 2.18 linting rules using the new Dart `language:` settings quicker when they arrived. The `lint` package is also very strict, just not the strictest it tries to find the right balance between useful and annoying. This might fit your preferences better, plus it offers separate `casual` and `package` options.

There is no real winner here, both are excellent and stricter than the default `flutter_lints` package. 

### Third-party - Other options?

There are many additional third-party linting packages available on [pub.dev](https://pub.dev/). Below you can find some of them in order of number of likes (as of Dec 29, 2023). I have not analyzed them any further. Packages using custom lint rules, for special use cases and other packages, like e.g., `riverpod_lints` are not included. Only packages that mainly configure the Dart built-in static analyzer rules are listed below.

| Num  | Third-party lint package                                                                             | Likes |
|:----:|:-----------------------------------------------------------------------------------------------------|:------|
|  1   | [lint](https://pub.dev/packages/lint)                                                                | 821   |
|  2   | [very_good_analysis](https://pub.dev/packages/very_good_analysis)                                    | 521   |
|  3   | [pedantic_mono](https://pub.dev/packages/pedantic_mono)                                              | 67    |
|  4   | [surf_lint_rules](https://pub.dev/packages/surf_lint_rules)                                          | 48    |
|  5   | [solid_lints](https://pub.dev/packages/solid_lints)                                                  | 43    |
|  6   | [linteo](https://pub.dev/packages/linteo)                                                            | 30    |
|  7   | [flutterando_analysis](https://pub.dev/packages/flutterando_analysis)                                | 25    |
|  8   | [austerity](https://pub.dev/packages/austerity)                                                      | 22    |
|  9   | [extra_pedantic](https://pub.dev/packages/extra_pedantic)                                            | 22    |
|  10  | [netglade_analysis](https://pub.dev/packages/netglade_analysis) (also uses DCM)                      | 16    |
|  11  | [total_lints](https://pub.dev/packages/total_lints)                                                  | 14    |
|  12  | [lint_quido](https://pub.dev/packages/lint_quido) (also uses DCM)                                    | 11    |
|  13  | [carapacik_lints](https://pub.dev/packages/carapacik_lints)                                          | 10    |
|  14  | [yumemi_lints](https://pub.dev/packages/yumemi_lints)                                                | 9     |
|  15  | [dart_analysis](https://pub.dev/packages/dart_analysis)                                              | 9     |
|  16  | [altive_lints](https://pub.dev/packages/altive_lints)                                                | 8     |
|  17  | [appandup_lint](https://pub.dev/packages/appandup_lint)                                              | 7     |
|  18  | [deckweiss_lints](https://pub.dev/packages/deckweiss_lints)                                          | 6     |
|  19  | [strict](https://pub.dev/packages/strict)                                                            | 6     |
| 20   | [blackfoot_flutter_lint](https://pub.dev/packages/blackfoot_flutter_lint)    | 5     |

If there are some important third-party linter packages that are not included, please let me know and I will add them to the list. Maybe if/when some other linting rule package approaches the popularity of **lint** or **very_good_analysis**, I will also add it to my comparsion sheet further below. 

### Flutter Repository

I also find it interesting to follow what linting rules the **Flutter SDK repository** uses. During the past two years, there have been many new rules enabled in the Flutter SDK as well. Comparing an older version 1.4.0 (September 10, 2021) of my comparison table, to the current version of it 2.2.0 (Nov 7, 2023), we see that the Flutter repository (master channel) has gone from **129 enabled rules (67.2%)**, to **170 (78.0%)** enabled linting rules. The trend has clearly been to add more lint rules to the Dart language and its static analyzer, and for the Flutter project to adopt more of them. The Flutter repo uses much more rules than the rules the official [flutter_lints](https://pub.dev/packages/flutter_lints) package enables **101 (46.3%)**, for new Flutter projects.

An interesting choice the Flutter repo has always used, and that I personally like, is the `always_specify_types` rule. This makes the code very verbose, thus few developers like it. Its advantage is that it makes reading unfamiliar code easier, especially e.g., on GitHub where you cannot use the IDE to peek at the object type information. I tend to use it in public packages, but not in applications anymore.

## Used Rules?

What are the linting rule differences between all these packages? That is a good question. I guess I saved the most interesting part in this blog for last. I was curious about this as well, so I went through **all** the lint settings for the following lint packages and setups:

| Lint style                                                                                                                     | Sep 10, 2021  | % of rules | Nov 20, 2023 | +/- | % of rules |
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------:|-----------:|:------------:|----:|-----------:|
| [Dart Core *(v3.0.0)*](https://pub.dev/packages/lints)                                                                         |      26       |      13.5% |      33      |  +7 |      15.1% |
| [Dart Recommended *(v3.0.0)*](https://pub.dev/packages/lints)                                                                  |      74       |      38.5% |      88      | +14 |      40.4% |    
| [Flutter lints *(v3.0.1)*](https://pub.dev/packages/flutter_lints)                                                             |      85       |      44.3% |     101      | +16 |      46.3% | 
| [Pedantic *(v1.11.1) (Deprecated)*](https://pub.dev/packages/pedantic)                                                         |      52       |      27.1% |      50      |  -2 |      22.9% |
| [Effective Dart *(v1.3.2) (Deprecated)*](https://pub.dev/packages/effective_dart)                                              |      57       |      29.7% |      55      |  -2 |      25.2% |
| [Flutter SDK repository *(master)*](https://github.com/flutter/flutter/blob/master/analysis_options.yaml)                      |      129      |      67.2% |     170      | +41 |      78.0% | 
| [Lint *(v2.2.0)*](https://pub.dev/packages/lint)                                                                               |      147      |      76.6% |     170      | +23 |      78.0% |
| [Very Good Analysis *(v5.1.0)*](https://pub.dev/packages/very_good_analysis)                                                   |      153      |      79.7% |     188      | +35 |      86.2% |
| [RydMike - All ON, then turn OFF not wanted ones *(v2.2.0)*](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) |      171      |      89.1% |     196      | +25 |      89.9% |
| [All usable LINT rules](https://dart.dev/tools/linter-rules/all)                                                               |      192      |     100.0% |     218      | +26 |     100.0% |

The starting point values refer to the number of enabled lint rules in comparison table version 1.4.0 from **September 10, 2021**, and rules used now in the latest linting rules comparison table, which is version 2.2.0, updated **Nov 20, 2023**. 

> **NOTE:** The legacy deprecated linting packages **Pedantic** and **Effective Dart**, used two linting rules that have now also been deprecated. That is why their number of used rules have gone down, even if the packages themselves have not been updated since they were deprecated.

### Compare and Choose

You can use my comparison table to compare Dart and Flutter default linting, to both past and currently most popular linting packages, as well as the Flutter repository itself. You can see each rule they enable and make your own preferred choice based on the comparison.

If you want to stay on top of your linting rule setup yourself, then do as I do, roll your own linting rule configuration. Mostly, I do this to use even stricter linting rules than current package linters offer, and also to make the opinionated choices I prefer. Most linting packages on purpose avoid making any choice for you when it comes to highly opinionated personal preference rules.

I also like the clean setup of enabling all rules in one file, by including **all currently available rules** and then only turning OFF the rules I don't use. This keeps the setup easy to maintain. Feel free to do the same idea **or** take the easy route and just use the default [Flutter lints](https://pub.dev/packages/flutter_lints) or walk the narrow and strict path with [Very Good Analysis](https://pub.dev/packages/very_good_analysis) or [Lint](https://pub.dev/packages/lint).

If you don't care about linting and tuning it yourself, the nice part is that a good basic linting setup is a part of Flutter. From Flutter version 2.5, and later, you get a good basic rule set enabled by default for new projects. It was a good move by the Flutter team to offer this with the Flutter 2.5 release. It means that eventually all Flutter projects will use solid linting rules by default. Rules that will help improve the quality of produced Flutter apps and packages. As we have now reached Flutter version 3.16, this goal has now been realized to a large degree. The official linting rules packages also got major release update with the Flutter 3.16 and Dart 3.2 release, so make sure you upgrade if you are using it.

Here is the full comparison in a [**Google Sheet**](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA), enjoy!

[<img src="https://rydmike.com/assets/lint_compare.png?raw=true" alt="lint_compare"/>](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA)

*I may have made some mistakes in the review of the settings if you notice any, please let me know, and I will update it. You can find me on [Twitter](https://twitter.com/RydMike)*

## Even More Code Analysis and Linting?

If you want to go even deeper into Dart code analysis, I recommend taking a look at [Dart Code Metrics](https://dcm.dev/). It is a static analysis tool that helps you analyze and improve your Dart code quality. It collects analytical data on the code through calculating code metrics with configurable thresholds and provides additional rules for the Dart analyzer. DCM is a paid product, but open source projects can get a free license. Learn more at [DCM pricing](https://dcm.dev/pricing/).

If you are interested in building your own custom linting rules, you can check out the package [custom lint](https://pub.dev/packages/custom_lint). You can use it, to e.g. write a linter for your Dart or Flutter package. It is e.g. used to implement the custom lint rules used by **Riverpod**, in the [riverpod_lint](https://pub.dev/packages/riverpod_lint) package. 

---
*(Page updated Nov 20, 2023)*