| [Home](https://rydmike.com) | [Flexfold](flexfold) | [ColorScheme](colorscheme) | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | Experiments                |

## Gist Experiments and Mixed Goodies

Occasionally I publish Flutter Gists that you can try in DartPad. Often the Gists were made
to present something that did not look quite right, but sometimes they can just be a Flutter example, snippet or setup 
I found useful and wanted to share.

---

### My Dart and Flutter Analyzer and Linting Preferences

In your own projects you can set up the Dart analyzer and linter to do your bidding, the way you like it, 
without having to follow any corporate shared standard for it. I like to start by enabling all lint rules 
in a file and including it in my `analysis_options.yaml` file.

I enable strong-mode, and lift things to error level that I think should be errors, so the analyzer won't even 
let me compile stuff that does not comply to those settings.

The rest is just turning OFF a few lint rules the conflicts with each other by using the choice I want when there 
are mutually exclusive rules, and then of course turning OFF the stuff I don't want.

<img src="https://rydmike.com/assets/lint_rules.png?raw=true" alt="lint rules"/>

As for what gets turned OFF, apart from anything that conflicts with its counter-part. Not much, I prefer things 
pretty strict, but that is just my personal preference. I documented the choices I made, and the 
reasoning behind the choices at the point in time when I made them. I vary it slightly depending on if I use it 
for a package or an app, keeping it even stricter for a public package, these options are also documented.

[Here is the Gist](https://gist.github.com/rydmike/fdb53ddd933c37d20e6f3188a936cd4c) with the full details of the 
settings I use in `analysis_options.yaml` for my personal projects.

I might change a few settings as things evolve. One rule I found myself disliking recently is
the `sort_constructors_first`. Sounds like it is all good, right? For the default constructor I agree, I want it first
too, but **after that** I want to see all the properties of the default constructor with their comments, and not be 
forced to scroll down to see them after all named constructors and factories.

```yaml
# I do like this lint rule, but I want to have the default constructor first, followed
# by its properties, after this other named constructors and factories. This rule gets
# in the way of that and forces you to put (often final) constructor properties after 
# the named constructors and factories, making them tedious to find and disconnected from 
# where I want to see and read them. This is especially the case if there are many 
# constructors and factories and they have a lot of parameters.
sort_constructors_first: false
```

#### Why Not Use a Package?

There are many packages that define linting rules for you, most notably 
[Effective Dart](https://pub.dev/packages/effective_dart), [Pedantic](https://pub.dev/packages/pedantic) and 
[Lint](https://pub.dev/packages/lint), which basically take the defaults and specify their own overrides 
to fit their standard and requirements. Nothing wrong with using any of these packages, if they fit your needs. I 
just preferred the clarity of enabling all rules, and then just disabling the ones that did not fit my preferences. 

Earlier I started with one of the above packages too, but I noticed that when I needed or wanted to modify a few rules, 
I ended up with enabling or disabling rules in relation to used package setting. That just got a bit messy to keep 
track of. It felt cleaner to just turn everything ON, and the just have OFF definitions in my 
`analysis_options.yaml`, super simple to modify when needed, without messing things up and also no need for a package
for this relatively simple setup.

In a big project the lint rules have probably been agreed and defined already, then just stick to that. If you find 
that the lint rules have not been defined, nor documented why they are a certain way in the project, they really 
should be.

### Correct Way to Add Padding to Slivers

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

### ClipRect over Container with BoxShadow

A pet nit-picking rendering issue of mine is the ClipRect issue. It is mentioned in my issues page as well. This
is a simpler DartPad demo of the issue that still fails to render correctly with current DartPad version too.

You can see this it in a browser with [**DartPad here**](https://www.dartpad.dev/0c6a2412cb3222a02e25cfead9ba8d29?).  
<img src="https://rydmike.com/assets/ClipRectIssue.png?raw=true" alt="ClipRect Issue"/>  
 Source GIST: [**ClipRect over Container with BoxShadow**](https://gist.github.com/rydmike/0c6a2412cb3222a02e25cfead9ba8d29)  

---
Page updated 9.1.2021