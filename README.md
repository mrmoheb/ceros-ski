# Ceros Ski Code Challenge

Welcome to the Ceros Code Challenge - Ski Edition!

For this challenge, we have included some base code for Ceros Ski, our version of the classic Windows game SkiFree. If
you've never heard of SkiFree, Google has plenty of examples. Better yet, you can play our version here:
http://ceros-ski.herokuapp.com/

Or deploy it locally by running:

```
npm install
npm run dev
```

There is no exact time limit on this challenge and we understand that everyone has varying levels of free time. We'd
rather you take the time and produce a solution up to your ability than rush and turn in a suboptimal challenge. Please
look through the requirements below and let us know when you will have something for us to look at. If anything is
unclear, don't hesitate to reach out.

**Requirements**

- **Fix a bug:**

  There is a bug in the game. Well, at least one bug that we know of. Use the following bug report to debug the code
  and fix it.

  - Steps to Reproduce:
    1. Load the game
    2. Crash into an obstacle
    3. Press the left arrow key
  - Expected Result: The skier gets up and is facing to the left
  - Actual Result: Giant blizzard occurs causing the screen to turn completely white (or maybe the game just crashes!)

- **Write unit tests:**

  The base code has Jest, a unit testing framework, installed. Write some unit tests to ensure that the above mentioned
  bug does not come back.

- **Extend existing functionality:**

  We want to see your ability to extend upon a part of the game that already exists. Add in the ability for the skier to
  jump. The asset file for jumps is already included. All you gotta do is make the guy jump. We even included some jump
  trick assets if you wanted to get really fancy!

  - Have the skier jump by either pressing a key or use the ramp asset to have the skier jump whenever he hits a ramp.
  - The skier should be able to jump over some obstacles while in the air.
    - Rocks can be jumped over
    - Trees can NOT be jumped over
  - Anything else you'd like to add to the skier's jumping ability, go for it!

- **Build something new:**

  Now it's time to add something completely new. In the original Ski Free game, if you skied for too long,
  a yeti would chase you down and eat you. In Ceros Ski, we've provided assets for a Rhino to run after the skier,
  catch him and eat him.

  - The Rhino should appear after a set amount of time or distance skied and chase the skier, using the running assets
    we've provided to animate the rhino.
  - If the rhino catches the skier, it's game over and the rhino should eat the skier.

- **Documentation:**

  - Update this README file with your comments about your work; what was done, what wasn't, features added & known bugs.
  - Provide a way for us to view the completed code and run it, either locally or through a cloud provider

- **Be original:**
  - This should go without saying but don’t copy someone else’s game implementation!

**Grading**

Your challenge will be graded based upon the following:

- How well you've followed the instructions. Did you do everything we said you should do?
- The quality of your code. We have a high standard for code quality and we expect all code to be up to production
  quality before it gets to code review. Is it clean, maintainable, unit-testable, and scalable?
- The design of your solution and your ability to solve complex problems through simple and easy to read solutions.
- The effectiveness of your unit tests. Your tests should properly cover the code and methods being tested.
- How well you document your solution. We want to know what you did and why you did it.

**Bonus**

_Note: You won’t be marked down for excluding any of this, it’s purely bonus. If you’re really up against the clock,
make sure you complete all of the listed requirements and to focus on writing clean, well organized, and well documented
code before taking on any of the bonus._

If you're having fun with this, feel free to add more to it. Here's some ideas or come up with your own. We love seeing
how creative candidates get with this.

- Provide a way to reset the game once it's over
- Provide a way to pause and resume the game
- Add a score that increments as the skier skis further
- Increase the difficulty the longer the skier skis (increase speed, increase obstacle frequency, etc.)
- Deploy the game to a server so that we can play it without having to install it locally
- Write more unit tests for your code

We are looking forward to see what you come up with!

# What I have did:

- ## Bug fix:
  - The Root Cause: When the skier hits an obstacle the skier direction changes to 0. And as the player press left key the function which changes the position of the skier decrements the direction by 1 thats to say in this case the current direction is going to be -1. As the assetManager tries to render the -1 direction; it doesn't find any element of the array with key -1 so it returns undefined value. So the game drawing function fails to render the asset and the game window so it crashes and returns an error when its trying to calculate the width & the length.
  - The Fix: I have created a new function checkIfSkierCanTurnLeft() which check if the skier is already crashed or not.
    If the skier is crashed it will reset the direction of the skier to be 1 instead of -1.
  - I have created the unit test script for this feature in the Game.test.js.

* ## Jumping Feature:

  - I had to append the Constants.js file to include the jumping variables and to define the asset image of this feature.
  - I have appended the current keyboard event handler in the Game.js file and added the new function that I have created which will handle the jumping feature from the skier.js file.
  - I have created a function in game.js file checkIfSkierIsJumping() which check if the skier is still jumping and should the game make the next direction to be going down through the game.
  - I have created a jump() function in skier.js file which increments the y-axis with (speed + 4) as normal behavior for jumping which is speeding up the skier speed. And sets the skier direction to be JUMP which will load the assets of the jumping feature.
  - If the skier is jumping over rock I have made sure that the skier will not crash. But if jumping over tree the skier will crash and this is checked in function checkIfSkierHitObstacle() in skier.js file.
  - If the Skier hits an obstacle of type jump ramp the skier will have the jump feature triggered and will not crash but will jump.
  - I have included the jumping feature unit testing feature in the Game.test.js file.

* ## Rhino following the skier

  - I have created a new file under name of Rhino.js which include a class of Rhino.
  - The new class includes the same features of the skier except the rhino doesn't hit the obstacles.
  - I have appended the current Constants.js class to include the Rhino assets library and to include new Constant name "KILLED" which refers to when the rhino hits the skier.
  - A new function is created in game.js checkIfRhinoReachedSkier() which check if the Rhino reached the skier and if its true then the Skier directions is set to Killed and the game stops taking any other actions.
  - In keyboard event handler function I have appended the current function to include all the rhino directions so the rhino will clone all the directions from the skier to make sure that the rhino is following the skier.
  - The rhino starts to appear after 30000 units in y-axis which is equivalent to 50 seconds after the skier starts surfing.

* ## Score Calculation (Bonus)

  - The score calculation increments when the skier go further in the y-axis as there is a variable "score" in Game.js class file is incremented everytime.

  - The function calculateScore() increments the score each time the skier go down further. Also it subtracts the actual starting point of the skier from the current distance to give the actual distance that the skier travelled.

* ## Deploying the Game on Google Firebase cloud Hosting (Bonus)

- I have used the Google Firebase services to deploy the game after creating a build.
- You can find the game up and running from the below url
- ### https://ceros-ski-2020.web.app/
