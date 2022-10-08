---
title: "Responsive Staggered Grids in Flutter"
---

| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | [Flexfold](flexfold) |  
| [Blog](blog)                | [FlexColorPicker](colorpicker) | Grid             | [Talo](talo)         |

# Responsive Staggered Grids in Flutter

This is a Flutter responsive web grid demo that I made with a very early version of Flutter for Web, using Flutter master 
v1.10.3-pre.67 on a Windows 10 desktop 18.9.2019. The demo includes an early Web layout test I made with [**Romain Rastel's**](https://twitter.com/lets4r) popular [**Flutter Staggered Grid View package**](https://pub.dev/packages/flutter_staggered_grid_view) already in 2019.

## Web Example Build from 2019
**Using: StaggeredGridview 0.3.0** 

This old build from 2019 is still published [**and running here**](https://rydmike.com/gridtest). The version showed how to set up Flutter WEB and Desktop in the same project in 2019. Back then you needed `dart.io` in Flutter Desktop, but that did not compile in Flutter WEB. To get around this, the use of a conditional Dart lib import was needed and demonstrated. Staggered Grid version [0.3.0](https://pub.dev/packages/flutter_staggered_grid_view/versions/0.3.0) was used in this old build.

<img src="https://rydmike.com/assets/stag_grid1.png?raw=true" alt="Staggered grid 1" width="600"/>

The key feature of this small demo is the responsive grid using the Material breakpoint system, demoed with the standard Flutter **GridView**, and the masonry style **StaggeredGridView** layout.

<img src="https://rydmike.com/assets/stag_grid2.png?raw=true" alt="Staggered grid 2" width="600"/>

A keen observer can see that **StaggeredGridView** package has a bug that can be seen in the demo when resizing the browser window horizontally. You can also observe the issue in this GIF screen recording:

<img src="https://rydmike.com/assets/StagGridIssueDemo1.gif?raw=true" alt="Staggered grid issue gif" width="800"/>


## Web Example Build from 2021
**Using: StaggeredGridview 0.4.1**

The extra conditional import for combined desktop and web build are no longer needed when building the app in 2021. After migrating the old project to null-safety migration, and some minor updates with random colored panels and an about-box accessible via the AppBar on the main screen. We can build the same demo from 2019 with Flutter 2.8.0 in late 2021 and test it with the latest released StaggeredGridview package version 0.4.1.

When we do, we can however still see that the issues with Staggered Grid remain in that build when using [Staggered Grid v 0.4.1](https://pub.dev/packages/flutter_staggered_grid_view/versions/0.4.1) and Flutter 2.8.0. It can be seen and [**tested here**](https://rydmike.com/gridtest-0-4-1). The issue has been recorded [here #167](https://github.com/letsar/flutter_staggered_grid_view/issues/167) and [here #138](https://github.com/letsar/flutter_staggered_grid_view/issues/138). 

## New Dev Version from Late 2021
**Using: StaggeredGridview 0.5.0-dev.1**

If we switch to version [0.5.0-dev.1](https://pub.dev/packages/flutter_staggered_grid_view/versions/0.5.0-dev.1) the issues are fixed. This is demonstrated in my [Tweet here](https://twitter.com/RydMike/status/1470110726429843467) and shown in the [screen recording here](https://twitter.com/RydMike/status/1470110719177895946). 

The API in version **0.5.0-dev.1** is very different from **0.4.1**. It no longer supports the generic staggered grid layout using an infinite builder. That view is only intended for a small amount of items, like row and column. As discussed starting in [Tweets here](https://twitter.com/RydMike/status/1470110726429843467?s=20) and explained by Romain [here #210](https://github.com/letsar/flutter_staggered_grid_view/discussions/210). It does however have a new **MasonryGridView** layout that fulfills most needs. It also gains a number of new interesting layouts not shown in this demo. Please refer to the package examples to see and try them.

For comparison the new version [**0.5.1-dev.1 can be tested here**](https://rydmike.com/gridtest-0-5-0-dev-1). It no longer shows the resizing issues and is much faster.

# Source Code

The source code for this Flutter web demo is available in my [**resp_stag_grid**](https://github.com/rydmike/resp_stag_grid) GitHub repository. The master branch contains the version using the StaggeredGridView 0.5.0-dev.1 package. There is a separate branch with the demo using the [0.4.1 release](https://github.com/rydmike/resp_stag_grid/tree/using-stg-0-4-1).


---
Page updated 13.12.2021
