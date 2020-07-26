import "babel-polyfill";
import "jest-canvas-mock";
import { Game } from "./Game.js";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const skiGame = new Game();
test("Check left key pressed", async () => {
  skiGame.drawGameWindow();
  skiGame.obstacleManager.placeNewObstacle();
});
