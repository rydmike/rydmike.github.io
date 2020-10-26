# Welcome to RydMike.com

This GitHub pages site with a custom domain linked to it contains demos and tests of various Flutter packages, projects and Flutter issue reports, that have been published as single page web sites.

## Flexfold

Flexfold is a responsive scaffold package for Flutter. A live Web demo of an app using the package can be tried here Flexfold demo](http://rydmike.com/demoflexfold).

The beta version of the package is ready, but has not been published on pub.dev yet. It is pending documentation.

## ColorPicker

A Flutter color picker package. A web demo that shows the features of the color picker are available here:
* http://rydmike.com/pickerdemo  (BROKEN)

For some reason GitHub refuses to udpate this page, I'm still trying to get it to work...
A GitHub public version will be published shortly and pub.dev version will follow pretty quickly after that.

## FlexColorScheme

This a place holder for a package the can be used to easily create sophisticated ColorScheme based Flutter color themes for your app.

## Other Flutter demos

### Grid demo and test
A grid demo and test, including a Web test of the staggered grid view package. 

* http://rydmike.com/gridtest/#/

The staggered grid has bug that can be seen in this demo when only resizing the window horizontally. I need to make a simpler demo case for the bug demo and report the bug if it has not been reported and fixed already in the latest version here: https://github.com/letsar/flutter_staggered_grid_view

----

## Flutter issues

The pages below are related to various reported Flutter GitHub issues

### Elevation issue

Using material elevation on CanvasKit (SKIA) in Flutter does not produce such nice results.
* https://rydmike.com/elevation

This is a known issue and can studied further here:
* https://github.com/flutter/flutter/issues/51237
A solution is expected to land via this fix: https://bugs.chromium.org/p/skia/issues/detail?id=10781


### Clipping issue

This demo shows a clipping issue in Flutter.
* https://rydmike.com/clipissue/#/

The issue has been discussed in https://github.com/flutter/flutter/issues/58547
The issue was closed via work around, for the actual root cause of the issue in SKIA there is no solution and the issue show up in all SKIA renderings if one looks closely at them. At some point I will gather the energy to raise the issue again as stated in the above reported issue.

### Mask Filter Issue

The mask filter issue refers to this Flutter GitHub issue: https://github.com/flutter/flutter/issues/58546
It is still an active and open issue a demo of it on DomVas is shown below, the CanvasKit produces correct results.

Demo with DomCanvas: https://rydmike.com/maskfilterdom/
Demo with CanvasKit: https://rydmike.com/maskfilterskia


### CanvasKit Font Issue

This demo refers to issue https://github.com/flutter/flutter/issues/56319
It has been fully resolved and can no longer be observed with newer builds.

* https://rydmike.com/fontissue/canvaskit/#/demo3
* https://rydmike.com/fontissue/domcanvas/#/demo3


### Regression in AnimatedContainer and AnimatedCrossFade

These demos show how animated container and animated cross fade started to regress and break down at one point on Flutter master channel builds compared to beta channel builds.

* https://rydmike.com/animatedcontainerbeta/#/
* https://rydmike.com/animatedcontainermaster/#/

* https://rydmike.com/animatedcrossfademaster/#/
* https://rydmike.com/animatedcrossfadebeta/#/

The demos where made for these issues:
* https://github.com/flutter/flutter/issues/63740
* https://github.com/flutter/flutter/issues/64960

Which were found to be cause by this root cause in the dart2js compiler:
* https://github.com/dart-lang/sdk/issues/43366

The issue has now been fully resolved and closed, but the demos made for the report was rather fancy so I'm keeping it around here. The source code for the demos are also availabel as Gist files and links the source can be found in the issue reports. They actually use some VERY simplified versions of code use in Flexfold package.





