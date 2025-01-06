import Snake from "./snake.js";
import Food from "./food.js";
import Score from "./score.js";


class Game {
    constructor() {
      this.snake = new Snake(10, 10);
      this.food = new Food();
      this.score = new Score();
      this.rows = 10;
      this.columns = 10;
      this.intervalId = null;
    }
    draw() {
      const board = document.querySelector(".game_board");
  
      board.innerHTML = "";
  
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.columns; col++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
  
          for (let i = 0; i < this.snake.body.length; i++) {
            if (this.snake.body[i].x === col && this.snake.body[i].y === row) {
              cell.classList.add("snake");
            }
          }
  
          if (
            this.food.location.x === col &&
            this.food.location.y === row &&
            !this.food.isOnSnake(this.snake)
          ) {
            cell.classList.add("food");
          }
  
          board.appendChild(cell);
        }
      }
      this.score.updateDisplay();
    }
  
    reset() {
      const board = document.querySelector(".game_board");
      board.innerHTML = "";
  
      this.snake = new Snake(this.rows, this.columns);
      this.food = new Food();
      this.score.reset();
      this.draw();
  
      const btn = document.querySelector("button");
      btn.style.display = "block";
  
      btn.addEventListener("click", () => {
        btn.style.display = "none";
        console.log("Game reset!");
  
        clearInterval(this.intervalId);
  
        this.intervalId = setInterval(() => {
          this.update();
        }, 100);
      });
    }
  
    hitSelf() {
      const head = this.snake.body[0];
  
      for (let i = 1; i < this.snake.body.length; i++) {
        if (head.y === this.snake.body[i].y && head.x === this.snake.body[i].x) {
          return true;
        }
      }
      return false;
    }
    update() {
      this.snake.move();
  
      if (this.hitSelf()) {
        alert(this.score.currentScore);
        this.score.save();
        clearInterval(this.intervalId);
        this.reset();
        return;
      }

      this.draw();
  
      if (this.snake.eat(this.food)) {
        this.food.replace();
        console.log(this.score.currentScore);
        this.score.currentScore += 1;
        this.score.updateDisplay();
        this.score.save();
      }
    }


    
  }
  

  let game = new Game();
  game.draw();
  

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        game.snake.changeDirection("up");
        break;
      case "ArrowDown":
        game.snake.changeDirection("down");
        break;
      case "ArrowLeft":
        game.snake.changeDirection("left");
        break;
      case "ArrowRight":
        game.snake.changeDirection("right");
        break;
    }
  });
  game.draw();
  
  game.intervalId = setInterval(() => {
    game.update();
  }, 100);


export default Game;