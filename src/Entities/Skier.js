import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Skier extends Entity {
  assetName = Constants.SKIER_DOWN;

  direction = Constants.SKIER_DIRECTIONS.DOWN;
  speed = Constants.SKIER_STARTING_SPEED;
  jumpFlag = 0;

  constructor(x, y) {
    super(x, y);
  }

  setDirection(direction) {
    this.direction = direction;
    this.updateAsset();
  }

  updateAsset() {
    this.assetName = Constants.SKIER_DIRECTION_ASSET[this.direction];
  }

  move() {
    switch (this.direction) {
      case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
        this.moveSkierLeftDown();
        break;
      case Constants.SKIER_DIRECTIONS.DOWN:
        this.moveSkierDown();
        break;
      case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
        this.moveSkierRightDown();
        break;
    }
  }

  moveSkierLeft() {
    this.x -= Constants.SKIER_STARTING_SPEED;
  }

  moveSkierLeftDown() {
    this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  moveSkierDown() {
    this.y += this.speed;
  }

  moveSkierRightDown() {
    this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  moveSkierRight() {
    this.x += Constants.SKIER_STARTING_SPEED;
  }

  moveSkierUp() {
    this.y -= Constants.SKIER_STARTING_SPEED;
  }

  turnLeft() {
    if (this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
      this.moveSkierLeft();
    } else {
      if (this.direction) {
        this.setDirection(this.direction - 1);
      } else {
        this.setDirection(1);
        this.moveSkierUp();
      }
    }
  }

  turnRight() {
    if (this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
      this.moveSkierRight();
    } else {
      this.setDirection(this.direction + 1);
    }
  }

  turnUp() {
    if (
      this.direction === Constants.SKIER_DIRECTIONS.LEFT ||
      this.direction === Constants.SKIER_DIRECTIONS.RIGHT
    ) {
      this.moveSkierUp();
    }
  }

  turnDown() {
    this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
  }

  //Function where the skier will jump when Space bar is pressed or skier hits a jump ramp.
  jump() {
    this.y += this.speed + 1;
    this.setDirection(this.jumpFlag);
  }

  checkIfSkierHitObstacle(obstacleManager, assetManager) {
    const asset = assetManager.getAsset(this.assetName);
    console.log(asset);
    const skierBounds = new Rect(
      this.x - asset.width / 2,
      this.y - asset.height / 2,
      this.x + asset.width / 2,
      this.y - asset.height / 4
    );

    const collision = obstacleManager.getObstacles().find((obstacle) => {
      const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
      const obstaclePosition = obstacle.getPosition();
      const obstacleBounds = new Rect(
        obstaclePosition.x - obstacleAsset.width / 2,
        obstaclePosition.y - obstacleAsset.height / 2,
        obstaclePosition.x + obstacleAsset.width / 2,
        obstaclePosition.y
      );

      //When a skier hits an obstacle of type rock and the skier status was juming over it , the skier will not crash.
      if (
        this.jumpFlag > 5 &&
        (obstacle.getAssetName() === "rock1" ||
          obstacle.getAssetName() === "rock2")
      ) {
        return false;
      }
      //If the obstacle type is jumpramp the skier will jump instead of crashing
      else if (obstacle.getAssetName() === "jumpramp") {
        if (intersectTwoRects(skierBounds, obstacleBounds)) {
          this.jumpFlag = 6;
          this.jump();
          return false;
        }
      }
      return intersectTwoRects(skierBounds, obstacleBounds);
    });

    if (collision) {
      this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
      return true;
    } else {
      return false;
    }
  }
}
