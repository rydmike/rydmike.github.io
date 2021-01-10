| [Home](https://rydmike.com) | [Flexfold](flexfold) | [ColorScheme](colorscheme) | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | Blog                       |

## Flutter Santa's Blog

Occasionally I publish Flutter Gists that you can try in DartPad. The Gists were typically made
to present something that did not look quite right, but sometimes they can just be a Flutter 
example, snippet or a setup I found useful and wanted to share in short Blog like format,
and also document it, so I can find it myself when I need it again.

**Chill, Peace and Flutter love to ya all!** 💙  
<img src="https://rydmike.com/assets/flutter_santa.jpg?raw=true" alt="flutter santa" width="340"/>   


---

## My Flutter Linting Preferences
*(Jan 10, 2021)*

In your own projects you can set up the Dart analyzer and linter to do your bidding, the way you like it, 
without having to follow any corporate shared standard for it. I like to start by enabling all lint rules 
in a file, and including it in my `analysis_options.yaml` file. I simply call this file `all_lint_rules.yaml`,
you can grab the latest official and always up to date version
[**here**](https://dart-lang.github.io/linter/lints/options/options.html).

In my `analysis_options.yaml` I include this file. Exclude generated Dart files from being analyzed and enable 
strong-mode. I lift things to error level that I think should be errors, then the analyzer won't even 
let me compile things that do not comply.

The rest is just turning OFF a few linting rules that conflicts with each other, by disabling the choice I 
do not use. Finally, I turn OFF the rules I really don't want. The `analysis_options.yaml` for it looks
like this:


```yaml
# Include and activate all lint rules, later below we disable the not used or desired ones.
include: all_lint_rules.yaml
analyzer:
  exclude:
    - "**/*.g.dart"
    - "**/*.freezed.dart"

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

    # Allow having TODOs in the code.
    todo: ignore

    # Causes false positives (https://github.com/dart-lang/sdk/issues/41571
    top_level_function_literal_block: ignore

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
    #  // ignore: parameter_assignments
    # when I need it for the ??= operator, or some copy/paste in of some code that does things
    # that needs it too and that I don't want to deal with fixing at the moment.
    parameter_assignments: warning

# LINTER Preferences
#
# Disable unwanted or conflicting lint rules.
linter:
```

The rest, the `linter:` section is just a list of what should be turned OFF. As for what actually gets turned OFF, 
apart from anything that conflicts with its own 
counter-part, not much. I prefer things pretty strict, but that is just my personal preference. I documented the choices
I made, and the reasoning behind the choices at the point in time when I made them. I vary it slightly depending on if I
use it for a package or an app, keeping it even stricter for a public package, these options are also documented.

[**Here is the Gist**](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) with the full details of the 
settings I use in `analysis_options.yaml` for my personal projects.

I might change a few settings as things evolve. One rule I found myself disliking recently and disabling, is
the `sort_constructors_first`. Sounds like it is fine, right? For the default constructor I agree, I want it first
too, but **after that** I want to see all the properties of the default constructor, with their documentation 
comments, and not be forced to scroll down to find them far below after all other named constructors and factories.

```yaml
# DO sort constructor declarations before other members.
#
# I do like this lint rule, but I want to have the default constructor first, followed
# by its properties, after this other named constructors and factories. This rule gets
# in the way of that and forces you to put (often final) constructor properties after all
# the named constructors and factories, making them tedious to find and disconnected from
# where I want to see, read and handily edit them. This is especially the case if there are
# many constructors and factories and they have a lot of parameters. For now, I disable
# this rules and order things as described above, which apart from the default constructor
# properties coming right after the constructor, is the only part where I in practice
# deviate from this rule, so other than that I do put constructors first as well.
#
# Other known linters use:
# Pedantic       disabled : https://pub.dev/packages/pedantic
# Effective Dart disabled : https://pub.dev/packages/effective_dart
# Lint           disabled : https://pub.dev/packages/lint
#                           Discussion https://github.com/passsy/dart-lint/issues/1
# Flutter repo   enabled  : https://github.com/flutter/flutter/blob/master/analysis_options.yaml
sort_constructors_first: false
```

The above is also an example of the documentation style I used in the Gist for all lint rules that
I turned OFF. Yes it is verbose, but now I can find the rule quickly, read my past reasoning for the choice I made, 
and find references to what other have chosen as their lint preference for each rule that I have turned OFF.

### Why Not Use a Linting Package?

There are many packages that define linting rules for you, most notably 
[Effective Dart](https://pub.dev/packages/effective_dart), [Pedantic](https://pub.dev/packages/pedantic) and 
[Lint](https://pub.dev/packages/lint) that specify their own rules to fit their standard and requirements.
Nothing wrong with using any of these packages, if they fit your needs. I just preferred the clarity of 
enabling all rules in one file, and then just disabling the ones that did not fit my usage and preferences. 

Earlier I started with one of the above packages too, but I noticed that when I needed or wanted to modify a few 
rules, I ended up with **enabling or disabling** rules in relation to used package setting. This got a bit messy
to keep track of. It felt cleaner to just turn everything ON, and then just have OFF definitions in my 
`analysis_options.yaml`. Super simple and clear to modify when needed, without messing things up, and also no need for 
a package for this relatively simple setup.

In a big project the lint rules have probably been agreed and defined already for you, then just stick to that. If you
find that the lint rules have not been defined, nor documented why they are a certain way in the project, they really 
should be.

---

## ClipRect over Container with BoxShadow
*(Jun 4, 2020)*

A pet nit-picking rendering issue of mine is the ClipRect issue. It is mentioned in my issues page as well. This
is a simpler DartPad demo of the issue that still fails to render correctly with current DartPad version too.

You can see this it in a browser with [**DartPad here**](https://www.dartpad.dev/0c6a2412cb3222a02e25cfead9ba8d29?).  
<img src="https://rydmike.com/assets/ClipRectIssue.png?raw=true" alt="ClipRect Issue"/>  
Source GIST: [**ClipRect over Container with BoxShadow**](https://gist.github.com/rydmike/0c6a2412cb3222a02e25cfead9ba8d29)

---

## Correct Way to Add Padding to Slivers
*(Feb 21, 2020)*

You cannot wrap a Sliver with normal Padding in Flutter, well you can, but it will not render correctly if
you have objects in the list with shadows that extend out into the padded area.

In this Gist demo when clicking on the **example 1** button, we see that padding works OK on a
normal grid view, but in **example 2** we can see that using padding covers the shadows that should
extend into the padded area, so we get a sharply cut shadow.

In **examples 3 and 4** it is demonstrated how this rendering issue can be solved by using SliverPadding instead.
The difference may be subtle, especially when viewed separately, but it is there and does not look so good to a 
keen eye, below is a composite image showing the difference.

You can see this demo in a browser with [**DartPad here**](https://www.dartpad.dev/e199cb754fc08f4e1500efc96e322eee?).  
<img src="https://rydmike.com/assets/sliverpadding.png?raw=true" alt="Sliver padding"/>  
Source GIST: [**Padding Slivers with SliverPadding and demo of why Padding does not work**](https://gist.github.com/rydmike/e199cb754fc08f4e1500efc96e322eee)  


---
Page updated 10.1.2021