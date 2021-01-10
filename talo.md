| [Home](https://rydmike.com) | [Flexfold](flexfold) | [ColorScheme](colorscheme) | [ColorPicker](colorpicker) |  
| Talo                        | [Grid](gridview)     | [Issues](issues)           | [Blog](blog)               |


## Development of TALO

Professionally I'm working on a project we call **TALO**. I am not at liberty to talk too much about TALO at its
current stage, but below is a short summary and backstory of TALO and Flutter. Our resources are a bit
limited when it comes to TALO's development, so while it is progressing, it is a bit of a
slow burn at the moment. We are currently looking for investors and partners to help us speed up the development.
If you want to contact us regarding TALO, my [Twitter direct messages](https://twitter.com/RydMike) are open. 

<img src="https://rydmike.com/assets/mr2_round400_tr.png?raw=true" alt="rydmike" width="200"/>

### What is TALO?

The full scope and goal of **TALO** is quite ambitious, a short explanation is that it is a platform and application
used to manage buildings during their entire life-cycle, after they have been built, for as long as they remain in use.

**TALO** involves **all parties** in the processes during a building's life cycle, from property owners, 
property managers, service providers, to building users and tenants. TALO covers aspects like, sustainability and 
energy efficiency, in-door conditions monitoring, business and cost control, refurbishments and capex planning,
maintenance and facility services plus tenants management and services.

Typical TALO customers and users are large building portfolio owner's and managers of such building portfolios.
Companies offering services to them are also users with a key role in the TALO ecosystem. TALO is also used in
more limited roles by any party participating in activities and processes in a building, including
users and tenants.

<img src="https://rydmike.com/assets/splashdemo3.gif?raw=true" alt="talo splash" width="240"/>

Our initial target is to build and release an MVP with focus on sustainability and energy efficiency, 
that migrates features already covered in our stable production Web based system, that while working fine
is a bit legacy burdened.

### TALO and Flutter

We evaluated Flutter to see if it could be used to build modern and beautiful UIs for TALO. To my 
surprise it was fairly easy, even I could do it. These are some early tests I made during the evaluation. 
They are not final designs, more like early concepts.

<img src="https://rydmike.com/assets/TaloDemoV1.gif?raw=true" alt="talo features" width="240"/>

A key requirement for our use case is that we need not only Android and iOS apps, but also versions that 
can be used in back office roles on desktop as installed apps, primarily on Windows, but Mac and Linux are welcome too.
Naturally we also need to be able to offer TALO as a Web app for zero deployment and in a way that is also usable
as a PWA for users with less frequent participation roles that only use it occasionally.

Given these requirements, we were intrigued by Flutter's ambition and goal to deliver all of this with
a single code base.

### Windows and Web

I tested Flutter on Windows desktop and Web quite early, this was back when it was still exotic on Windows, and
you had to clone runners from a separate repository to even make Flutter Windows desktop apps. Instructions on
how to get it all to work, was a bit limited back then. To my surprise and despite all this, it was still quite easy
to set everything up, and the concept apps worked, it was all really slick. Windows desktop performance was already 
great, but Web performance was not quite there yet, and it is not quite there today either, but getting close
now in my opinion.

Below is one of my concepts and attempts to make a version of TALO that runs on our needed platforms, 
is adaptive and responsive in a way that works as expected at different canvas sizes on each platform. We were quite
happy with these early results. This is by the way a long animated GIF screen recording, it shows desktop sizes 
after a while too, so stay with it. 

<img src="https://rydmike.com/assets/TaloDesktopDemo.gif?raw=true" alt="talo desktop"/>


### Conclusions

Some aspects of Flutter were not quite ready for prime time on all of our required platforms when we evaluated it, 
and it is not quite there today either. We were however impressed and convinced by the level and 
readiness observed already during these concept tests. We also found that the Flutter SDK and Dart language was easy
to learn, and as a developer experience, it and the tooling, were a pure joy to use and code in.
The Flutter Community is very positive and always ready to lend a helping hand regarding questions, 
and Google has been very forthcoming and supportive with SDK issues.
 
All this, plus the continued development and progress of Flutter, has further cemented our conviction that Flutter is
the right fit for our use-case. So yes, we selected **Flutter** for TALO's UI development and are proceeding with it.

Hopefully I can share some more details later.

[-Mike](https://twitter.com/RydMike)

PS. Talo is Finnish and means house.

---
Published 19.12.2020, Updated 22.12.2020