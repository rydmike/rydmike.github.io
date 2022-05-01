| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Blog](blog)                | [FlexColorPicker](colorpicker) | [Grid](gridview) | [Talo](talo)         |

# Constrained Centered Layout and Theming Flutter
*(Oct 26, 2021)*

In this article I discuss challenges with the web center constrained layout in
Flutter, and provide an introduction and example on how to theme 
Flutter applications.

## Why Another Theming Example?

The "right", or at least easy way to effectively theme a Flutter application
is a bit confusing and frustration point for many new, and even
seasoned Flutter developers. I recently came across this issue
[report and question](https://github.com/flutter/flutter/issues/92209). It
inspired me to rework this [Tweet thread](https://twitter.com/RydMike/status/1445573217272299522) I did about it earlier, to a 
[Gist comment doc](https://gist.github.com/rydmike/f2f45a57d4998f3c61d3fa197b5a7370#gistcomment-3934255),
just to answer the question. And now also to this easier to read and better 
formatted article, that also elaborates further on several points.

## Used example

The example in this article can be run and tested in DartPad [here](https://dartpad.dev/?id=f2f45a57d4998f3c61d3fa197b5a7370&null_safety=true), and its source code 
is available in a GIST [here](https://gist.github.com/rydmike/f2f45a57d4998f3c61d3fa197b5a7370).

# The Challenge - Constrained Center Layout

In this [Tweet](https://twitter.com/biz84/status/1445400059894542337?s=20) 
FlutterDev course producer and Flutter connoisseur
[Andrea Bizzotto](https://twitter.com/biz84) shows us how to make a typical 
web like layout in Flutter.

A layout that is centered and 
width constrained. This keeps a reasonable max column width on the content, 
also on very wide screens. This makes the content easier to read, since it 
never expands to fill the max width of typically very wide desktop screens.

A solution, where wrapping the child body content like this, is presented by 
Andrea:

![image](https://user-images.githubusercontent.com/39990307/138179067-83b6065d-b90b-4766-8352-05e91b7fc778.png)   
_**Shown Web style constrained center layout.**_

This works well and produces the desired result in the example. But, what 
happens if we use this approach with scrolling content?

## What is wrong with the above solution?

Let us test how the setup presented by Andrea works with scrolling content.
To do so, we keep Andrea's nice login card and add a bunch of other things 
to it, and put it all in a scrolling view. When we do so, we get this:

![scrollbars1](https://user-images.githubusercontent.com/39990307/138180367-17c1af54-880b-48ac-b7e6-61154f30c756.gif)   
_**Scrollbars next to centered content!**_

As shown, we got scrollbars next to the body content. That is not so nice, they
don't belong there, they should be next to the end side of the screen.

## How do we fix this?

In this example we start with the same setup, but use a `Center`, with 
`ConstrainedBox` and `Padding`, that gets their configuration via 
properties that have defaults. We loose the extra `Card`. We make it more
generic and leave it to parent widget to decide if it wants to be in a
`Card` or not.

Here is our new starting point, that also produces the same result concerning 
the not desired content centered scrollbars.

![image](https://user-images.githubusercontent.com/39990307/138179190-c3d2e7b3-89f8-4576-83b3-fc9513d7374b.png)  
_**Alternative starting point.**_

This is actually very simple to fix. We disable the scrollbars for the
child and put our own `Scrollbar` outside of the`Center` widget.

![image](https://user-images.githubusercontent.com/39990307/138179261-66df7b87-3a1b-4ab0-9006-d8b02ad468e6.png)  
_**Moving scrollbars to the edge.**_

We also assigned a `ScrollController` to `Scrollbar`. This controller may 
when needed be passed in from parent, where it is created and connected to the
actual scrolling view.

```dart
  /// Optional scroll controller for the constrained page body.
  ///
  /// If you use a scrolling view as child to the page body, that needs a
  /// scroll controller, we need to use the same controller here too.
  ///
  /// If null, a default controller is used.
  final ScrollController? controller;
```  

## The Result

This seems to work OK, right? The scrollbars are now on the edge, 
so that is good and as it should be. Done? Not quite.

![scrollbars2b](https://user-images.githubusercontent.com/39990307/138181444-164a1e52-a4bf-405f-8ea8-cfcf5726c50f.gif)
_**Scrollbars now next to view end side, but...**_

There is an issue with this solution, if you touch or mouse wheel scroll 
from the expanding margins that do not contain any content, the content 
does not scroll.

Web pages, using this layout, do not behave this way. They do scroll from the
empty margins too. It is poor UX that it does not do so here as well.

**Do you have a simple fix for this?** 
Have you solved this layout problem in Flutter? Do you already have the perfect 
solution for it? If you do, please let me know.

I have not seen a good simple solution for it yet. I admit I only looked at the 
issue briefly once. There might be a simple solution, or it might actually need
a lower level custom layout to be solvable effectively. 
I do plan to look into eventually when I really must have a solution for it.
However, I'm putting on hold looking into further for now.

Next, let's dissect this example app further, it contains many other 
fascinating goodies.

# The HomePage in this Demo

The `HomePage` has these interesting features:

1. The constrained body via `CenterConstrainedBody`
2. Having a `CustomScrollView`, with `SliverList`s, `SliverGrid`  (6) and `SliverToBoxAdapter`s.
4. We can toggle theme mode with the `ThemeModeSwitch`
5. See theme colors via `ShowThemeColors`
6. And yes, Andrea's mock sign-in card is there too.

![image](https://user-images.githubusercontent.com/39990307/138179441-efecf76a-4e29-46ea-8989-712e2b6e87b2.png)  
_**Parts of the example HomePage.**_


The slivers have been written about in many other blog posts with great detail. 
We will skip that part here, but let's dig deeper into the theme.

# Demo App Theme

Let's back up a bit, the theme looks a bit fancy. It is not totally ordinary, 
what is going here with the theme?

If you look at the demo code, you can see that we have for 
example not put the border rounding on the widgets, they are a part of the
global theme for the demo application. If we want to make everything more round,
like in MaterialYou (Material 3), then obviously this is the way to do it.

The dark mode and light mode also have a hint of primary color mixed into the 
background color. This is called alpha blend of a color, in this case the 
primary color, into background and other surface colors.

This color design principle appears to be used quite extensively in the new 
MaterialYou based designs as well. We can see it used a lot in Android 12, 
creating very neat and personal touches to the visuals.

![scrollbars3](https://user-images.githubusercontent.com/39990307/138184008-225a4af9-61e0-4e04-8e2c-645c242735c2.gif)   
_**Light and dark theme of the example app.**_

## Changing Theme Mode

The theme toggle is a simple `StatelessWidget` using Flutter
`ToggleButtons`. You can make pretty cool stuff with it, and it is easy to use.
As an example, here is how the theme toggle is done:

![image](https://user-images.githubusercontent.com/39990307/138179489-0a026c77-089a-4e69-8e31-fac456bc8801.png)  
_**ToggleButtons based theme mode switch.**_

The `MaterialApp` setup is just a very basic example, a light and a dark theme 
with a call back to toggle the mode. Yes, you can use system mode too and let
the theme change with host's light and dark mode changes.

![image](https://user-images.githubusercontent.com/39990307/138179556-dc165154-128b-4c3f-bf7a-0e83b9b0c1e2.png)  
_**Setup of the MaterialApp.**_

The app uses very standard Flutter theming, no magic. I wrapped the light and 
dark themes in a simple custom `AppTheme` class. 

The theming has some perhaps not entirely basic things going on. It is still 
using just normal Flutter **Material** colors, but with some alpha-blend flair,
and slight transparency on the `AppBar` and `BottomNavigationBar`, so we can 
see the content as it scrolls behind them.

![image](https://user-images.githubusercontent.com/39990307/138179674-bd0de202-789d-405d-b2ad-80d61418a836.png)   
_**The light theme definition.**_

The important take-away about the used theme here, is that we are creating the
theme using the `ThemeData.from` factory, that takes a `ColorScheme` and not 
using the `ThemeData` factory constructor. This way we get a theme that 
follows the Material-2 design guide. 

Using `ThemeData.from` a `ColorScheme.dark` as starting point is even more
important for the fidelity of the dark theme, since it results in dark surface
colors and elevation overlay on surfaces, that follow the Material design guide.
The theme factory `ThemeData` does not do this.

For more information on theming please se the Material design guide [here](https://material.io/design/color/the-color-system.html#color-usage-and-palettes) concerning light theme, and [here](https://material.io/design/color/dark-theme.html#usage)
for dark theme design.

![image](https://user-images.githubusercontent.com/39990307/138179702-45457076-dc94-49f2-827a-ceccb85b2704.png)   
_**The dark theme definition.**_

This way of creating Flutter themes is not really so well covered in the 
official documentation yet. You have to read about it in source code 
comments and/or API docs.

## Adding Widget Sub-themes

We also add some needed theme helper functions to the same `AppTheme` class 
with more purposefully designed (opinionated) sub-themes that we want to use.  

In these sub-theme examples we do some adjustments to the `CardTheme` and 
`InputDecorationTheme`:

![image](https://user-images.githubusercontent.com/39990307/138179747-4e8da854-b370-42c6-bbd2-d6c171fc65c2.png)   
_**Card and InputDecorator**_

As well as to the `ElevatedButtonThemeData` and `ToggleButtonsThemeData` 
like this: 

![image](https://user-images.githubusercontent.com/39990307/138179765-95e506a3-d36b-44d0-8a60-d586a6fc7232.png)   
_**ElevatedButton and ToggleButtons**_

There is also a custom app bar and bottom navigation bar theme data definition. 

![image](https://user-images.githubusercontent.com/39990307/138183872-8e0db2f8-7a37-4536-ab14-c4677003e6b5.png)   
_**BottomNavigationBar**_

These just to demonstrate a few simple sub-theme examples, including among other
things the more rounded shapes.

All in all, pretty straight forward and the end result is pretty cool and nice
looking.

![image](https://user-images.githubusercontent.com/39990307/138179840-0502d56f-5a31-4423-a98d-8304506d7345.png)
_**Example shown running in DartPad**_

As mentioned at the beginning of the article, you can try the example
in a live DartPad demo here [here](https://dartpad.dev/?id=f2f45a57d4998f3c61d3fa197b5a7370&null_safety=true)

# State of Flutter Theming

You might have noticed that some of Flutter's sub-theme data classes do not 
end with `Data` in their class name. The design goal is that they all should
do so, but due to legacy naming inconsistencies, some do not. 

There are also many legacy colors that widgets still depend on in the 
`ThemeData` class directly. There is a migration plan on how to clean up
`ThemeData` and move towards having the colors that widgets depend on for their
default color design, to be based on `ColorScheme` class, via property
`colorScheme` in `ThemeData`.

To some extent this migration has progressed, but there is still
a lot of work pending. Some of it is hard to clean up without breaking
past Flutter code that a lot of application use. You can read more about this
design change and migration in this [Flutter design document](https://docs.google.com/document/d/1kzIOQN4QYfVsc5lMZgy_A-FWGXBAJBMySGqZqsJytcE/edit).

At the time of writing we do not yet know what kind of adjustments 
Material You will bring to theming in Flutter. It could be very minimal 
changes, or we might even see a new cleaner theming solution.

# Finally

Do you have a nice solution that also scrolls from the expanding side margins?
Please do let me know! 


---
Created 26.10.2021