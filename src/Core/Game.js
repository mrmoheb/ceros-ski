import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from "./Canvas";
import { Skier } from "../Entities/Skier";
import { Rhino } from "../Entities/Rhino";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from "./Utils";

export class Game {
  gameWindow = null;

  constructor() {
    this.assetManager = new AssetManager();
    this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
    this.skier = new Skier(0, Constants.INITIAL_Y_SKIER_START);
    this.rhino = new Rhino(0, 0);
    this.rhinoShouldAppearFlag = false;

    this.score = 0;

    this.obstacleManager = new ObstacleManager();

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  init() {
    this.obstacleManager.placeInitialObstacles();
  }

  async load() {
    await this.assetManager.loadAssets(Constants.ASSETS);
  }

  run() {
    this.canvas.clearCanvas();
    this.updateGameWindow();
    this.drawGameWindow();
    requestAnimationFrame(this.run.bind(this));
  }

  shouldTheRhinoAppearNow() {
    if (
      this.skier.y > Constants.DISTANCE_THE_RHINO_SHOULD_APPEAR &&
      !this.rhinoShouldAppearFlag
    ) {
      this.rhino.y = this.skier.y - Constants.DISTANCE_BETWEEN_RHINO_AND_SKIER;
      this.rhinoShouldAppearFlag = true;
      console.log(this.skier.y);
    }
  }

  checkIfSkierIsJumping() {
    if (this.skier.direction === Constants.SKIER_DIRECTIONS.JUMP) {
      this.skier.setDirection(Constants.SKIER_DIRECTIONS.AFTER_JUMP);
      this.skier.y += this.skier.speed + 4;
    } else if (this.skier.direction === Constants.SKIER_DIRECTIONS.AFTER_JUMP) {
      this.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }
  }
  checkIfRhinoReachedSkier() {
    if (this.rhino.y > this.skier.y) {
      this.rhino.setDirection(Constants.SKIER_DIRECTIONS.KILLED);
      this.skier.setDirection(Constants.SKIER_DIRECTIONS.KILLED);
    }
  }
  calculateScore() {
    this.score += Math.ceil(this.skier.y) - Constants.INITIAL_Y_SKIER_START;
  }

  updateGameWindow() {
    if (this.skier.direction !== Constants.SKIER_DIRECTIONS.KILLED) {
      this.skier.move();
      this.rhino.move();
      const previousGameWindow = this.gameWindow;
      this.calculateGameWindow();
      this.obstacleManager.placeNewObstacle(
        this.gameWindow,
        previousGameWindow
      );
      this.shouldTheRhinoAppearNow();
      this.checkIfSkierIsJumping();
      if (
        this.skier.checkIfSkierHitObstacle(
          this.obstacleManager,
          this.assetManager
        )
      ) {
        this.rhino.x = this.skier.x;
        this.checkIfRhinoReachedSkier();
      }
      this.calculateScore();
    }
  }

  drawGameWindow() {
    this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

    this.skier.draw(this.canvas, this.assetManager);
    this.rhino.draw(this.canvas, this.assetManager);
    this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
  }

  calculateGameWindow() {
    const skierPosition = this.skier.getPosition();
    const left = skierPosition.x - Constants.GAME_WIDTH / 2;
    const top = skierPosition.y - Constants.GAME_HEIGHT / 2;

    this.gameWindow = new Rect(
      left,
      top,
      left + Constants.GAME_WIDTH,
      top + Constants.GAME_HEIGHT
    );
  }

  handleKeyDown(event) {
    if (this.skier.direction === Constants.SKIER_DIRECTIONS.KILLED) {
      event.preventDefault();
      return false;
    }
    switch (event.which) {
      case Constants.KEYS.LEFT:
        this.skier.turnLeft();
        this.rhino.turnLeft();
        event.preventDefault();
        break;
      case Constants.KEYS.RIGHT:
        this.skier.turnRight();
        this.rhino.turnRight();
        event.preventDefault();
        break;
      case Constants.KEYS.UP:
        this.skier.turnUp();
        this.rhino.turnUp();
        event.preventDefault();
        break;
      case Constants.KEYS.DOWN:
        this.skier.turnDown();
        this.rhino.turnDown();
        event.preventDefault();
        break;
      case Constants.KEYS.JUMP:
        this.skier.jump();
        event.preventDefault();
        break;
    }
  }
}
