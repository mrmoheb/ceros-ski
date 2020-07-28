import "babel-polyfill";
import "jest-canvas-mock";
import { Game } from "./Game.js";
import * as Constants from "../Constants";

const skiGame = new Game();

function initGameValues() {
  skiGame.skier.x = 0;
  skiGame.skier.y = Constants.INITIAL_Y_SKIER_START;
  skiGame.rhino.x = 0;
  skiGame.rhino.y = 0;
  skiGame.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
  skiGame.rhino.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
}

test("Check the left key is working after crashing", () => {
  initGameValues();

  skiGame.skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);

  const event = new KeyboardEvent("keydown", {
    keyCode: Constants.KEYS.LEFT,
    which: Constants.KEYS.LEFT,
  });
  skiGame.handleKeyDown(event);

  expect(skiGame.skier.direction).toEqual(Constants.SKIER_DIRECTIONS.LEFT);
});

test("Test the jumping feature", () => {
  initGameValues();

  skiGame.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);

  const event = new KeyboardEvent("keydown", {
    keyCode: Constants.KEYS.JUMP,
    which: Constants.KEYS.JUMP,
  });

  skiGame.handleKeyDown(event);
  skiGame.checkIfSkierIsJumping();

  expect(skiGame.skier.direction).toEqual(
    Constants.SKIER_DIRECTIONS.AFTER_JUMP
  );
});

test("check rhino movement that follow the skier", () => {
  initGameValues();

  let event = new KeyboardEvent("keydown", {
    keyCode: Constants.KEYS.DOWN,
    which: Constants.KEYS.DOWN,
  });
  skiGame.handleKeyDown(event);

  event = new KeyboardEvent("keydown", {
    keyCode: Constants.KEYS.LEFT,
    which: Constants.KEYS.LEFT,
  });

  expect(skiGame.skier.direction).toEqual(skiGame.rhino.direction);
});

test("check that rhino eats the skier", () => {
  initGameValues();

  skiGame.rhino.y = skiGame.skier.y + 1;
  skiGame.checkIfRhinoReachedSkier();

  expect(skiGame.skier.direction).toEqual(Constants.SKIER_DIRECTIONS.KILLED);
});

test("check score calculation", () => {
  initGameValues();

  const event = new KeyboardEvent("keydown", {
    keyCode: Constants.KEYS.DOWN,
    which: Constants.KEYS.DOWN,
  });

  skiGame.handleKeyDown(event);
  let randomMovements = Math.floor(Math.random() * 10 + 1);

  for (let i = 1; i <= randomMovements; i++) {
    skiGame.skier.move();
  }

  skiGame.calculateScore();

  expect(skiGame.score).toEqual(
    randomMovements * Constants.SKIER_STARTING_SPEED
  );
});
