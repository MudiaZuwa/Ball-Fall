import { detectCollision } from "./detectCollision.js";

export default class extraHealth {
  constructor(game, positionX) {
    const healthImage = new Image();
    healthImage.src = "./assets/images/pngwing.com.png";
    this.image = healthImage;
    this.height = 18;
    this.width = 18;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.speed = -4;
    this.position = {
      x: positionX,
      y: game.gameHeight - this.height,
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.y += this.speed;

    if (detectCollision(this.game.ball, this)) {
      if (this.game.lives < 5) {
        this.markedForDeletion = true;
        this.game.lives += 1;
        document.getElementById("lives").innerText = this.game.lives;
      }
    }
    if (this.position.y + this.height < 0) {
      this.markedForDeletion = true;
    }
  }
}
