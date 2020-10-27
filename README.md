# RydMike.com a Flutter Site

This **GitHub Pages** web site with a personal domain linked to it contains demos and tests of various Flutter projects and repositories linked to Flutter issue reports. The apps, demos and issue support demos have been published as single page web sites. They are presented and linked below for easy access.

## [Flexfold Demo App](http://rydmike.com/demoflexfold)

Flexfold is a responsive scaffold package for Flutter. A live Web demo of an app using the package can be tried [here](http://rydmike.com/demoflexfold).

A key feature of Flexfold is that navigation mode changes are animated.
![Animated Flexfold](/assets/FelxfoldDemo01.gif)

If desired the animations can be customized to make it really wild, not really recommended for an app, but it looks cool in a demo.
![Crazy Animated Flexfold](/assets/FelxfoldWinCrazyAnim.gif)

The live demo app also incorporates the DevicePreview package, so the responsive behavior can be tested on different simulated devices.
![Animated Flexfold DevicePreview](/assets/WithDevPreview3.gif)

A long Twitter thread presenting key Flexfold features with a series of animated GIFs is available [here](https://twitter.com/RydMike/status/1308281235723055107?s=20).


The beta version of the Flutter package is ready, but has not yet been published on [pub.dev](https://pub.dev) yet, it is still pending proper documentation.

## FlexColorScheme Demo

FlexColorScheme is a package the can be used to easily create sophisticated Flutter ColorScheme based color themes for your app.
The Flexfold web demo app uses the FlexColorScheme package for its theming and the themes used in the Flexfold demo are available as pre-configured themes when using the FlexColorScheme package. You can of course also easily define and make custom themes.

This package is also pending publication and a simpler example app.

![FlexColorScheme in Flexfold](/assets/FoldTheme1.gif)


## [ColorPicker Demo App](http://rydmike.com/pickerdemo)

A Flutter color picker package. A web demo that shows the features of the ColorPicker is available [here](http://rydmike.com/pickerdemo).
![Animated ColorPicker demo](/assets/ColorPickerWeb.gif)

For some reason GitHub refuses to update this page, I'm still trying to get it to work. A GitHub public version will be published shortly and [pub.dev](https://pub.dev) version will follow pretty quickly after that.
![Phone pickers](/assets/pickers.png)


## Other Flutter demos

### [Responsive Grid Demo App](http://rydmike.com/gridtest/#/)
A very early Flutter web grid demo and test that I made ages ago. It includes a web test of the Flutter Staggered Grid View package. You can try it [here](http://rydmike.com/gridtest/#/)

The staggered grid has bug that can be seen in this demo when only resizing the window horizontally. I need to make a simpler demo case for the bug demo and report the bug if it has not been reported and fixed already in the latest version [here](https://github.com/letsar/flutter_staggered_grid_view).

**Update 27.10.2020:** Found a recent report about the staggered grid view package width horizontal resizing issue [here](https://github.com/letsar/flutter_staggered_grid_view/issues/138) and added my comment to it. I will try to make a more up to date sample repo for it.


---

## Flutter issues

The pages below are related to various reported Flutter issues that have been reported in the Flutter [repo](https://github.com/flutter/flutter/issues).

### [Elevation issue](https://rydmike.com/elevation)

Using Material elevation on CanvasKit (SKIA) in Flutter does not produce very nice results, check it out [here](https://rydmike.com/elevation).

This is a known Flutter issue and more info can be found [here #51237](https://github.com/flutter/flutter/issues/51237). A solution is expected to land via this [skia fix](https://bugs.chromium.org/p/skia/issues/detail?id=10781).

### [Clipping issue](https://rydmike.com/clipissue/#/)

This demo shows a [clipping issue](https://rydmike.com/clipissue/#/) in Flutter.

The issue has been discussed in [#58547](https://github.com/flutter/flutter/issues/58547). The issue was closed via a work around, for the actual root cause of the issue in SKIA there is no solution and the issue show up in all SKIA renderings if one looks closely at them. At some point I will gather the energy to raise the issue again as stated in the above reported issue. The clip behavior mentioned [here](https://flutter.dev/docs/release/breaking-changes) in the Flutter docs as a coming breaking change after version 1.22 does seem a bit related to the clipping issue I tried to describe. The [solution](https://github.com/flutter/flutter/issues/18057) for it does however only seem to avoid alias based clipping whenever possible. It sounds more like another work around to the root SKIA based issue.

### [Mask Filter Issue](https://rydmike.com/maskfilterskia)

The mask filter issue refers to this Flutter GitHub issue [#58546](https://github.com/flutter/flutter/issues/58546). It is still an active and open issue. A demo of it on CanvasKit is shown below, the CanvasKit version produces correct results.

* Demo with [DomCanvas FAIL](https://rydmike.com/maskfilterdom/).
* Demo with [CanvasKit OK](https://rydmike.com/maskfilterskia).


### [CanvasKit Font Issue](https://rydmike.com/fontissue/canvaskit/#/demo3)

The canvas kit font issue and demo refers to issue [#56319](https://github.com/flutter/flutter/issues/56319). It has been fully resolved and can no longer be observed with newer builds.

* Demo with [DomCanvas OK](https://rydmike.com/fontissue/domcanvas/#/demo3).
* Demo with [CanvasKit FAIL here, but in newer builds OK](https://rydmike.com/fontissue/canvaskit/#/demo3).


### Regression in [AnimatedContainer](https://rydmike.com/animatedcontainermaster/#/) and [AnimatedCrossFade]()

These demos show how animated container and animated cross fade started to regress and break down at one point on Flutter master channel builds compared to beta channel builds.

* AnimatedContainer demo with [Beta OK](https://rydmike.com/animatedcontainerbeta/#/)
* AnimatedContainer demo with [Master FAIL](https://rydmike.com/animatedcontainermaster/#/)

The demo was made for the issue report [#63740](https://github.com/flutter/flutter/issues/63740)

* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfadebeta/#/)
* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfademaster/#/)

The demo was made for the issue report [#64960](https://github.com/flutter/flutter/issues/64960)

Both issues were found to be caused by this root cause in the dart2js compiler [Dart lang SDK issue #43366](https://github.com/dart-lang/sdk/issues/43366).

The issue has now been fully resolved and closed, but the demos made for the report was rather fancy so I'm keeping them around here. The source code for the demos are also available as Gist files and links to their the source can be found in the issue reports. They actually use some VERY simplified versions of code use in Flexfold package.
