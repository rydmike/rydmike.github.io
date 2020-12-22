| [Home](https://rydmike.com) | [Flexfold](flexfold) | [ColorScheme](colorscheme) | [ColorPicker](colorpicker) |  
| [Talo](talo)                | [Grid](gridview)     | [Issues](issues)           | Experiments                |

## Experiments - Github Flutter Gists

Occasionally I publish Flutter Gists that you can try in DartPad. Often the Gists were made
to present something that did not look quite right, but sometimes they can just be a Flutter example and snippet 
I found useful and wanted to share.

---

### Correct Way to Add Padding to Slivers

You cannot wrap a Sliver with normal Padding in Flutter, well you can, but it will not render correctly if
you have objects in the list with shadows that extend out into the padded area.

In this Gist demo when clicking on the **example 1** button, we see that padding works OK on a
normal grid view, but in **example 2** we can see that using padding covers the shadows that should
extend into the padded area, so we get a sharply cut shadow.

In **examples 3 and 4** it is demonstrated how this rendering issue can be solved by using SliverPadding instead.
The difference may be subtle, especially when viewed separately, but it is there and does not look so good to a 
keen eye, below is a composite image showing the difference.

You can see this demo in a browser with [**DartPad here**](https://www.dartpad.dev/e199cb754fc08f4e1500efc96e322eee?).  
<img src="https://rydmike.com/assets/sliverpadding.png?raw=true" alt="Sliver padding"/>  
Source GIST: [**Padding Slivers with SliverPadding and demo of why Padding does not work**](https://gist.github.com/rydmike/e199cb754fc08f4e1500efc96e322eee)  

---

### ClipRect over Container with BoxShadow

A pet nit-picking rendering issue of mine is the ClipRect issue. It is mentioned in my issues page as well. This
is a simpler DartPad demo of the issue that still fails to render correctly with current DartPad version too.

You can see this it in a browser with [**DartPad here**](https://www.dartpad.dev/0c6a2412cb3222a02e25cfead9ba8d29?).  
<img src="https://rydmike.com/assets/ClipRectIssue.png?raw=true" alt="ClipRect Issue"/>  
 Source GIST: [**ClipRect over Container with BoxShadow**](https://gist.github.com/rydmike/0c6a2412cb3222a02e25cfead9ba8d29)  

---
Page updated 20.12.2020