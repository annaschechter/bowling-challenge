
Bowling Challenge
=================
Bowling is the week five, individual challenge at Makers Academy. This challenge is testing students' knowledge of Javascript, problem solving skills as well as Jasmine testing skills.
Specification
-------------
Bowling challenge is a system for counting and suming up the scores of a bowling game for one player.
The system has the following functionality:

* the game consists of 10 frames
* each frame consists of one or two throws depending on the throw outcome
* the number of knocked down pins is represented by points
* if 10 pins(max available for a roll) are knocked down in the first roll it's a strike
  The frame ends immediately (since there are no pins left for a second roll).
  The bonus for that frame is the number of pins knocked down by the next two rolls. That is the next frame, except if the player rolls a strike again.
* if 10 pins are knocked down in two rolls it's a spare
  The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first role of next frame).

Languages and Tools
-------------------
* JavaScript
* Jasmine

How to use
----------
Clone the repository:
```
$ git clone https://github.com/annaschechter/bowling-challenge.git
```
Run Jasmine to see the unit tests:
```
$ open SpecRunner.html
```