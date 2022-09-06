*(Sep 6, 2022)*

# Deep Dive Into Theming

On **August 31, 2022** at **Flutter Vikings** in Oslo, I had the pleasure and honor to do a talk and deep dive into theming **Flutter** apps.

On the evening before the talk, Flutter 3.3 had just been released. 

<img src="https://rydmike.com/assets/Flutter-3-3.gif?raw=true" alt="Flutter-3-3" width="400"/>

Luckily all my material had been prepared using the beta release of Flutter 3.3, so I was all set. Well after a few updates late into the night, I was.

My talk was the first one on the conference opening day in the main room, I was going on stage right after [Majid Hajian](https://twitter.com/mhadaily) had welcomed everyone to the conference. This was exciting, anticipations were high among the audience and speakers, as this was the first in person major Flutter conference in a long time.

Wait, we have technical problems and at a tech conference, who would have guessed...

<img src="https://rydmike.com/assets/tech_problems.jpeg?raw=true" alt="tech-problems" width="600"/>

Now we are very late to start the conference. My main concern before was already, will I be able to do it in my 40 minute time slot? We started so late, can I still use 40 min? Ok apparently I can, cool.

The tech issues seems to be sorted, and Majid is opening the conference now, he says something about that everything was working last night, and today a world of problems. I'm barely listening, so excited that this is finally happening. Now he is back on track to welcoming all. [Tim Sneath](https://twitter.com/timsneath) is on stage now too, he sounds happy and excited as always, back to Majid, he is thanking all the sponsors.

[<img src="https://rydmike.com/assets/majid-opens-conference.jpg?raw=true" alt="talk" width="600"/>](https://youtu.be/gn1F7GClECY?t=117)

What, he is done already? I'm on now? So what was it I was going to talk about? Diving? Stage dive? 

<img src="https://rydmike.com/assets/vikings_start_talk.jpeg?raw=true" alt="start-talk" width="600"/>

No wait, I got it, deep dive into theming Flutter apps, here we go! In the talk I cover:

* ThemeData the right way
* State of Material 3 in Flutter 3.3
* Beautiful ColorScheme
* ThemeExtension Harmonized Colors
* Component themes
* Quick Themes Playground demo

<img src="https://rydmike.com/assets/vikings_talk.jpeg?raw=true" alt="vikings-talk" width="600"/>

## Recordings of the Talk

The talk was streamed live and is available as a stream recording on YouTube. Unfortunately the opening issues of the Flutter Vikings conference meant we had very poor streamed video quality during the opening and the morning talks in Valhalla room. The quality of the stream was very poor, so the YouTube recording of the stream is very fuzzy. There is also no inset of the speaker on the slide deck, or even occasionally showing the speaker. Just voice and fuzzy slides from the stream. Regardless of all these minor issues, you can find my talk here.

[<img src="https://rydmike.com/assets/vikings_video_thumb.jpeg?raw=true" alt="talk" width="600"/>](https://youtu.be/gn1F7GClECY?t=624)

The talk was recorded locally too, including speaker video, slides and audio separately. I have been informed that all the talks from the conference will be edited and released as high quality videos on YouTube later. When my talk becomes available, I will update the link above to it instead.

## Presentation Slide Deck

I made my presentation slide deck available here:

[<img src="https://rydmike.com/assets/Vikings_talk_slides.png?raw=true" alt="Talk slides" width="600"/>](https://docs.google.com/presentation/d/1F7LXlMkD4Z5Eqkvw8uwMQBgBX52IiLqe3yODuakmLQo/edit#slide=id.p1)

I could not keep the 4k videos used in original PowerPoint that I used during the talk. Google Slides refused to convert my 730 MB PowerPoint with 4k videos embedded in it, to Google Slides, more suitable for sharing on the web. So those videos had to be removed. I did replace a few shorter ones with GIFs that Google Slides could handle.

I also included a number of extra slides that were not in the talk. They explain certain points in detail, instead of showing them with demos, or needing the talk to get the points across. The slides that were not in
the original talk are clearly marked so.

### Demo App Used in the Talk

During the talk and to prepare the slides, I used a very simple app that demonstrates different ways to define a `ThemeData` object in Flutter, to show the different results they produce. The same app is also used to show what happens in Flutter 3.3 when you switch to using Material 3 themes, by setting `useMaterial3` to true in `ThemeData`. 

This demo app is available as a single [Gist file on GitHub](https://gist.github.com/rydmike/6119077e4ba215f7eba87b785c06eaae), and it can be run directly in a browser using **DartPad** here:

[<img src="https://rydmike.com/assets/Vikings_talk_dartpad.png?raw=true" alt="Demo app"/>](https://dartpad.dev/?id=515a014525c91ec55c86b489c30bfad5)

## Talk Mood Shots

<img src="https://rydmike.com/assets/Vikings_talk_moods.jpg?raw=true" alt="talk_shots"/>

---
Created 06.09.2022