import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  game.gameWidth = window.innerWidth;
  game.gameHeight = window.innerHeight;
}
resizeCanvas();

function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, game.gameWidth, game.gameHeight);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
