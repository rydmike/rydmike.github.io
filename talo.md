| [Home](README)   | [Flexfold](flexfold) | [FlexColorScheme](colorscheme) | [FlexColorPicker](colorpicker) |  
| [Grid](gridview) | [Issues](issues)     | [Experiments](experiments)     | TALO                           |


## TALO

Professionally I'm working on a project we call **TALO**. I'm not at liberty to talk too much about TALO at its
current stage, but below is a short description and backstory.

Our resources are a bit limited when it comes to TALO's development, so while it is progressing, it is a bit of a
slow burn. We are however currently looking for investors and partners to help us speed up the development.

<img src="https://rydmike.com/assets/mr2_round400_tr.png?raw=true" alt="rydmike" width="200"/>

If you want to talk about TALO, my [Twitter DM's](https://twitter.com/RydMike) are open. 

### What is TALO?

The full scope and goal of **TALO** is quite ambitious, a short explanation is that it is an application and platform
used to manage buildings during their life-cycle, after they have been built and are in use.

TALO involves all parties in the processes during a building's life cycle, from property owners, property managers, 
service providers, to building users and tenants. TALO covers aspects like, sustainability and energy efficiency, 
in-door conditions monitoring, business and cost control, refurbishments and capex planning, maintenance and 
facility services plus tenants management.

Main TALO customers and users are large building portfolio owner's and managers of such building portfolios.
Companies offering services to them are also users with an important role in the ecosystem. TALO can be used in
more limited roles by any party participating in activities and processes in a building, including
users and tenants.

Our initial target is to build and release a MVP with focus on sustainability and energy efficiency, 
that can migrate the features already covered in a stable production Web based system, that while working fine
is a bit legacy burdened.

### TALO and Flutter

We evaluated Flutter to see if it could be used to build modern and beautiful UIs for TALO. To my 
surprise it was fairly easy, even I could do it. Below some early tests I made during the evaluation. 
They are not final designs, more like early concepts.

<img src="https://rydmike.com/assets/splashdemo3.gif?raw=true" alt="talo splash" width="250"/>
<img src="https://rydmike.com/assets/TaloDemoV1.gif?raw=true" alt="talo features" width="250"/>
<img src="https://rydmike.com/assets/splashdemo3.gif?raw=true" alt="talo splash" width="250"/>

A key requirement for our use case is that we need not only Android and iOS apps, but also versions that 
can be used in back office roles on desktop as installed apps, primarily on Windows, but Mac and Linux are welcome too.
Naturally we also need to be able to offer TALO as a Web app for zero deployment, and as a PWA for users with less
frequent participation roles, that therefore might not want to have it installed as an app on their device.

I tested Flutter on Windows desktop and Web quite early, this was back when it was still exotic on Windows and
you had to clone runners from a separate repository to make Windows desktop apps. Instructions on how to get it
all to work, was also a bit limited back then. To my surprise and despite all this, it was still quite easy to set 
everything up, and the concept apps worked, it was all pretty slick. Windows desktop performance was already 
fine, but Web was not quite there yet, and is perhaps not quite so even today, but getting quite close
now in my opinion.

Below is one of my concepts and attempts to make a UI for TALO that runs on all above mentioned platforms, is adaptive
and responsive in a way that works in expected ways at different canvas sizes on each platform. We were quite
happy with these results. This is a long animated GIF demo, so stay with it... 

<img src="https://rydmike.com/assets/TaloDesktopDemo.gif?raw=true" alt="talo splash" />

Some aspects of Flutter are not quite ready for prime time on all of our required platforms, it was not so back then 
and is not quite there yet either. We were however impressed and convinced by the level and readiness observed already
during these concept tests. Additionally, Flutter SDK and Dart was easy to learn, and as a developer experience it,
and the tooling a pure joy to use and code in. The Flutter community is always positive, ready to lend a
helping hand regarding any questions, and Google has been very supportive with SDK issues.
 
All this, plus the continued development and progress of Flutter, has further cemented our conviction that Flutter is
the right fit for our use-case. So yes, we selected **Flutter** for TALO's UI development and are proceeding with it.

Hopefully I can share some more details later.

---
Published 19.12.2020