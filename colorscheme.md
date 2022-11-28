---
title: "FlexColorScheme"
description: "Next level Flutter theming with a playground"
---

| [Home](https://rydmike.com) | FlexColorScheme                | [Issues](issues) | [Flexfold](flexfold) |  
| [Blog](blog)                | [FlexColorPicker](colorpicker) | [Grid](gridview) | [Talo](talo)         |

## FlexColorScheme

The Flutter [FlexColorScheme](https://pub.dev/packages/flex_color_scheme) package has its own documentation website at [docs.flexcolorscheme.com](https://docs.flexcolorscheme.com). Please head over there to learn more about it. I'm also pleased to share that FlexColorScheme is a Flutter [Favorite](https://docs.flutter.dev/development/packages-and-plugins/favorites) package.

[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/flutter-favorite-logo.png?raw=true?" alt="flutter favorite logo" width="170"/>](https://docs.flutter.dev/development/packages-and-plugins/favorites)

Use **FlexColorScheme** to make beautiful color scheme based Flutter Material design themes. Apply optional surface blends, or use Material 3 style seeded color schemes. The returned themes are standard `ThemeData` objects, but **very** sophisticated ones. They are based on the same idea as Flutter's `ThemeData.from(ColorScheme)` themes, but with many additional features. Choose from numerous pre-made designs or make your own. You can also use optional component sub theming, that are quick and easy to configure.

|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-37.png?raw=true" alt="Dash light" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-37.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-37.png?raw=true" alt="Dash dark" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-37.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-38.png?raw=true" alt="M3 baseline light" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-38.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-38.png?raw=true" alt="M3 baseline dark" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-38.png?raw=true)|

When you theme a Flutter application correctly, all built-in widgets use the colors of the `ColorScheme` in your theme. At least in theory, and it is almost so if you defined your `ThemeData` by using the `ThemeData.from` factory, but it misses a few details.

**FlexColorScheme** ensures that all Flutter SDK UI components get themed completely by its color schemes and custom colors you provide. It applies effective `ColorScheme` colors to all color properties in `ThemeData`. This ensures that all the direct colors properties in `ThemeData` match your `ColorScheme`. There are no surprises in `ThemeData` that do not match your `ColorScheme`.

You can opt in on using opinionated component sub-themes. By doing so, you can, for example, adjust the border radius on all UI widgets with a single property value. Flutter's Material UI widgets still default to the Material 2 design, and thus use 4 dp corner radius on most widgets.

When you opt in on using the component sub-themes, border radius on widgets defaults to the new Material 3 rounded corner design. In it, the radius varies by widget type, as specified by the [Material 3 guide](https://m3.material.io/). You can keep this or set the shared global widget radius to a value you prefer. You can also easily set the themed border radius per widget, and override the Material 3 default or the global radius value you defined.

You can also opt in on using Material 3. The Material 3 mode component sub-theming is far less opinionated, using mostly Material 3 defaults. One could say that opting in on using FlexColorScheme component sub themes, is a way of getting a Material 2 mode design, of Material 3, in Flutter. In Flutter 3.3 and earlier, using Material 3 design is still incomplete and also has many issues. Please refer to the docs for more information on the status of known problematic [Material 3 issues](https://docs.flexcolorscheme.com/known_issues) in Flutter.

|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-39.png?raw=true" alt="Verdun green light" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-39.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-39.png?raw=true" alt="Verdun green dark" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-39.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-40.png?raw=true" alt="Dell genoa light" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-l-40.png?raw=true)|[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-40.png?raw=true" alt="Dell genoa dark" width="220"/>](https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-d-40.png?raw=true)|

With **FlexColorScheme** component themes, you use simple flat property values. No need for verbose Flutter SDK component sub-themes, with `ShapeBorder` definitions on multiple widget themes to change their border radius. The component theming provides a large number of easy to configure options via simple flat properties. In many cases you can avoid the both complicated and confusing `MaterialState` theming properties.

**FlexColorScheme** has many advanced coloring features, like using surface alpha blends. It also fully supports Material 3 based color schemes, including seed generated `ColorSchemes`. It offers different configuration options that you can use when you generate your `ColorScheme` from
key colors. Customization features that are currently not available in Flutter. This includes using multiple key colors as seeds, custom minimum chroma levels and customized tone mapping to ColorScheme colors.

## Themes Playground

If you are here for the **FlexColorScheme** companion application that allows you to configure a theme and copy-paste its setup code for use in your application, then head over to the [**Themes Playground**](https://rydmike.com/flexcolorscheme/themesplayground-v6).

[<img src="https://github.com/rydmike/flex_color_scheme_docs/blob/master/docs/images/fcs-v5-pg-01-pageview-3.gif?raw=true" alt="Page view demo"/>](https://rydmike.com/flexcolorscheme/themesplayground-v6)
## Funky Theme Names?

So where do the funky scheme names come from? Like Mandy red and Hippie blue, among others. I used the Flexfold demo app's custom theme mode, to design some color schemes in FlexColorScheme. While doing that, [**FlexColorPicker**](https://rydmike.com/colorpicker) names the chosen color automatically. Sometimes the automatically assigned color names where just so hip, that I had to use them in the scheme names too.

---

Now, when the secrets of the color schemes and interactive theming in the Flexfold demo app have been revealed, why not head over to pub.dev and give [**FlexColorScheme**](https://pub.dev/packages/flex_color_scheme) and give it a try!

---

Page updated 6.9.2022
