| [Home](README) | [Flexfold](flexfold) | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Talo](talo)   | [Grid](gridview)     | [Issues](issues)               | Experiments                    |

## Experiments - Github Flutter and Dart Gists

Occasionally I publish Flutter and Dart Gists that you can try in DartPad online. Often the Gists were made
to present something that did not look quite right, but sometimes they can just be a Flutter example and snippet 
I found useful and wanted to share.

---

### Correct way to add padding to Slivers

You cannot wrap a Sliver with normal Padding in Flutter, well you can, but it will not render correctly if
you have objects in you list with shadows that extend out into the padded area.

In the Gist demo when clicking on then button top open **example 1**, we see that padding works OK on a
normal grid view, but in **example 2** we can see that using padding covers the shadows that should
extend into the padded area, so we get a sharp cut of the shadow.

In **examples 3 and 4** it is demonstrated how this rendering issue can be solved by using SliverPadding instead.
The difference may be subtle, especially when viewed separately, but it is there and does not look so good to a 
keen eye, below is a composite image showing the difference.

You can try, and see this in a browser with [**DartPad here**](https://www.dartpad.dev/e199cb754fc08f4e1500efc96e322eee?).

<img src="https://rydmike.com/assets/sliverpadding.png?raw=true" alt="Sliver padding"/>

Source GIST: [**Padding Slivers with SliverPadding and demo of why Padding does not work**](https://gist.github.com/rydmike/e199cb754fc08f4e1500efc96e322eee)

---