---
title: "ClipRect on Container with BoxShadow"
description: "Nit-picking a Flutter ClipRect, clip bleed issue"
---

| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Articles](blog)            | [FlexColorPicker](colorpicker) | [Grid](gridview) |        |

# ClipRect on Container with BoxShadow
*(Jun 4, 2020)*

A pet nit-picking rendering issue of mine is the ClipRect issue. It is mentioned in my issues-page as well. ClipRect is unable to properly clip away all of a box shadow like it should when you apply ClipRect to the same box as a shadow. 


This is a simple DartPad demo of the issue that fails to render correctly with the current DartPad version too. The issue still existed in Flutter 2.2.3 Dart SDK 2.13.4 when this page was last updated.

The root cause might be rounding or precision errors in antialias methods used in the SKIA engine. This issue is more pronounced on a screen with device pixel density 1.0. As the pixel density increases, the issue is seen more rarely, supporting a precision or rounding error in the used rendering engine.

You can see this it in a browser with [**DartPad here**](https://www.dartpad.dev/?id=0c6a2412cb3222a02e25cfead9ba8d29&null_safety=true). <img src="https://rydmike.com/assets/ClipRectIssue.png?raw=true" alt="ClipRect Issue"/> Source GIST: [**ClipRect over Container with BoxShadow**](https://gist.github.com/rydmike/0c6a2412cb3222a02e25cfead9ba8d29)


---
Page updated 27.07.2021