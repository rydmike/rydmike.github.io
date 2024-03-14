---
title: "Flexfold"
description: "Demo of an animated responsive Flutter scaffold"
---

| [Home](https://rydmike.com) | [FlexColorScheme](colorscheme) | [Issues](issues) | Flexfold             |  
| [Articles](blog)            | [FlexColorPicker](colorpicker) | [Grid](gridview) |         |

## Flexfold

**Flexfold** is a responsive and adaptive Scaffold package for Flutter. A live web demo of an example app using the package can be seen and [**tested here**](http://rydmike.com/demoflexfold). It is my intention to open source this demo application after the **Flexfold package** itself has been published.

An early private version of the Flutter **Flexfold package** is being used in this demo. It has not been published in the [**pub.dev**](https://pub.dev) package manager. Flexfold will **not be released** in the form shown in this demo, due to partially proprietary code that was used in it. That does not mean that another version of Flexfold, based on similar concepts might not materialize some day.

### Flexfold in Action

A key feature of the **Flexfold** scaffold is that navigation mode changes are animated as shown below.

<img src="https://rydmike.com/assets/FlexfoldDemo01.gif?raw=true" alt="Animated Flexfold" width="800"/>

If desired, the animations can be customized to make it really wild, not necessarily recommended for a real app, but it looks cool in a demo.

<img src="https://rydmike.com/assets/FlexfoldWinCrazyAnim.gif?raw=true" alt="Crazy Animated Flexfold" width="800"/>

### Flexfold and DevicePreview 

The Flexfold demo app uses the wonderful [**DevicePreview package**](https://pub.dev/packages/device_preview) by [Aloïs Deniel](https://twitter.com/aloisdeniel). Using it makes it possible to test and verify configured responsive behavior on different device approximations.

<img src="https://rydmike.com/assets/WithDevPreview3.gif?raw=true" alt="Animated Flexfold DevicePreview" width="800"/>

### Flexfold API Tooltips

When you try the [Flexfold demo app](http://rydmike.com/demoflexfold), you will notice that on the Settings page, all the settings have tooltips that show the API used to control the setting and its current value. This feature in the demo app is an interactive way to help you find the right Flexfold API and value, to configure its behavior in a way that fits your use case.

The tooltips in the demo app can be turned OFF via yet another setting. Generally, tooltips tend to get in the way when you are very familiar with an app and no longer need them. I always recommend implementing a global tooltip toggle offered to users in advanced settings. Flexfold support this by offering an API for turning OFF all tooltips used in the package.

<img src="https://rydmike.com/assets/FlexfoldAPITooltips4.gif?raw=true" alt="Flexfold API tooltips" width="800"/>

### Flexfold Feature Demos

A walk through of Flexfold's features can be found in this [**Tweet thread**](https://twitter.com/RydMike/status/1308281235723055107). It uses animated GIF screen recordings to show the impact of the most frequently used settings.

<img src="https://rydmike.com/assets/FelxfoldDemo03.gif?raw=true" alt="Flexfold 03" width="800"/>

### Flexfold does Undraw 

There are some playful extras in the **Flexfold demo** app that are not really relevant to the **Flexfold package**. One such thing is the lovely [**Undraw**](https://undraw.co/) SVG drawings made by [**Katerina Limpitsouni**](https://twitter.com/ninaLimpi). In the demo app, they change color and are themed to match the color, of primary color, of the selected [**FlexColorScheme**](https://rydmike.com/colorscheme) based theme. Like the theme changes in Flutter, the colors also animate in the SVG drawings while theme changes.

The SVG drawings also animate in and out between a few selected ones related to the page they are on. The display order is random between the ones that are included for each page. On the **Slivers** page in the demo, we go wild and display hundreds of Undraw SVGs, where each one gets a random color and is animated in/out to another random image at random time intervals. This is just a wild test to stress Flutter on different platforms, especially on the Web. I doubt it is really relevant to any real world use-case, nevertheless it is interesting to see that it actually works. On the desktop build it is actually really smooth in release mode, in Web builds it is a bit janky, but it works OK.

<img src="https://rydmike.com/assets/undraw1.gif?raw=true" alt="Flexfold undraw" width="800"/>

### Flexfold goes Plasma

Last but not least of the wild things, is a toggle that enables an animated **plasma background** effect on the sidebar and Flexfold Home page. This plasma effect is something I found in [Felix Blaschke's](https://github.com/felixblaschke) [**simple_animations_package**](https://pub.dev/packages/simple_animations). He also has a Flutter web app called [**Liquid Studio**](https://felixblaschke.github.io/liquid-studio/#/) where you can try it and design custom plasma effects.

The Plasma effects I used are defined in code and tied to the primary theme color and light/dark mode, so that it always fits as a page background effect. It looks cooler in dark mode though.

<img src="https://rydmike.com/assets/FlexFoldPlasma3.gif?raw=true" alt="Flexfold plasma" width="800"/>


---
Page updated 01.05.2022