| [Home](https://rydmike.com) | [Flexfold](flexfold) | ColorScheme                | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | [Experiments](experiments)  |

## FlexColorScheme

**FlexColorScheme** can help you make beautiful color scheme based Flutter themes, using optional color branded
surfaces. The created themes are based on the same concept as Flutter's `ColorScheme` based themes,
but with a few interesting twists and additional features.

**FlexColorScheme** is available on **pub.dev** as a [**Flutter package**](https://pub.dev/packages/flex_color_scheme).

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/CollageSize50.png?raw=true" alt="ColorScheme Intro"/>


### Background

FlexColorScheme was born when I was trying to make pretty themes for the [Flexfold](flexfold) demo app and from
some other real projects as well. I wanted a way to make it easier to make pretty color branded themes that also
work well for web and desktop apps. 

I also wanted to fix some theming gaps in Flutter's default ColorScheme based 
themes that I found myself fixing in pretty much every app. I also wanted to make it easy to build and support
interactive in app theming, which actually is pretty easy to do already with the basic SDK, but FlexColorScheme
makes it even easier.

### Live Web Versions of the FlexColorScheme Examples

The package documentation contains five usage examples. Starting with a really simple use case and increasing in
complexity with each example. The last example, number 5, does almost everything that you might have seen
before in the [**Flexfold demo**](http://rydmike.com/demoflexfold) web app on its **Theme** page.

[**In example 1**](https://rydmike.com/flexcolorscheme1)
we just use a built-in scheme as application theme and toggle between its light and dark variant, or allow device
theme mode to control if the dark or light theme is used.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1al.png?raw=true" alt="ColorScheme example 1 light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1ad.png?raw=true" alt="ColorScheme example 1 dark" width="190"/>

[**Example 2**](https://rydmike.com/flexcolorscheme2)
is a lot like the previous example, but we use our own custom colors to make a scheme and turn it into a theme.
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
made above and even one more, an olive green scheme defined from just one color per theme mode. Despite that only one 
color was used, it still has automatic default nuances. Surface and background branding level is a bit lower in
this example than in the previous one, it is set to medium.  
<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4al.png?raw=true" alt="ColorScheme example 4a light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4bl.png?raw=true" alt="ColorScheme example 4b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cl.png?raw=true" alt="ColorScheme example 4c light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cd.png?raw=true" alt="ColorScheme example 4c dark" width="190"/>

[**Example 5**](https://rydmike.com/flexcolorscheme5)
is the last, and most complex one of the package bundled examples. It presents more configuration options that we
can play with interactively. This example is best seen and tested on a tablet, desktop or web browser, 
rather than on a phone, but it certainly works dandy on a phone too. 
This example can do a lot of the things seen on the **Theme** page in 
the [**Flexfold demo app**](https://rydmike.com/demoflexfold). It even has a fake semi responsive menu/rail included, 
so that we can see more of the branded surfaces. 

This example can even do a trick the Flexfold demo app cannot, it can use the `ColorScheme` 
data that it has defined, and instead of creating the theme with its own `toTheme` method, it can do it with the
standard `ThemeData.from` factory using this `ColorScheme`. If you open two versions of the example side by side, in 
two browser-windows, you can compare the results, not quite the same thing! **FlexSchemeColors** is working a bit of
its theming magic in comparison.

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
defined in a ColorScheme in ThemeData for their theme inherited colors. The recommended way to create 
a theme in Flutter is now to use the ThemeData.from(colorScheme) factory, over using the ThemeData factory directly.

The colors available in ColorScheme and their usage, follow the Material Guide's 
[**color design guide**](https://material.io/design/color/).

The migration to move all Flutter Material UI widgets to only use ColorScheme derived colors is still in progress.
Some changes will inevitable also break with past default behavior from ThemeData. This public design
[**document**](https://docs.google.com/document/d/1kzIOQN4QYfVsc5lMZgy_A-FWGXBAJBMySGqZqsJytcE/edit#heading=h.pub7jnop54q0) 
explains the migration in detail.


### ColorScheme Theme Gaps

There are some obvious Widgets that currently don't get ColorScheme based colors applied in the current version of
Flutter's ThemeData.from factory. I wrote an analysis of this in issue
[**(#65782)**](https://github.com/flutter/flutter/issues/65782). FlexColorScheme addresses these issues in way so
that more, hopefully even all, Flutter Material Widgets get ColorScheme based colors correctly applied. 

There is also an issue [**(#65663)**](https://github.com/flutter/flutter/issues/65663) with
ChoiceChip Widget that has a default theme that makes it almost invisible in dark-mode, this applies to both the
ThemeData and ThemeData.from factory. This is also corrected in FlexColorScheme.

### Branded Surfaces and Backgrounds

The Material Guide also describes [**color branded surfaces**](https://material.io/design/color/dark-theme.html#properties).
With FlexColorScheme you can easily toggle a color scheme from using standard white or dark backgrounds and surfaces, 
to use light, medium, strong or heavy primary color branded backgrounds and surfaces. 
The strengths are tuned differently for light and dark mode. 
For dark-mode a true black mode is also available for surfaces and backgrounds, color branding will also be applied
to this mode for the strong and heavy mode. If you really want to ensure absolute black in dark-mode, use it in
combination with the default no branded surfaces and backgrounds.

### AppBarTheme Breaks its Chains

A long struggle for me was to break AppBarTheme from its chains, so that you can for example create an AppBarTheme
that has white background, while your light themes primary color has a high contrast color of brightness dark, 
meaning it needs white text color when used as a background. This is quite tricky, the backstory to this 
can be found in issue [**(#50606)**](https://github.com/flutter/flutter/issues/50606) that explains it in detail and
a work-around for it. Currently, FlexColorScheme uses the workaround describe din the issue to break these chains
and set the AppBarTheme free. However, a new feature implemented via
[**(71184)**](https://github.com/flutter/flutter/pull/71184) and its companion additional feature 
[**(#72206)**](https://github.com/flutter/flutter/issues/72206) and resolution [**(#72472)**](https://github.com/flutter/flutter/pull/72472) now makes it possible to do this without the work-around. When these features
land in stable channel, FlexColorScheme will change its implementation detail to use these the new AppBarTheme
features.

The extra AppBarTheme features currently offered by FlexColorScheme, that allows you to easily toggle an 
AppBarTheme between using the standard primary and background colors, to the color branded versions of 
background or surface, or even a custom color that is not specified and included in the ColorScheme at all, 
will remain unchanged by this implementation detail change.

### Material Buttons

FlexColorScheme also by default themes the old Flutter Material buttons to follow the same visual design that 
the new buttons use. This to the degree that it was possible within the limitation of doing it with ThemeData only.
I still recommend using the newer buttons for their nicer interactions and more flexible additional theming
possibilities. However, if you happen to use the old buttons, at least they won't look out of place with the
rest of the used colors in your application's color scheme.

### The end result?

In the package documentation read.me file there is detailed list of all the corrections, and some minor opinionated
adjustments FlexColorScheme does to a theme made from a ColorScheme compared to the standard ThemeData.from factory.

The best way to show this is via a visual comparison. To make it more applicable to the case of also using
branded surfaces, the surface and background use a slight primary color branding in this example. The default in
Flutter is of course to not use any color branding, when doing, so the backgrounds would just be plain white or dark
instead.

The chosen color scheme for the demonstration below was selected because it uses colors that makes the differences 
obvious. Depending on your color scheme's colors, the differences might be less obvious.

#### Light Theme

Apart from the more nuanced and selective surface and background color branding, we see some highlighted differences on
Material UI widgets in the Theme Showcase section. There are also some colors in the old ThemeData that do not get 
color scheme based colors applied to them. The fact that those are missing impacts colors of some widgets that still use
them for their defaults, they will be left at the blue shades even in this orange and green colored theme.

This screenshot is straight from package [**Example 5**](https://rydmike.com/flexcolorscheme5), it has a built-in
toggle that allows you to try a ColorScheme colored theme, based on ThemeData.from(colorscheme) or 
FlexColorScheme().toTheme.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/ColorSchemeCompareLight.png?raw=true" alt="ColorScheme light"/>

#### Dark Theme

In dark-mode there is an additional difference. Flutter's current version of ThemeData.from(colorscheme),
does not set the ThemeData property toggleableActive to a color from the ColorScheme in dark-mode.
The ThemeData factory sets this to accent color, which would be
the equivalent of secondary color in a ColorScheme. Why it does not set this property
is unknown, it really should in order to make a dark theme that follows the used color scheme. This was also
reported as the first point in issue and analysis [**(#65782)**](https://github.com/flutter/flutter/issues/65782).
ThemeData.from(colorScheme) does set a number of other color properties in ThemeData, why not this one too?
In any case, FlexColorScheme takes care of this color scheme based theme inconsistency as well.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/ColorSchemeCompareDark.png?raw=true" alt="ColorScheme dark"/>


## Funky Built-in Themes and Names

So where do the funky theme names come from? Like Mandy red and Hippie blue among others. I actually used the Flexfold
demo app's custom theme mode, to design some of the color schemes in FlexColorScheme. When you do that
the used [**FlexColorPicker**](https://rydmike.com/colorpicker) names the chosen color automatically. Sometimes the
color names where just too hip to not use them in the scheme names too.

Now when the secrets of the color schemes and interactive theming in the Flexfold demo app have been revealed, why not
head over to [**pub.dev and give FlexColorScheme**](https://pub.dev/packages/flex_color_scheme) and give it a try!

---

Page updated 21.12.2020