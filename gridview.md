| [Flexfold](README) | [FlexColorScheme](colorscheme) | [Flex ColorPicker](colorpicker) | Responsive grid | [Flutter issues](flutterissues) |

### [Responsive Grid Demo](http://rydmike.com/gridtest)
This is a very early Flutter web grid demo and test that I made with very early versions of Flutter for Web. The current published build is also from a very old version of Flutter. It includes a web test of the [Flutter Staggered Grid View package](https://pub.dev/packages/flutter_staggered_grid_view).

You can try [it here](http://rydmike.com/gridtest/#/). The source code for this early Flutter web demo is available in this [resp_stag_grid](https://github.com/rydmike/resp_stag_grid) repository. 

<img src="https://rydmike.com/assets/stag_grid1.png?raw=true" alt="Staggered grid 1" width="450"/>

The key feature of this small demo is the responsive grid based on the Material breakpoint system, demoed with the standard Flutter GridView and the masonry style staggered grid view layout.

<img src="https://rydmike.com/assets/stag_grid2.png?raw=true" alt="Staggered grid 2" width="450"/>

The staggered grid view package has a small bug that can be seen in this demo when only resizing the window horizontally. I need to make a simpler demo case for the bug demo and report it, if it has not been reported and fixed already in the latest version [here](https://github.com/letsar/flutter_staggered_grid_view). You can observe the issue in this GIF animation.

<img src="https://rydmike.com/assets/StagGridIssueDemo1.gif?raw=true" alt="Staggered grid issue gif"/>

**Update 27.10.2020:** Found a recent report about in staggered grid view package about the width horizontal resizing issue [here](https://github.com/letsar/flutter_staggered_grid_view/issues/138) and added my comment to it. I will try to make a more up to date sample repo that reproduces the issue.
