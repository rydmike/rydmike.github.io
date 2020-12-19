| [Home](README) | [Flexfold](flexfold) | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Talo](talo)   | Grid                 | [Issues](issues)               | [Experiments](experiments)     |

## Responsive Grids in Flutter

This is a Flutter responsive Web grid demo and test. I made it with a very early version of Flutter for Web.
The current published build is made with a much older version of Flutter than recent ones.
I should really refresh the build and update the demo a bit too, but is still works and serves it purposes as is.
 
The demo also includes an early Web layout test I made with [**Romain Rastel's**](https://twitter.com/lets4r) popular
[**Flutter Staggered Grid View package**](https://pub.dev/packages/flutter_staggered_grid_view).

You can try this example [**here**](http://rydmike.com/gridtest/#/). The source code for this early Flutter web demo
is available in my [**resp_stag_grid**](https://github.com/rydmike/resp_stag_grid) GitHub repository. 

<img src="https://rydmike.com/assets/stag_grid1.png?raw=true" alt="Staggered grid 1" width="800"/>

The key feature of this small demo is the responsive grid using the Material breakpoint system,
demoed with the standard Flutter **GridView**, and the masonry style **StaggeredGridView** layout.

<img src="https://rydmike.com/assets/stag_grid2.png?raw=true" alt="Staggered grid 2" width="800"/>

A keen observer can see that **StaggeredGridView** package has a bug that can be seen in this demo when only
resizing the browser window horizontally. I need to make a simpler demo case for the bug demo and report it,
if it has not been reported and fixed already in the latest
version [**here**](https://github.com/letsar/flutter_staggered_grid_view).

You can observe the issue more clearly in this GIF animation:

<img src="https://rydmike.com/assets/StagGridIssueDemo1.gif?raw=true" alt="Staggered grid issue gif" width="800"/>

---
**Update 27.10.2020:** I found a recent report in the staggered grid view package GitHub repo about the 
width horizontal resizing issue [**here**](https://github.com/letsar/flutter_staggered_grid_view/issues/138) and 
added my comment to it. I will still try to make a more up to date sample repo that reproduces the issue.

---
Page updated 20.12.2020
