export class Canvas {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  drawOffset = {
    x: 0,
    y: 0,
  };
  ctx = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.createScoreBoard();
    this.createCanvas();
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "skiCanvas";
    canvas.width = this.width * window.devicePixelRatio;
    canvas.height = this.height * window.devicePixelRatio;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";
    this.ctx = canvas.getContext("2d");
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    document.body.appendChild(canvas);
  }

  createScoreBoard() {
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "scoreBoard";
    scoreBoard.style.float = "right";
    scoreBoard.style.color = "red";
    scoreBoard.style.fontSize = "2em";
    scoreBoard.style.paddingRight = "1em";
    const scoreLabel = document.createElement("span");
    scoreLabel.innerHTML = "You score is: ";
    const score = document.createElement("span");
    score.id = "score";
    score.innerHTML = "0";
    scoreBoard.appendChild(scoreLabel);
    scoreBoard.appendChild(score);
    document.body.appendChild(scoreBoard);
  }

  clearCanvas() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  setDrawOffset(x, y) {
    this.drawOffset.x = x;
    this.drawOffset.y = y;
  }

  drawImage(image, x, y, width, height) {
    x -= this.drawOffset.x;
    y -= this.drawOffset.y;

    this.ctx.drawImage(image, x, y, width, height);
  }
}
