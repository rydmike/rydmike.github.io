| [Flexfold](https://rydmike.com/) | [FlexColorScheme](colorscheme) | [Flex ColorPicker](colorpicker) | [Responsive grid](gridview) | Flutter issues |

## Flutter Issue Reports

The code samples below are related to some of the Flutter issues I have reported in the Flutter [repository](https://github.com/flutter/flutter/issues). These samples were made to demonstrate the reported issues at the time. Some samples may be generally useful and interesting, so I decided to keep them available.

I also have issue reports with sample code that are just available as Gists, some that can be run in DartPad, I might add links to some of them later as well if they are interesting enough.

---

## [Material Elevation Issue](https://rydmike.com/elevation)

Using Material elevation on CanvasKit (SKIA) Web builds, and on device builds, or desktop builds, that also use SKIA for rendering in Flutter, does not produce very nice results on a large canvas. The poor elevation effect can be seen already at widths or heights larger than 1000 dp. The light source is simply at a too low height, and the shadows get too exaggerated.

<img src="https://rydmike.com/assets/elevation_issue.png?raw=true" alt="elevation_issue" width="800"/>

The sample code for this demo is available as a [Gist here](https://gist.github.com/rydmike/145828269bd8d24ee9c44a9df26ec7fb). You can try a live web version of it built with CanvasKit [here](https://rydmike.com/elevation). If you run this in a DomCanvas build, eg by using the Gist in a [DartPad here](https://dartpad.dartlang.org/145828269bd8d24ee9c44a9df26ec7fb) there is no elevation issue.

This is a known Flutter issue and more info can be found [here in issue #51237](https://github.com/flutter/flutter/issues/51237). A solution is expected to land via this [Skia fix](https://bugs.chromium.org/p/skia/issues/detail?id=10781).

---

## [Clipping issue](https://rydmike.com/clipissue/#/)

This demo shows a [clipping issue](https://rydmike.com/clipissue/#/) in Flutter.

The issue has been discussed in [#58547](https://github.com/flutter/flutter/issues/58547). This particular issue and case was closed via a workaround. For the actual root cause of the issue in SKIA, there is no solution, and the issue show up in all SKIA renderings with antialias based clipping, if you look closely at them. At some point I will gather the energy to raise the issue again as stated in the above reported issue.

<img src="https://rydmike.com/assets/FlutterClippingIssue.png?raw=true" alt="Clipping issue" width="800"/>

The clip behavior mentioned [here](https://flutter.dev/docs/release/breaking-changes) in the Flutter docs, as a coming breaking change after version 1.22, does seem a bit related to the same clipping issue. The [solution](https://github.com/flutter/flutter/issues/18057) for it does however only seem to avoid the alias based clipping whenever possible, not to actually fix it, so it sounds more like another work around to the root SKIA based issue. We will see when the fix lands what its impact is. I will build the issue demo code on latest master to test it again and see if it changes anything.

---

## [Mask Filter Issue](https://rydmike.com/maskfilterskia)

The mask filter issue refers to this Flutter GitHub issue [#58546](https://github.com/flutter/flutter/issues/58546). It is still an active and open issue. A demo of it on both CanvasKit and DomCanvas are shown below, the CanvasKit version produces correct results.

* Demo with [DomCanvas FAIL](https://rydmike.com/maskfilterdom/).
* Demo with [CanvasKit OK](https://rydmike.com/maskfilterskia).

A fix for it is discussed in [#47163](https://github.com/flutter/flutter/issues/47163) where it is mentioned, that engine pull [#13768](https://github.com/flutter/engine/pull/13768) should resolve it, but I have not verified it yet. The discussions in #47163 seem to indicate that it might not be completely solved. I will test it again and follow up.

<img src="https://rydmike.com/assets/MaskFilterIssue.png?raw=true" alt="Mask filter issue" width="800"/>

---

## [CanvasKit Font Issue](https://rydmike.com/fontissue/canvaskit/#/demo3)

The CanvasKit font issue and demo refers to issue [#56319](https://github.com/flutter/flutter/issues/56319). It has been fully resolved and can no longer be observed with newer builds.

* Demo with [DomCanvas OK](https://rydmike.com/fontissue/domcanvas/#/demo3).

<img src="https://rydmike.com/assets/FontDomCanvasOK.png?raw=true" alt="Font DomCanvas OK" width="800"/>

* Demo with [CanvasKit FAIL here](https://rydmike.com/fontissue/canvaskit/#/demo3), but in newer builds OK.

<img src="https://rydmike.com/assets/FontCanvasKitFAIL.png?raw=true" alt="Font CanvasKit FAIL" width="800"/>

---

## Regression in [AnimatedContainer](https://rydmike.com/animatedcontainermaster/#/) and [AnimatedCrossFade](https://rydmike.com/animatedcrossfademaster/#/)

These demos show how the AnimatedContainer and AnimatedCrossFade Widgets started to regress and break down at one point on Flutter master channel builds compared to beta channel builds.

* AnimatedContainer demo with [Beta OK](https://rydmike.com/animatedcontainerbeta/#/)
* AnimatedContainer demo with [Master FAIL](https://rydmike.com/animatedcontainermaster/#/)

The above demos were made for the issue report [#63740](https://github.com/flutter/flutter/issues/63740). The source code for the issue demo is available in this [Gist](https://gist.github.com/rydmike/2e8e6a4cc9126dbe6f95e81e674f6d6b). When the issue was present it looked like this:

<img src="https://rydmike.com/assets/AnimatedContainerIssueDemo.gif?raw=true" alt="Animated container issue" width="800"/>

The AnimatedCrossFade issue showed similar behavior, and it was already at the time when it was reported suspected that the root cause in Flutter might be the same.

* AnimatedCrossFade demo with [Beta OK](https://rydmike.com/animatedcrossfadebeta/#/)
* AnimatedCrossFade demo with [Master FAIL](https://rydmike.com/animatedcrossfademaster/#/)

The above two demos were made for the issue report [#64960](https://github.com/flutter/flutter/issues/64960). The source code for the issue demo is available in this [Gist](https://gist.github.com/rydmike/2a3efd05ba677fe98f65771c4e1fa62e). When the issue was present it looked like this:

<img src="https://rydmike.com/assets/AnimatedCrossFadeIssue.gif?raw=true" alt="Animated cross fade issue" width="800"/>

Both issues were found to be caused by this root issue in the dart2js compiler [Dart lang SDK issue #43366](https://github.com/dart-lang/sdk/issues/43366).

The above root cause of the issue has now been fully resolved and above two issues are closed as well. The demos made for the report were rather fancy, so I'm keeping them around here. The samples actually use **very** simplified versions of code use in the Flexfold package. The samples are also useful as starting points for various Flutter demos with just one file and no other than Flutter SDK dependencies.
