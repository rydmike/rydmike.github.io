| [Home](README) | Flexfold             | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Talo](talo)   | [Grid](gridview)     | [Issues](issues)               | [Experiments](experiments)     |

## Flexfold

Flexfold is a responsive scaffold package for Flutter. A live web demo of an app using the 
package can be [tested here](http://rydmike.com/demoflexfold). It is my intention to open source 
this demo application when the Flexfold package has been published.

A beta version of the Flutter **Flexfold** package is ready, but it has not been published 
on [pub.dev](https://pub.dev) yet, it is still pending documentation. Some Flutter APIs it is using are also
not yet available on Flutter's stable channel. To avoid releasing separate versions that would work on stable
and another one for beta/dev/master, it is being held back a until the APIs land in the stable channel too. 
OK, you got me, it's the darn docs that I have not had time to complete.

### Flexfold in Action

A key feature of the **Flexfold Scaffold** is that navigation mode changes animates, as demonstrated below.

<img src="https://rydmike.com/assets/FlexfoldDemo01.gif?raw=true" alt="Animated Flexfold" width="800"/>

If desired the animations can be customized to make it really wild, not really recommended for an app, 
but it looks cool in a demo.

<img src="https://rydmike.com/assets/FlexfoldWinCrazyAnim.gif?raw=true" alt="Crazy Animated Flexfold" width="800"/>

### Flexfold and DevicePreview 

The live demo app uses the wonderful [DevicePreview package](https://pub.dev/packages/device_preview) by 
[Aloïs Deniel](https://twitter.com/aloisdeniel), so the 
defined responsive behavior can be also tested on different device approximations on Web.

<img src="https://rydmike.com/assets/WithDevPreview3.gif?raw=true" alt="Animated Flexfold DevicePreview" width="800"/>

### Flexfold API tooltips

If you try the [Flexfold web demo](http://rydmike.com/demoflexfold) you will notice that on the Settings page
that all the settings have tooltips that explain the API used to control each setting.

The tooltips can alo be turned OFF, as they tend to get in the way if you do not need them. This feature will
remain available as an alternative and interactive way to find the right API for configuring Flexfold's multiple
settings and configurations.

<img src="https://rydmike.com/assets/FlexfoldAPITooltips4.gif?raw=true" alt="Flexfold API tooltips" width="800"/>

### Flexfold feature demos

A walk through of Flexfold features can be found in this
[Twitter thread](https://twitter.com/RydMike/status/1308281235723055107) with animated GIF screen recordings
that shows the impact of some of its key settings.

<img src="https://rydmike.com/assets/FlexfoldDemo03.gif?raw=true" alt="Animated Flexfold" width="800"/>

### Flexfold does Undraw 

There are some playful things in the **Flexfold demo** app that are not really relevant 
to the **Flexfold package**. One such thing are the lovely [**Undraw**](https://undraw.co/) SVG drawings made by 
[**Katerina Limpitsouni**](https://twitter.com/ninaLimpi) that in the demo app change color and are themed to match
the color of the primary color of selected [FlexColorScheme] based theme, like the theme changes in Flutter the
colors also animate in the SVG drawings while theme changes.

The SVG drawings also animate in/out between a few selected one related to the page they are one. 
The order is random between the ones that included for each page.

<img src="https://rydmike.com/assets/undraw1.gif?raw=true" alt="Flexfold undraw" width="800"/>

### Flexfold goes Plasma

Last but not least of the wild things is a toggle that enable background Plasma effect on the side bar and home page.
The plasma effect is something I found in Flex Blaschke's 
[**simple_animations_package**](https://pub.dev/packages/simple_animations). He also has Flutter web app
called [**Liquid Studio**](https://felixblaschke.github.io/liquid-studio/#/) where you can try it and design your
custom plasma effects.

The custom Plasma effect I used are just defined in code and tied to the primary theme color and light/dark
mode toggle, so that it always fits as a page background effect. It looks best in dark mode though.

<img src="https://rydmike.com/assets/FlexFoldPlasma3.gif?raw=true" alt="Flexfold plasma" width="800"/>


---
Page updated 20.12.2020