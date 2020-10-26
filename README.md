# Welcome to RydMike.com

This GitHub Pages site with a custom domain linked to it contains demos and tests of various Flutter projects and Flutter issue reports, that have been published as single page web sites.

## [Flexfold](http://rydmike.com/demoflexfold)

Flexfold is a responsive scaffold package for Flutter. A live Web demo of an app using the package can be tried here [Flexfold demo](http://rydmike.com/demoflexfold).
A Twitter thread presenting Flexfold features with a series of animated GIFs is available [here](https://twitter.com/RydMike/status/1308281235723055107?s=20).
![Animated Flexfold demo](/assets/WithDevPreview3.gif)

The beta version of the package is ready, but has not been published on [pub.dev](https://pub.dev) yet. It is pending documentation.

## [ColorPicker](http://rydmike.com/pickerdemo)

A Flutter color picker package. A web demo that shows the features of the color picker are available here [ColorPicker demo](http://rydmike.com/pickerdemo). (BROKEN)

For some reason GitHub refuses to update this page, I'm still trying to get it to work. A GitHub public version will be published shortly and [pub.dev](https://pub.dev) version will follow pretty quickly after that.

## FlexColorScheme

This a place holder for a package the can be used to easily create sophisticated ColorScheme based Flutter color themes for your app.

## Other Flutter demos

### [Grid demo and test](http://rydmike.com/gridtest/#/)
A very early Flutter grid demo and test that I made ages ago. It includes a Web test of the Flutter Staggered Grid View package. You can try it here [Grid demo](http://rydmike.com/gridtest/#/)

The staggered grid has bug that can be seen in this demo when only resizing the window horizontally. I need to make a simpler demo case for the bug demo and report the bug if it has not been reported and fixed already in the latest version [here](https://github.com/letsar/flutter_staggered_grid_view).

----

## Flutter issues

The pages below are related to various reported Flutter GitHub issues.

### [Elevation issue](https://rydmike.com/elevation)

Using material elevation on CanvasKit (SKIA) in Flutter does not produce such nice results, check it out [here](https://rydmike.com/elevation).

This is a known Flutter issue and can studied further here [#51237](https://github.com/flutter/flutter/issues/51237). A solution is expected to land via this [skia fix](https://bugs.chromium.org/p/skia/issues/detail?id=10781).

### [Clipping issue](https://rydmike.com/clipissue/#/)

This demo shows a [clipping issue](https://rydmike.com/clipissue/#/) in Flutter.

The issue has been discussed in [#58547](https://github.com/flutter/flutter/issues/58547). The issue was closed via work around, for the actual root cause of the issue in SKIA there is no solution and the issue show up in all SKIA renderings if one looks closely at them. At some point I will gather the energy to raise the issue again as stated in the above reported issue.

### [Mask Filter Issue](https://rydmike.com/maskfilterskia)

The mask filter issue refers to this Flutter GitHub issue [#58546](https://github.com/flutter/flutter/issues/58546). It is still an active and open issue a demo of it on CanvasKit is shown below, the CanvasKit produces correct results.

* Demo with [DomCanvas OK](https://rydmike.com/maskfilterdom/).
* Demo with [CanvasKit FAIL](https://rydmike.com/maskfilterskia).


### [CanvasKit Font Issue](https://rydmike.com/fontissue/canvaskit/#/demo3)

This demo refers to issue [#56319](https://github.com/flutter/flutter/issues/56319). It has been fully resolved and can no longer be observed with newer builds.

* Demo with [DomCanvas OK](https://rydmike.com/fontissue/domcanvas/#/demo3).
* Demo with [CanvasKit FAIL](https://rydmike.com/fontissue/canvaskit/#/demo3).


### Regression in [AnimatedContainer](https://rydmike.com/animatedcontainermaster/#/) and [AnimatedCrossFade]()

These demos show how animated container and animated cross fade started to regress and break down at one point on Flutter master channel builds compared to beta channel builds.

* AnimatedContainer demo with [Beta OK](https://rydmike.com/animatedcontainerbeta/#/)
* AnimatedContainer demo with [Master FAIL](https://rydmike.com/animatedcontainermaster/#/)

The demo was made for the issue report [#63740](https://github.com/flutter/flutter/issues/63740)

* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfadebeta/#/)
* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfademaster/#/)

The demo was made for the issue report [#64960](https://github.com/flutter/flutter/issues/64960)

Both issues were found to be cause by this root cause in the dart2js compiler [Dart lang SDK issue #43366](https://github.com/dart-lang/sdk/issues/43366).

The issue has now been fully resolved and closed, but the demos made for the report was rather fancy so I'm keeping it around here. The source code for the demos are also available as Gist files and links the source can be found in the issue reports. They actually use some VERY simplified versions of code use in Flexfold package.
