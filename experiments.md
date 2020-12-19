| [Home](README)   | [Flexfold](flexfold) | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Grid](gridview) | [Issues](issues)     | Experiments                    | [TALO](talo)                   |

## Experiments - Github Flutter and Dart Gists

Occasionally I publish Flutter and Dart Gists that you can try in DartPad online. Usually the Gists were made
to present something that does not look quite right, but sometimes it can just be a Flutter example and snippet 
I found useful and wanted to share.

### Correct way to add padding to Slivers

You cannot wrap a sliver with normal Padding in Flutter, well you can, but it will not render correctly if
you have objects in you list with shadows that extend out into the padded area.

GIST: [Padding Slivers with SliverPadding and demo of why Padding does not work]
(https://gist.github.com/rydmike/e199cb754fc08f4e1500efc96e322eee)

In the demo app when clicking on then button for example 1, we see that padding works OK on a normal grid, 
but in example 2 we can see that using padding covers the shadows that should extend into the padded area,
so we get a sharp cut of the shadow.

In examples 3 and 4 it is demonstrated how this rendering issue can be solved by using SliverPadding instead.
The difference may be subtle, especially when viewed separately, but it is there and does not look so good to a 
keen eye, here is a composite image showing the difference.

<img src="https://rydmike.com/assets/sliverpadding.png?raw=true" alt="Sliver padding"/>


You can try this live in a browser with [DartPad here](https://www.dartpad.dev/e199cb754fc08f4e1500efc96e322eee?).
