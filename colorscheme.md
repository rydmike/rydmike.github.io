| [Home](README)   |[Flexfold](flexfold) | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Grid](gridview) |[Issues](issues)     | [Experiments](experiments)     | [TALO](talo)                   |

## FlexColorScheme

**FlexColorScheme** can help you make beautiful color scheme based Flutter themes, using optional color branded
surfaces. The created themes are based on the same concept as Flutter's newer `ColorScheme` based themes,
but with a few interesting twists and additional features.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/CollageSize50.png?raw=true" alt="ColorScheme Intro"/>

The **FlexColorScheme** package is now available on [pub.dev](https://pub.dev/packages/flex_color_scheme) as
a pre-release dev version. Documentation is still being improved and there are some pending API changes planned
before the 1.0.0 release.

 ### Live WEB versions of the FlexColorScheme examples in the pub.dev package

The package documentation contains five different usage examples. It starts with simplest case, and increase in
complexity with each example. The last example, number 5, has almost everything that you can also see and try 
in the Flexfold web demo app.

[**In example 1**](https://rydmike.com/flexcolorscheme1)
we just use a built-in scheme as application theme and toggle between its light and dark variant, or allow device
theme mode to control if the dark or light theme is used.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1al.png?raw=true" alt="ColorScheme example 1 light" width="260"/>

[**Example 2**](https://rydmike.com/flexcolorscheme2)
is a lot like the previous example, but here we use our own custom colors to make a scheme and turn it into a theme.
In this case I used a bit more dignified looking dark purple and deep green.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex2al.png?raw=true" alt="ColorScheme example 2 light" width="260"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex2ad.png?raw=true" alt="ColorScheme example 2 dark" width="260"/> 

[**With example 3**](https://rydmike.com/flexcolorscheme3)
we are getting a bit fancier, we can now switch active theme between 3 different predefined color schemes,
plus the custom one we made in the previous example, since it was a bit too somber, I added the Hippie blue 
theme in this example. New in this version is also that the surface and background colors have all received a
strong blend of the primary color in both dark and light mode.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3al.png?raw=true" alt="ColorScheme example 3a light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3ad.png?raw=true" alt="ColorScheme example 3a dark" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3bl.png?raw=true" alt="ColorScheme example 3b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex3bd.png?raw=true" alt="ColorScheme example 3b dark" width="190"/>

[**In example 4**](https://rydmike.com/flexcolorscheme4)
we are going all in, we can now use a popup dialog to select any of the predefined themes, plus the one we
made above and one more olive green theme defined from just one color per theme mode, yet it has automatic
nuances too. Surface and background branding level is a bit lower in this demo than the pervious, it is set to medium.


<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4al.png?raw=true" alt="ColorScheme example 4a light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4bl.png?raw=true" alt="ColorScheme example 4b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cl.png?raw=true" alt="ColorScheme example 4c light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex4cd.png?raw=true" alt="ColorScheme example 4c dark" width="190"/>

[**Example 5**](https://rydmike.com/flexcolorscheme5)
is the last and most complex of the package bundled examples. It presents more configuration options that we
can play with interactively.
This example is best seen and tested on a tablet, desktop or web browser, rather than on a phone, but it
certainly works dandy on a phone too. This version can do a lot of the things seen on the theming page in 
the **Flexfold demo** app. It even has fake semi responsive menu/rail included so it can have a bit more of 
the branded surfaces visible. 

This example can do a trick the Flexfold demo cannot, it can switch to use the same ColorScheme 
data that it uses, and instead of creating the theme with its own "toTheme" method, it can do it with the standard 
"ThemeData.from" color scheme factory. If you open two versions of the app side by side in a two browser 
windows, you can compare the results, not quite the same thing.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5al.png?raw=true" alt="ColorScheme example 5 light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5bl.png?raw=true" alt="ColorScheme example 5b light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5fl.png?raw=true" alt="ColorScheme example 5f light" width="190"/><img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex5gl.png?raw=true" alt="ColorScheme example 5g light" width="190"/>

### Flexfold demo using FlexColorScheme

As mentioned, the **Flexfold** web demo app also uses the **FlexColorScheme** package for all its theming.
Flexfold just has quite a bit much more surface area that uses color branded surfaces, so it tends
to look a bit cooler than the above phone images, even when they are run as web apps. Flexfold is however using
exactly the same themes via the **FlexColorScheme** package, but yeah it can look really cool, like shown here.

<img src="https://rydmike.com/assets/FoldTheme1.gif?raw=true" alt="FlexColorScheme" width="800"/>

To play with the themes in the Flexfold app, just head over to the [Flexfold demo](https://rydmike.com/demoflexfold)
and go to themes. If you select the custom theme, custom surface and custom app bar, you can pretty much build
any kind of theme interactively using [FlexColorPicker](https://rydmike.com/colorpicker) to pick colors.

So where do the funny theme names come from, like Mandy red, Hippie blue among other. I actually used Flexfold
customizable FlexColorScheme mode to design some of the themes in FlexColorScheme, and when you do that
FlexColorPicker can name the chosen color automatically, sometimes the color names where too hip to not 
use in the theme name.

Now that the secret of the fancy and interactive theming in Flexfold has been revealed, why not 
head over to [pub.dev and give FlexColorScheme](https://pub.dev/packages/flex_color_scheme) a spin!

**So what's next?**  
Yes eventually the animated responsive scaffold, Flexfold itself is coming to pub.dev too...
