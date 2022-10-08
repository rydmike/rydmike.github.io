---
title: "Correct Way to Add Padding to Flutter Slivers"
description: "Don't use normal padding with Flutter Slivers"
---

| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Blog](blog)                | [FlexColorPicker](colorpicker) | [Grid](gridview) | [Talo](talo)         |

# Correct Way to Add Padding to Flutter Slivers
*(Feb 21, 2020)*

You cannot wrap a Sliver with a normal Padding in Flutter. Well you can, but it will not render correctly if you have objects in the list with shadows that extend out into the padded area.

In this Gist demo when clicking on the **example 1** button, we see that padding works OK on a normal grid view, but in **example 2** we can see that using padding covers the shadows that should extend into the padded area, so we get a sharply cut shadow.

In **examples 3 and 4** it is demonstrated how this rendering issue can be solved by using SliverPadding instead. The difference may be subtle, especially when viewed separately, but it is there and does not look so good to a keen eye, below is a composite image showing the difference.

You can see this demo in a browser with [**DartPad here**](https://www.dartpad.dev/?id=e199cb754fc08f4e1500efc96e322eee&null_safety=true).  
<img src="https://rydmike.com/assets/sliverpadding.png?raw=true" alt="Sliver padding"/>

The difference is not so large on WEB build using the HTML render with this example. It is more clear on SKIA or desktop builds, due to the used elevation in the example and the difference in how HTML and SKIA renderer draws elevations.

Source GIST: [**Padding Slivers with SliverPadding and demo of why Padding does not work**](https://gist.github.com/rydmike/e199cb754fc08f4e1500efc96e322eee)  


---
Page updated 27.7.2021