# RydMike.com

This **GitHub Pages** web site with a domain linked to it, contains demos and tests of various **Flutter** projects as well as repositories linked to Flutter issue reports. The apps, demos and issue support demos have been published as single page web sites in site sub-folders. They are presented and linked below for easy access.

### Note

This site is just simple markdown file converted to a **GitHub Pages** site by GitHub, it even uses the default GitHub Jekyll theme. Eventually I will change the content to maybe be managed by a Flutter application. It could be an interesting exercise to make a simple web content management system with Flutter, even if that is not one of Flutter's core strengths, well let's see later.

---

## [Flexfold Demo](http://rydmike.com/demoflexfold)

Flexfold is a responsive scaffold package for Flutter. A live web demo of an app using the package can be [played with here](http://rydmike.com/demoflexfold). It is my intention to open source this demo application.

A key feature of Flexfold is that navigation mode changes are animated.
![Animated Flexfold](/assets/FelxfoldDemo01.gif)

If desired the animations can be customized to make it really wild, not really recommended for an app, but it looks cool in a demo.
![Crazy Animated Flexfold](/assets/FelxfoldWinCrazyAnim.gif)

The live demo app also incorporates the DevicePreview package, so the responsive behavior can be tested on different simulated devices.

![Animated Flexfold DevicePreview](/assets/WithDevPreview3.gif)

A long Twitter thread presenting key Flexfold features with a series of animated GIFs is available [here](https://twitter.com/RydMike/status/1308281235723055107?s=20).


The beta version of the Flutter package is ready, but has not yet been published on [pub.dev](https://pub.dev) yet, it is still pending proper documentation.

---

## FlexColorScheme Demo

FlexColorScheme is a package the can be used to easily create sophisticated Flutter ColorScheme based color themes for your app.
The Flexfold web demo app uses the FlexColorScheme package for its theming and the themes used in the Flexfold demo are available as pre-configured themes when using the FlexColorScheme package. You can of course also easily define and make custom themes.

This package is also pending publication and a simpler example app.

![FlexColorScheme in Flexfold](/assets/FoldTheme1.gif)

---

## [ColorPicker Demo](http://rydmike.com/democolorpicker)

A web demo that shows the features of the Flutter ColorPicker is available [here](http://rydmike.com/democolorpicker). The source code for this simple web color picker demo app can be found [here](https://github.com/rydmike/color_picker_demo).

![Animated ColorPicker demo](/assets/ColorPickerWeb2.gif)

Even though this demo is a web version, it works well on mobile devices too. One advantage of the ColorPicker package is that it can be configured in many different ways to provide just the right amount of color picking feature with a style that fits with your application.

![Color picker styles](/assets/pickers.png)

---

### [Responsive Grid Demo](http://rydmike.com/gridtest)
A very early Flutter web grid demo and test that I made ages ago. It includes a web test of the [Flutter Staggered Grid View package](https://pub.dev/packages/flutter_staggered_grid_view).

You can try it [here](http://rydmike.com/gridtest/#/). The source code for this for me very early test and demo is available in this public [resp_stag_grid](https://github.com/rydmike/resp_stag_grid) repository.

![Staggered grid 1](/assets/stag_grid1.png)

![Staggered grid 2](/assets/stag_grid2.png)

The staggered grid has bug that can be seen in this demo when only resizing the window horizontally. I need to make a simpler demo case for the bug demo and report the bug if it has not been reported and fixed already in the latest version [here](https://github.com/letsar/flutter_staggered_grid_view). You can observe the issue in this GIF animation.

![Staggered grid issue gif](/assets/StagGridIssueDemo1.gif)

**Update 27.10.2020:** Found a recent report about the staggered grid view package width horizontal resizing issue [here](https://github.com/letsar/flutter_staggered_grid_view/issues/138) and added my comment to it. I will try to make a more up to date sample repo for it.


---
---

## Flutter Issue Reports

The code samples below are related to some of the Flutter issues I have reported in the Flutter [repository](https://github.com/flutter/flutter/issues). The samples were just made to be used to be able to demonstrate the reported issue at the time. Some of the samples may be generally useful and interesting, so I decided to keep them available. I will add more of them as well, comment them a bit and make them look nicer by adding screenshots for them them as well.

I also have a large number of issue reports with simpler sample code, that are just available as Gists that cen be run in DartPad, I might add references to some of them as well if they are interesting enough.

---

### [Material Elevation Issue Demo](https://rydmike.com/elevation)

Using Material elevation on CanvasKit (SKIA) Web builds and also normal device and desktop builds that uses SKIA for rendering in Flutter, does not produce very nice results on large screens.

![Elevation issue](/assets/elevation_issue.png)

The sample code for this demo is available as a [Gist here](https://gist.github.com/rydmike/145828269bd8d24ee9c44a9df26ec7fb). You can try a live web version of it built with CanvasKit [here](https://rydmike.com/elevation). If you run this in a DomCanvas build, eg by using the Gist in a [DartPad here](https://dartpad.dartlang.org/145828269bd8d24ee9c44a9df26ec7fb) there is no elevation issue.

This is a known Flutter issue and more info can be found [here #51237](https://github.com/flutter/flutter/issues/51237). A solution is expected to land via this [Skia fix](https://bugs.chromium.org/p/skia/issues/detail?id=10781).

---

### [Clipping issue](https://rydmike.com/clipissue/#/)

This demo shows a [clipping issue](https://rydmike.com/clipissue/#/) in Flutter.

The issue has been discussed in [#58547](https://github.com/flutter/flutter/issues/58547). The issue was closed via a work around, for the actual root cause of the issue in SKIA there is no solution and the issue show up in all SKIA renderings if one looks closely at them. At some point I will gather the energy to raise the issue again as stated in the above reported issue.

![Clipping issue](/assets/FlutterClippingIssue.png)

The clip behavior mentioned [here](https://flutter.dev/docs/release/breaking-changes) in the Flutter docs as a coming breaking change after version 1.22 does seem a bit related to the clipping issue described here as well. The [solution](https://github.com/flutter/flutter/issues/18057) for it does however only seem to avoid the alias based clipping whenever possible, not to actually fix it so it sounds more like another work around to the root SKIA based issue. We will see when the fix lands, I could try to build this issue demo code on latest master to test it again there as well.

---

### [Mask Filter Issue](https://rydmike.com/maskfilterskia)

The mask filter issue refers to this Flutter GitHub issue [#58546](https://github.com/flutter/flutter/issues/58546). It is still an active and open issue. A demo of it on CanvasKit is shown below, the CanvasKit version produces correct results.

* Demo with [DomCanvas FAIL](https://rydmike.com/maskfilterdom/).
* Demo with [CanvasKit OK](https://rydmike.com/maskfilterskia).

A fix for it is discussed in [#47163](https://github.com/flutter/flutter/issues/47163) where it is mentioned that engine pull [#13768](https://github.com/flutter/engine/pull/13768) should resolve it, but I have not verified it yet. The discussions in #47163 seem to indicate that it might not be completely solved. I should test it and follow up.

![Mask filter issue](/assets/MaskFilterIssue.png)

---

### [CanvasKit Font Issue](https://rydmike.com/fontissue/canvaskit/#/demo3)

The canvas kit font issue and demo refers to issue [#56319](https://github.com/flutter/flutter/issues/56319). It has been fully resolved and can no longer be observed with newer builds.

* Demo with [DomCanvas OK](https://rydmike.com/fontissue/domcanvas/#/demo3).

![Font DomCanvas OK](/assets/FontDomCanvasOK.png)

* Demo with [CanvasKit FAIL here](https://rydmike.com/fontissue/canvaskit/#/demo3), but in newer builds OK.

![Font CanvasKit FAIL](/assets/FontCanvasKitFAIL.png)


---

### Regression in [AnimatedContainer](https://rydmike.com/animatedcontainermaster/#/) and [AnimatedCrossFade](https://rydmike.com/animatedcrossfademaster/#/)

These demos show how animated container and animated cross fade started to regress and break down at one point on Flutter master channel builds compared to beta channel builds.

* AnimatedContainer demo with [Beta OK](https://rydmike.com/animatedcontainerbeta/#/)
* AnimatedContainer demo with [Master FAIL](https://rydmike.com/animatedcontainermaster/#/)

The demo was made for the issue report [#63740](https://github.com/flutter/flutter/issues/63740). The source code for the issue demo is available in this [Gist](https://gist.github.com/rydmike/2e8e6a4cc9126dbe6f95e81e674f6d6b). When the issue was present it looked like this:

![Animated container issue](/assets/AnimatedContainerIssueDemo.gif)

* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfadebeta/#/)
* AnimatedCrossFade demo with [Master FAIL](https://rydmike.com/animatedcrossfademaster/#/)

The demo was made for the issue report [#64960](https://github.com/flutter/flutter/issues/64960). The source code for the issue demo is available in this [Gist](https://gist.github.com/rydmike/2a3efd05ba677fe98f65771c4e1fa62e). When the issue was present it looked like this:

![Animated cross fade issue](/assets/AnimatedCrossFadeIssue.gif)

Both issues were found to be caused by this root cause in the dart2js compiler [Dart lang SDK issue #43366](https://github.com/dart-lang/sdk/issues/43366).

The above root cause of both the issues has now been fully resolved and above two issues are closed as well. The demos made for the report were rather fancy so I'm keeping them around here. The source code for the demos that are available as Gist file links above. The samples actually use some very simplified versions of code use in Flexfold package. They are useful as starting point for various Flutter demos with just one file and no other than Flutter SDK dependencies.
