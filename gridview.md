| [Home](readme)   |[Flexfold](flexfold)    | [FlexColorScheme](colorscheme) | [Picker](colorpicker)      |  
| [Grid](gridview) |[Issues](flutterissues) | [Gists](gists)                 | [Experiments](experiments) |

## [Responsive Grid](http://rydmike.com/gridtest)

This is a Flutter web grid demo and test. I made it with a very early version of Flutter for Web. The current 
published build is also made with an older version of Flutter. It includes a web test
of the [Flutter Staggered Grid View package](https://pub.dev/packages/flutter_staggered_grid_view).

You can try [it here](http://rydmike.com/gridtest/#/). The source code for this early Flutter web demo
is available in the [resp_stag_grid](https://github.com/rydmike/resp_stag_grid) repository. 

<img src="https://rydmike.com/assets/stag_grid1.png?raw=true" alt="Staggered grid 1" width="800"/>

The key feature of this small demo is the responsive grid using the Material breakpoint system,
demoed with the standard Flutter **GridView** and the masonry style **StaggeredGridView** layout.

<img src="https://rydmike.com/assets/stag_grid2.png?raw=true" alt="Staggered grid 2" width="800"/>

The **StaggeredGridView** package has a small bug that can be seen in this demo when only resizing the
window horizontally. I need to make a simpler demo case for the bug demo and report it, if it has not been
reported and fixed already in the latest version [here](https://github.com/letsar/flutter_staggered_grid_view).
You can observe the issue in this GIF animation.

<img src="https://rydmike.com/assets/StagGridIssueDemo1.gif?raw=true" alt="Staggered grid issue gif" width="800"/>

**Update 27.10.2020:** Found a recent report about in staggered grid view package about the width horizontal
resizing issue [here](https://github.com/letsar/flutter_staggered_grid_view/issues/138) and added my 
comment to it. I will try to make a more up to date sample repo that reproduces the issue.
