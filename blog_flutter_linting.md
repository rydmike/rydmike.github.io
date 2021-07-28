| [Home](https://rydmike.com) | [Flexfold](flexfold) | [ColorScheme](colorscheme) | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | [Blog](blog)               |

## Flutter Linting Comparison
*(July 28, 2021)*

Dart and Flutter linting is important, if you have not used it before it is a good idea to start now.
At the end of this article I also present a comparison of different popular lint packages and the
Dart and Flutter lint rules they use.

## What is the Dart Linter?

The Dart linter is a static analyzer for identifying possible problems in your Dart source code. 
There are more than a hundred linter rules are available, checking anything from potential 
typing issues, coding style and formatting.

You can set up the Dart analyzer and linter to do your bidding
the way you like it. Some rules are more important than others, and some are just style
and personal preference related, the kind that developers like to debate forever.
When it comes to them, there is no real right or wrong, do what you prefer if a certain
style is not mandated in your project.

Enabling very strict linting rules on a code base that previously did not use it, can also
be very time-consuming. For such cases, gradually introducing more stringent lint rules is a good
idea. To do that, you may want to get to know the lint rules better and how to set them up
yourself, without using a package.

To study and read more about each lint rule, you can head over to the [Linter for Dart](https://dart-lang.github.io/linter/lints/) site.

## How Do I Use the Dart Linter?

Personally I like to start by enabling all lint rules in one file, and then including it in 
my `analysis_options.yaml` file. I simply call this file `all_lint_rules.yaml`.
You can grab the latest official and always up to date version of all lint rules
[here](https://dart-lang.github.io/linter/lints/options/options.html).

Both the `analysis_options.yaml` and the `all_lint_rules.yaml` can be placed in the root of your
Flutter project folder, same place where you have your `pubspec.yaml` file.

In my `analysis_options.yaml` I include the `all_lint_rules.yaml` file. 
I exclude commonly generated Dart files from being analyzed, and enable analyzer
strong-mode. In strong mode, I like to disable implicit type casts and implicit dynamic. I cannot 
recommend doing so enough. It might feel a bit tedious, but it will save you from a bunch of 
potential gotchas in Dart code.

I lift common mistakes that I think should be errors, to error level. Then the analyzer won't 
even let me compile code with these mistakes. I like to flag missing return and missing required
parameters as such errors, not as warnings or info. I keep parameter re-assignments
as a warning though, there are occasions when it may be needed.

My `analysis_options.yaml` file starts like this:


```yaml
# RydMike LINTER Preferences v1.2.0
# Include and activate all lint rules, later below we disable the not used or desired ones.
# For a comparison of all lint rules settings in rule style listed below, please see
# this Google sheet: https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA
include: all_lint_rules.yaml
analyzer:
  exclude:
    - "**/*.g.dart"
    - "**/*.freezed.dart"
    - "test/.test_coverage.dart"
    - "bin/cache/**"

  strong-mode:
    implicit-casts: false
    implicit-dynamic: false

  errors:
    # Otherwise we cause the import of all_lint_rules to warn, because of some rules conflicts.
    # We explicitly enabled even conflicting rules and are fixing the conflicts in this file.
    included_file_warning: ignore

    # Treat missing required parameters as an error, not as a hint or a warning.
    missing_required_param: error

    # Treat missing returns as an error, not as a hint or a warning.
    missing_return: error

    # DON'T assign new values to parameters of methods or functions.
    #
    # https://dart-lang.github.io/linter/lints/parameter_assignments.html
    #
    # Treat assigning new values to a parameter as a warning. I would almost like to set this
    # to an error. However, this warning rule or even more so if set to an error, can sometimes
    # be a bit problematic you include other code directly that does it a lot.
    # It does however, make code safer when this cannot be done without involving
    # an extra local variable for clarity and safety. Enabling this error, even as just a warning,
    # does get in the way a bit if all you want to do is a null to default value release runtime
    # safety/fallback assignment. For that use case you have to add a local rule override. With
    # null-safety, the need for this kind of null check and re-assignment to default if null,
    # pretty much goes away. Considering the comment in:
    # https://dart-lang.github.io/linter/lints/parameter_assignments.html:
    # "Assigning new values to parameters is generally a bad practice unless an operator
    #  such as ??= is used. Otherwise, arbitrarily reassigning parameters is usually a mistake."
    # One might even think the rule would allow using the ??= operator, but it does not. For now
    # I am keeping this lint as warning and overriding locally with
    #  ignore: parameter_assignments
    # when I need it for the ??= operator, or some copy/paste in of some code that does things
    # that needs it too and that I don't want to deal with fixing at the moment.
    parameter_assignments: warning

    # Allow having TODOs in the code.
    todo: ignore

linter:
  rules:
    ...
```

The rest of the settings is just turning OFF linting rules I do not want to use.
Since all rules are now ON by default, it is a list of rules
that should NOT be used. I try to keep it short.

As for what actually gets turned OFF, first there are some linting rules that conflict 
with each other. When it comes to them, you can go two ways. If you don't want to 
make a choice and want to be able to use both alternatives, then disable 
both rules. Alternatively choose one of them and disable the one you do not want to use.
I prefer to make choice, the conflicting rules are often highly opinionated.

A typical example of this is the `prefer_double_quotes` versus `prefer_single_quotes` choice.

Here is my choice and my rationale on this topic:

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
# Imo single quotes are easier to type. On my ISO keyboard it is next to Enter key and I don't need
# the Shit plus the far to reach nr 2 key on R1 to type it. Also, I don't think they compromise on
# readability. Then again if you don't care and don't mind mixing and matching, then ALSO
# turning OFF `prefer_single_quotes` works fine too and you can use either.
#
# I thought it was cleaner to stick to one style and, single quotes are easier to type for me,
# thus I turn OFF this `prefer_double_quotes` rule. There is another lint rules that recommends you
# to use double quotes when you otherwise would need to escape the single quote char, it works
# well you use the prefer_single_quotes rule as well.
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

In addition to things that conflict with their own counter-part, what else do I turn off? 
As little as possible, I prefer things pretty strict, but that is just my personal preference. 

I documented the choices I made, and the reasoning behind the choices at the point in time when I 
made them. I vary it slightly depending on if I am using linting for a package or an app, 
keeping it even stricter for public packages. These options and selections are also documented.

[**Here is a Gist**](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) with the full 
details of the settings I use in `analysis_options.yaml` for my personal projects.

I might change a few settings as things evolve. One rule I found myself disliking recently and 
disabling, is the `sort_constructors_first`. Sounds like it is a fine rule, right? 
For the default constructor I agree, I want it first too. 
However, **after that** I want to see all the properties of the 
default constructor, with their documentation comments. I find this useful for more complex
packages that may have constructors with a lot of named parameters.

If the `sort_constructors_first` rule is enabled, I am forced to scroll down to find the
properties far below after other named constructors and factories. This is just another minor 
example of personal style preference. There are many lint rules that 
are style and code consistency related. Get to know them and find your own personal preferences.

When you disable a lint rule, try to write a short note to your future self why you disabled it.
This is what I wrote down concerning why I turned off the `sort_constructors_first` rule. 

```yaml
# DO sort constructor declarations before other members.
#
# I do like this lint rule, but I want to have the default constructor first, followed
# by its properties, after this other named constructors and factories. This rule gets
# in the way of that and forces you to put (often final) constructor properties after all
# the named constructors and factories, making them tedious to find and disconnected from
# where I want to see, read and handily edit them. This is especially the case if there are
# many constructors and factories and they have a lot of parameters. For now, I disable
# this rule and order things as described above, which apart from the default constructor
# properties coming right after the constructor, is the only part where I in practice
# deviate from this rule, so other than that I do put constructors first as well.
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

The above is also an example of the documentation style I use for all lint rules that
I turn OFF. Yes it is verbose, but now I can find my past reasoning for the choice I made. 
I can also find references to what others have chosen as their lint preference for each rule 
that I do not use.

## What About Using a Third Party Linting Package?

There are many 3rd party packages that define linting rules for you. Previously most notably 
[Effective Dart](https://pub.dev/packages/effective_dart), [Pedantic](https://pub.dev/packages/pedantic) and 
[Lint](https://pub.dev/packages/lint) as well as [Very Good Analysis](https://pub.dev/packages/very_good_analysis)
are popular packages that comes with their recommended rules.

There is nothing wrong with using any of these packages if they fit your needs. Using a 
ready-made linting package may very well be the right choice for you. If you are not interested in
getting to know the rules yourself and follow-up on new rules that are added by the Dart team 
occasionally, then please do use a package. I have a personal recommendation regarding
which one as well.

For my personal projects I just prefer the clarity of enabling all rules in one file, and then 
disabling the ones that do not fit my use case and preferences. 

Earlier I started with one of the above packages too, but I noticed that when I needed or wanted to modify a few 
rules. I then ended up with **enabling or disabling** rules in relation to used package settings. This got a bit messy
to keep track of. Eventually it felt cleaner to just turn everything ON, and then just have OFF definitions in my 
`analysis_options.yaml`. Super simple, clear and easy to modify when needed, without messing things up.
Plus no need for a package for this relatively simple setup.

In a big project the lint rules have probably been agreed and defined already for you, then just stick to that. If you
find that the lint rules have not been defined, nor documented why they are a certain way in the project, well 
then they really should be.

## Which Lint Package Should I Use?

If I want to use a package, which lint package should I use?
Answering this question recently got a lot easier. First, both the package
[Effective Dart](https://pub.dev/packages/effective_dart) and [Pedantic](https://pub.dev/packages/pedantic)
have been deprecated. For a new project I do not recommend them anymore. 

Pedantic was from Google, despite its name, it was not very strict nor pedantic.
Dart and Flutter teams recently launched two new lint packages, let us take a look at them.

### Lints
The first one is called [lints](https://pub.dev/packages/lints). 
It was launched as version 1.0.0 on May 12, 2021.
This package contains the new official recommended selection of lint rules for Dart projects.

It comes in two flavors, the absolute minimum lints, called **Core lints**, and a broader set
called **Recommended lints**. The recommended set also includes the core lints.
In the Dart guide you can read more about it [here](https://dart.dev/guides/language/analysis-options#enabling-linter-rules).

### Flutter lints

The second package is called [flutter_lints](https://pub.dev/packages/flutter_lints), 
It was also launched as version 1.0.0 on May 12, 2021. The Flutter lints package includes the recommended set
from Dart lints, plus a few more rules that are important in Flutter projects. These Dart and Flutter lint 
rule sets are built as supersets, with increasing amount of rules enabled.

Starting from Flutter version 2.3.0-12.0.pre, the package
[flutter_lints](https://pub.dev/packages/flutter_lints) defines the latest set of officially 
recommended lints that encourage good coding practices for **Flutter** apps, packages, and plugins.

Here is the even bigger thing making it the obvious choice. Projects created 
with **flutter create** using Flutter **version 2.3.0-12.0.pre or newer** are 
automatically enabled to use the **Flutter lints** package. 

When this is written, Flutter stable channel is still on version 2.2.3, you will not yet get
these lints automatically enabled when you create a new Flutter project on stable 
channel. It is however coming soon, and you can of course easily make your Flutter project 
use these lints already now.

You can find the instructions [here](https://flutter.dev/docs/release/breaking-changes/flutter-lints-package).

Since this lint rule set is arriving soon as the new default lint package for new Flutter
projects, there is no sense in recommending any other linter package than 
[**flutter_lints**](https://pub.dev/packages/flutter_lints).

### I Prefer...

All that being said, as long as [**Lint**](https://pub.dev/packages/lint) or 
[**Very Good Analysis**](https://pub.dev/packages/very_good_analysis) 
have not been deprecated, and you are used to them, or already using them, or just prefer them, or 
even some other comparable lint package, they are still perfectly good choices as well.

If you want to stay on top of your linting rule setup yourself, then do as I do and roll your
own. Mostly I do this to use even stricter lint rules than package linters use,
and to make the opinionated choices I prefer. Most lint packages on purpose avoid making 
any choice for you when it comes to the opinionated personal preferences rules.

I also like the clean setup of enabling all rules and turning off 
the ones I don't use, it keeps the setup easy to maintain. 
Feel free to do the same **or** take the easy
route and start using [flutter_lints](https://pub.dev/packages/flutter_lints) now. 

If you don't care about linting and tuning it yourself, the really nice part is that a good 
linting setup is coming your way anyway. In the next stable version of Flutter you will 
get an excellent rule set enabled by default for new projects. It is a really cool
and a smart move by the Dart and Flutter teams to offer this. It means that eventually 
all Flutter developers will use more strict lint rules by default, rules that will help 
improve the quality of produced Flutter apps.

## What Are the Rule Differences Between All These Packages?

What are the lint rule differences between all these packages? That is a **very** good question.
I guess I saved the most interesting part for last. I was very curious about this as well, so I went through 
the lint settings for the following lint packages and setups:

- [Dart Core](https://pub.dev/packages/lint)
- [Dart Recommended](https://pub.dev/packages/lints)    
- [Flutter Lints](https://pub.dev/packages/flutter_lints)  
- [Pedantic *(Deprecated)*](https://pub.dev/packages/pedantic)
- [Effective Dart *(Deprecated)*](https://pub.dev/packages/effective_dart)
- [Flutter SDK repository](https://github.com/flutter/flutter/blob/master/analysis_options.yaml)
- [Lint](https://pub.dev/packages/lint)
- [Very Good Analysis](https://pub.dev/packages/very_good_analysis)
- [RydMike - Turn ON all and then turn a few selected ones OFF](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c)

Ok enough talk, here is the comparison in a [**Google Sheet**](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA), enjoy!

[<img src="https://rydmike.com/assets/lint_compare.png?raw=true" alt="lint_compare"/>](https://docs.google.com/spreadsheets/d/1Nc1gFjmCOMubWZD7f2E4fLhWN7LYaOE__tsA7bf2NjA)

*PS. I may have made some mistakes in this first review of the settings, if you
notice any, please let me know, and I will update it. You can find me on [Twitter](https://twitter.com/RydMike)*
---
Page updated 28.7.2021