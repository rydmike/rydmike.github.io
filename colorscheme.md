| [Home](https://rydmike.com) | [Flexfold](flexfold) | Color Scheme                | [Color Picker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)            | [Experiments](experiments)  |

## FlexColorScheme

**FlexColorScheme** can help you make beautiful color scheme based Flutter themes, using optional color branded
surfaces. The created themes are based on the same concept as Flutter's `ColorScheme` based themes,
but with a few interesting twists and additional features.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/CollageSize50.png?raw=true" alt="ColorScheme Intro"/>

FlexColorScheme was born when I was trying to make pretty themes for the [Flexfold](flexfold) demo app and from
some other real projects as well. I wanted a way to make it easier to make pretty color branded themes that also
work well for web and desktop apps. I also wanted to fix some theming gaps in Flutter's default ColorScheme based 
themes that I found myself fixing in pretty much every app. I also wanted to make it easy to build and support
interactive in app theming, which actually is pretty easy to do already with the basic SDK, but FlexColorScheme
makes it even easier.

**FlexColorScheme** is available on **pub.dev** as a [**Flutter package**](https://pub.dev/packages/flex_color_scheme). 

### Live Web Versions of the FlexColorScheme Examples

The package documentation contains five different examples. They start with a really simple use case and increase in
complexity with each example. The last example, number 5, has almost everything that you might have seen
before in the [**Flexfold web demo**](http://rydmike.com/demoflexfold) app on its **Theme** page.

[**In example 1**](https://rydmike.com/flexcolorscheme1)
we just use a built-in scheme as application theme and toggle between its light and dark variant, or allow device
theme mode to control if the dark or light theme is used.

<img src="https://github.com/rydmike/flex_color_scheme/blob/master/resources/fcs_phone_ex1al.png?raw=true" alt="ColorScheme example 1 light" width="190"/>

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

The Flexfold web demo app uses **FlexColorScheme** package for all of its theming.
The Flexfold demo app just has quite a bit much more surface areas visible that uses color branded surfaces, it 
thus tends to look a bit cooler than the above phone images, even when they are run as web apps. It might not seem so 
when looking at the phone screenshots above, but yes the Flexfold demo app is really using exactly the same 
themes via the **FlexColorScheme** package, proving that it can look pretty cool, like this:

<img src="https://rydmike.com/assets/FoldTheme1.gif?raw=true" alt="FlexColorScheme" width="800"/>

To play with the **FlexColorScheme** based themes in the Flexfold demo app, just head over to the
[**Flexfold demo**](https://rydmike.com/demoflexfold) and go to the **Theme** page. 

If you select custom theme, custom surface and custom app bar, you can pretty much build
any kind of theme you want interactively using [**FlexColorPicker**](https://rydmike.com/colorpicker) to pick colors.

### Funky Built-in Theme Names

So where do the funky theme names come from? Like Mandy red and Hippie blue among others. I actually used the Flexfold
demo app's custom theme mode, to design some of the color schemes in FlexColorScheme. When you do that
the used [**FlexColorPicker**](https://rydmike.com/colorpicker) names the chosen color automatically. Sometimes the
color names where just too hip to not use them in the scheme names too.

Now when the secrets of the color schemes and interactive theming in the Flexfold demo app have been revealed, why not 
head over to [**pub.dev and give FlexColorScheme**](https://pub.dev/packages/flex_color_scheme) and give it a try!

---

**So what's next?**  
Yes eventually the animated responsive scaffold, **Flexfold** itself is coming to pub.dev too...

----

Page updated 21.12.2020