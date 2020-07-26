import "babel-polyfill";
import "jest-canvas-mock";
import { Game } from "./Game.js";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const skiGame = new Game();

function tryFunc(callback) {
  callback();
}

test("Check the left key is working after crashing", async () => {
  skiGame.skier.x = 0;
  skiGame.skier.y = 650;
  skiGame.skier.setDirection(0);
  const event = new KeyboardEvent("keydown", { keyCode: 37, which: 37 });
  skiGame.handleKeyDown(event);
  expect(skiGame.skier.direction).toEqual(1);
});
