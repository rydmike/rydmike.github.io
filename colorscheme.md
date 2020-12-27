| [Home](https://rydmike.com) | [Flexfold](flexfold) | ColorScheme                | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | [Experiments](experiments) |

## FlexColorScheme

**FlexColorScheme** helps you make beautiful color scheme based Flutter themes, using optional color branded
surfaces. The created themes are based on the same concept as Flutter's **ColorScheme** based themes,
but with a few interesting twists and additional features.

**FlexColorScheme** is available on **pub.dev** as a [**Flutter package**](https://pub.dev/packages/flex_color_scheme).

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/CollageSize50.png?raw=true" alt="ColorScheme Intro"/>

### Background

When you make and design Flutter applications you should base the colors your application use on a light theme mode
ColorScheme and a dark theme mode ColorScheme. Then make your light and dark ThemeData from these color schemes, and in 
your MaterialApp use these themes for the light and dark mode. This gives you an application that uses the defined 
color scheme on the built-in Material UI Widgets, well on most of them anyway. 

Your custom theme's and custom widgets should also use these colors
via the color scheme colors in the ThemeData, so that your app gets a consistent design, that animates theme color 
changes, and can be easily maintained when you need to change the look of your application.

FlexColorScheme was born when I was trying to make pretty themes for the [Flexfold](flexfold) demo app and from
some other real projects as well. I needed a way to make it easier to make pretty color branded themes, that 
work well for web and desktop apps. 

I also wanted to address ColorScheme based theming gaps in Flutter's default ColorScheme based ThemeData creation,
that I found myself fixing in pretty much every app. Additionally, I wanted to make it easy to build and support
interactive in application theming, which actually is pretty easy to do already with the basic SDK, but FlexColorScheme
makes it even easier to switch among many themes, and vary a few other custom theme preference settings as well.

### Live Web Versions of the FlexColorScheme Examples

The package documentation contains five usage examples. Starting with a really simple use case and increasing in
complexity with each example. The last example, number 5, does almost everything that you might have seen
before in the [**Flexfold demo**](http://rydmike.com/demoflexfold) web app on its **Theme** page.

[**In example 1**](https://rydmike.com/flexcolorscheme1)
we just use a built-in scheme as our application's theme and toggle between its light and dark variant, or allow device
theme mode to control if the dark or light theme is used.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1al.png?raw=true" alt="ColorScheme example 1 light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1ad.png?raw=true" alt="ColorScheme example 1 dark" width="190"/>

[**Example 2**](https://rydmike.com/flexcolorscheme2)
is a lot like the previous example, but we use our own custom defined colors to make a scheme and turn it into a theme.
In this case I used a bit more dignified looking dark purple and deep green colors.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex2al.png?raw=true" alt="ColorScheme example 2 light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex2ad.png?raw=true" alt="ColorScheme example 2 dark" width="190"/> 

[**With example 3**](https://rydmike.com/flexcolorscheme3)
we are getting a bit fancier, we can now switch active theme between 3 different predefined color schemes,
plus the custom one we made in the previous example. Since previous color scheme was a bit too somber, I added 
the Hippie blue scheme to this example. New in this example is also that the surface and background colors receives a
strong blend of the primary color in both dark and light mode.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3al.png?raw=true" alt="ColorScheme example 3a light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3ad.png?raw=true" alt="ColorScheme example 3a dark" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3bl.png?raw=true" alt="ColorScheme example 3b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3bd.png?raw=true" alt="ColorScheme example 3b dark" width="190"/>

[**In example 4**](https://rydmike.com/flexcolorscheme4)
we are going all in, we can now use a popup dialog to select any of the predefined schemes, plus the one we
made above and two more. An olive green scheme defined from just one color per theme mode. Despite that only one 
color was used, it still has automatic default nuances when created with the `FlexSchemeColor.from` method. 
For the third custom Toledo orange scheme we define the primary and secondary scheme colors, but only for the 
light scheme. The dark scheme we create from the light scheme with the `FlexSchemeColor.toDark` method.

Surface and background branding level is a bit lower in this example than in the previous one, it is set to medium.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4al.png?raw=true" alt="ColorScheme example 4a light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4bl.png?raw=true" alt="ColorScheme example 4b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cl.png?raw=true" alt="ColorScheme example 4c light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cd.png?raw=true" alt="ColorScheme example 4c dark" width="190"/>

[**Example 5**](https://rydmike.com/flexcolorscheme5)
is the last, and most complex one of the package bundled examples. It presents more configuration options that we
can play with interactively. This example is best seen and tested on a tablet, desktop or web browser, 
rather than on a phone, but it certainly works dandy on a phone too. 
This example can do a lot of the things seen on the **Theme** page in 
the [**Flexfold demo app**](https://rydmike.com/demoflexfold). It even has a fake semi responsive menu/rail included, 
so that we can see more of the branded surfaces. 

This example can even do two tricks that the [**Flexfold demo app**](https://rydmike.com/demoflexfold) cannot:

1. It allows you to toggle the dark theme between using the defined hand tune dark scheme colors, or calculating 
   them with the `FlexSchemeColor.toDark` method and using this result for the dark scheme instead. This 
   demonstrates that for quick dark mode schemes, from a set of colors for a light theme, you can also create quick 
   matching dark mode scheme of it without hand-picking the colors. For actual apps you use in a theme you propably 
   want to define and tune the dark mode colors, but as quick way to get matching dark mode colors the method works
   surprisingly well and it can also be tuned with its `whiteBlend` parameter.
   

2. It can use the `ColorScheme` data that it has defined, and instead of creating the theme with its own `toTheme` 
   method, it can do it with the standard `ThemeData.from` factory using this `ColorScheme`. If you open two versions 
   of the example side by side, in two browser-windows, you can compare the results, not quite the same thing!
   **FlexSchemeColors** is working a bit of its theming magic in comparison.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5al.png?raw=true" alt="ColorScheme example 5 light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5bl.png?raw=true" alt="ColorScheme example 5b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5fl.png?raw=true" alt="ColorScheme example 5f light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5gl.png?raw=true" alt="ColorScheme example 5g light" width="190"/>

### Flexfold Demo App Uses FlexColorScheme

The Flexfold web demo app uses the **FlexColorScheme** package for all of its theming.
The Flexfold demo just has quite a bit much more surface areas visible that uses color branded surfaces, this 
tends to look a bit cooler than the above phone images, even when they are run as web apps. It might not seem so 
when looking at the phone screenshots above, but yes the Flexfold demo app is really using exactly the same 
themes via the **FlexColorScheme** package, proving that it can look pretty cool, like this:

<img src="https://rydmike.com/assets/FoldTheme1.gif?raw=true" alt="FlexColorScheme" width="800"/>

To play with the **FlexColorScheme** based themes in the Flexfold demo app, just head over to the
[**Flexfold demo**](https://rydmike.com/demoflexfold) and go to the **Theme** page. 

If you select custom theme, custom surface and custom app bar, you can pretty much build
any kind of theme you want interactively using [**FlexColorPicker**](https://rydmike.com/colorpicker) to pick colors.

## Why FlexColorScheme?

Google is re-designed the theming in Flutter so that all the built-in Material UI widgets will use colors
defined in a `ColorScheme` in ThemeData for their theme inherited colors. The recommended way to create 
a theme in Flutter is now to use the `ThemeData.from(colorScheme)` factory, over using the `ThemeData` factory directly.
The colors in a `ColorScheme` and their usage follow the Material Guide's 
[**color design guide**](https://material.io/design/color/).

The migration to move all Flutter Material UI widgets to only use `ColorScheme` derived colors is still in progress.
Some changes will inevitable also break with past default behavior from `ThemeData` factory. This public design
[**document**](https://docs.google.com/document/d/1kzIOQN4QYfVsc5lMZgy_A-FWGXBAJBMySGqZqsJytcE/edit#heading=h.pub7jnop54q0) 
explains the ongoing migration in detail.


### ColorScheme Theme Gaps

There are some obvious Widgets that currently don't get `ColorScheme` based colors applied in the current version of
Flutter's `ThemeData.from` factory. I wrote an analysis of this in issue
[**(#65782)**](https://github.com/flutter/flutter/issues/65782). **FlexColorScheme** addresses these issues in a way so
that more, hopefully even all, Flutter Material Widgets get `ColorScheme` based colors correctly, and 
consistently applied. 

There is also an issue [**(#65663)**](https://github.com/flutter/flutter/issues/65663) with
**ChoiceChip** Widget that has a default theme that makes it almost invisible in dark-mode, this applies to both the
`ThemeData` and `ThemeData.from` factories. This is corrected in FlexColorScheme, where a selected ChoiceChip gets a 
correctly used color scheme based theme also in dark-mode.

### Branded Surfaces and Backgrounds

The Material Guide describes [**color branded surfaces**](https://material.io/design/color/dark-theme.html#properties).
With **FlexColorScheme** you can easily toggle a color scheme from using standard white or dark backgrounds and 
surfaces, to use light, medium, strong or heavy primary color branded backgrounds and surfaces. 
The strengths are tuned differently for light and dark mode. 

For dark-mode a true black mode is also available for surfaces and backgrounds, color branding will also be applied
to true-back mode for the strong and heavy setting. If you really want to ensure absolute black in dark-mode, use it in
combination with the default no color branded surfaces and backgrounds.

### AppBarTheme Breaks its Chains

A long struggle of mine was to break AppBarTheme from its chains. With this I refer to be able to for example
create an `AppBarTheme` that has white background, while your light theme's primary color has brightness dark, 
meaning it needs white text color when used as a background. 

This is quite tricky, the backstory to this 
can be found in issue [**(#50606)**](https://github.com/flutter/flutter/issues/50606) that explains it in detail and
shows a workaround for it. Currently, FlexColorScheme uses the workaround described in the issue to break these chains
and set the AppBarTheme free. A **new AppBarTheme** feature implemented via
[**(71184)**](https://github.com/flutter/flutter/pull/71184) and its this additional feature proposal 
[**(#72206)**](https://github.com/flutter/flutter/issues/72206) and its resolution
[**(#72472)**](https://github.com/flutter/flutter/pull/72472), now makes it possible to do this without the workaround.
When these features land in stable channel, FlexColorScheme will change its implementation to use these 
new AppBarTheme properties instead of the currently used workaround.

The convenience app bar theming features offered by **FlexColorScheme**, that allows you to easily toggle an
`AppBarTheme` between using the standard primary and background colors, to the color branded versions of 
background or surface, or even a custom color that is not specified or included in the ColorScheme at all, 
will remain unchanged by this implementation detail change.

### Material Buttons

FlexColorScheme also by default themes the old Flutter Material buttons to follow the same visual design that 
the new buttons use. This is limited to the degree that was possible with the limitation of doing it with 
ThemeData only. I still recommend using the newer buttons for their nicer interactions and more flexible additional
theming possibilities. However, if you happen to use the old buttons, at least they won't look out of place with the
rest of the used colors in your application's color scheme.

### The Difference?

In the package documentation read.me file there is a 
[**detailed list**](https://pub.dev/packages/flex_color_scheme#used-theme-customizations)
of all the corrections, and some minor opinionated adjustments that **FlexColorScheme** does to a theme made from a 
ColorScheme with its `FlexColorScheme.toTheme` property, compared to the standard `ThemeData.from` factory.

The best way to show this is via a visual comparison. To make it more applicable to the case of also using
branded surfaces, the surface and background colors use a slight primary color branding in this example. The default in
Flutter is to not use any color branding, in that case, the backgrounds would just be plain white or dark
for both cases. FlexColorScheme certainly does normal plain backgrounds too, but for this comparison I 
wanted to show the difference in the look that you get when you also use slight color branding on 
the surface and background colors.

The chosen color scheme for the demonstration below was selected because it uses colors that makes the differences 
obvious. Depending on your color scheme's colors, the differences might be less obvious. The key differences are marked
with red boxes on the image from standard method on the left side.

#### Light Theme Mode Comparison

Apart from the more nuanced and selective surface and background color branding, we see some highlighted differences on
Material UI widgets in the **Theme Showcase** section. There are also some colors in the old ThemeData that do not get 
color scheme based colors applied to them at all! The fact that those are missing, impacts colors of some widgets that
still use them for their defaults, they will be left at the blue shades even in this orange and green colored theme.

These screenshots are straight from package [**Example 5**](https://rydmike.com/flexcolorscheme5). The example 
has a built-in toggle that allows you to try a `ColorScheme` based theme, using the standard 
`ThemeData.from(colorscheme)` theme
creation method or the `FlexColorScheme.toTheme` property (getter). The toggle that switches between these options, 
is marked in the screenshot below.

<img src="https://rydmike.com/assets/ColorSchemeCompareLight.png?raw=true" alt="compare light"/>

#### Dark Theme Mode Comparison

In dark-mode there is an additional difference. Flutter's current version of `ThemeData.from(colorscheme)`,
does not set the `ThemeData` property `toggleableActive` to a color from the `ColorScheme` in dark-mode.
The ThemeData factory sets this to accent color, which would be
the equivalent of secondary color in a ColorScheme. Why it does not set this property
is unknown, it really should in order to make a dark theme that follows the used color scheme. This was also
reported as the first point in issue and analysis [**(#65782)**](https://github.com/flutter/flutter/issues/65782).

The Flutter `ThemeData.from(colorScheme)` factory sets a number of other color properties in `ThemeData`, why not this 
one too? In any case, **FlexColorScheme** takes care of this color scheme based theme inconsistency as well.

<img src="https://rydmike.com/assets/ColorSchemeCompareDark.png?raw=true" alt="compare dark"/>


## Built-in Color Schemes

Naturally we have to have some ready to use and built-in example color schemes to use and play with. 
**FlexColorScheme** comes with 20 ready to go color schemes that you can use in your apps if you like. 

The bundled examples are all tuned matching light and dark theme pairs. The first two color schemes are actually 
the Flutter and Material Design guide examples of light and dark mode themes, and the high contrast light and 
dark color version as well. So OK, there are actually "only" 18 new ready-made bonus color schemes.
I might add more designs in later versions if there are requests, or some proposed nice 
additional color schemes you would like to have included. 

There is of course no need to use any of the built-in color schemes, the package examples show how you can easily 
make you own custom flex color schemes, maybe these will inspire you.

### Light Mode Color Schemes

Below you will find all the light theme mode color schemes, with the scheme colors shown and their names.

<img src="https://rydmike.com/assets/LightScheme001.png?raw=true" alt="light 01" width="200"/>
<img src="https://rydmike.com/assets/LightScheme002.png?raw=true" alt="light 02" width="200"/>
<img src="https://rydmike.com/assets/LightScheme003.png?raw=true" alt="light 03" width="200"/>
<img src="https://rydmike.com/assets/LightScheme004.png?raw=true" alt="light 04" width="200"/>
<img src="https://rydmike.com/assets/LightScheme005.png?raw=true" alt="light 05" width="200"/>
<img src="https://rydmike.com/assets/LightScheme006.png?raw=true" alt="light 06" width="200"/>
<img src="https://rydmike.com/assets/LightScheme007.png?raw=true" alt="light 07" width="200"/>
<img src="https://rydmike.com/assets/LightScheme008.png?raw=true" alt="light 07" width="200"/>
<img src="https://rydmike.com/assets/LightScheme009.png?raw=true" alt="light 09" width="200"/>
<img src="https://rydmike.com/assets/LightScheme010.png?raw=true" alt="light 10" width="200"/>
<img src="https://rydmike.com/assets/LightScheme011.png?raw=true" alt="light 11" width="200"/>
<img src="https://rydmike.com/assets/LightScheme012.png?raw=true" alt="light 12" width="200"/>
<img src="https://rydmike.com/assets/LightScheme013.png?raw=true" alt="light 13" width="200"/>
<img src="https://rydmike.com/assets/LightScheme014.png?raw=true" alt="light 14" width="200"/>
<img src="https://rydmike.com/assets/LightScheme015.png?raw=true" alt="light 15" width="200"/>
<img src="https://rydmike.com/assets/LightScheme016.png?raw=true" alt="light 16" width="200"/>
<img src="https://rydmike.com/assets/LightScheme017.png?raw=true" alt="light 17" width="200"/>
<img src="https://rydmike.com/assets/LightScheme018.png?raw=true" alt="light 18" width="200"/>
<img src="https://rydmike.com/assets/LightScheme019.png?raw=true" alt="light 19" width="200"/>
<img src="https://rydmike.com/assets/LightScheme020.png?raw=true" alt="light 20" width="200"/>


### Dark Mode Color Schemes

Below you will find all the dark theme mode color schemes, with the scheme colors shown and their names.

<img src="https://rydmike.com/assets/DarkScheme001.png?raw=true" alt="dark 01" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme002.png?raw=true" alt="light 02" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme003.png?raw=true" alt="light 03" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme004.png?raw=true" alt="light 04" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme005.png?raw=true" alt="light 05" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme006.png?raw=true" alt="light 06" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme007.png?raw=true" alt="light 07" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme008.png?raw=true" alt="light 07" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme009.png?raw=true" alt="light 09" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme010.png?raw=true" alt="light 10" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme011.png?raw=true" alt="light 11" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme012.png?raw=true" alt="light 12" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme013.png?raw=true" alt="light 13" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme014.png?raw=true" alt="light 14" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme015.png?raw=true" alt="light 15" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme016.png?raw=true" alt="light 16" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme017.png?raw=true" alt="light 17" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme018.png?raw=true" alt="light 18" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme019.png?raw=true" alt="light 19" width="200"/>
<img src="https://rydmike.com/assets/DarkScheme020.png?raw=true" alt="light 20" width="200"/>

## Funky Theme Names?

So where do the funky theme names come from? Like Mandy red and Hippie blue among others. I used the Flexfold
demo app's custom theme mode, to design s§ome of the color schemes in FlexColorScheme. When you do that
the used [**FlexColorPicker**](https://rydmike.com/colorpicker) names the chosen color automatically. Sometimes the
color names where just too hip to not use them in its scheme name too.

---

Now when the secrets of the color schemes and interactive theming in the Flexfold demo app have been revealed, why not
head over to [**pub.dev and give FlexColorScheme**](https://pub.dev/packages/flex_color_scheme) and give it a try!

Page updated 23.12.2020