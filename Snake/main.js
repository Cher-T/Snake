import Game from "./game.js";
import Snake from "./snake.js";
import Food from "./food.js";
import Score from "./score.js";



class Main {
  constructor() {
    this.game = new Game();
    this.snake = new Snake();
    this.food = new Food();
    this.score = new Score();
  }
}


export default Main;

/*
class Snake {
    constructor(rows, cols) {
      this.food = new Food();
      this.rows = rows;
      this.cols = cols;
      this.initialize();
    }
  
    initialize() {
      this.body = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
      ];
      this.direction = "right";
    }
  
    move() {
      const head = { ...this.body[0] };
  
      switch (this.direction) {
        case "up":
          head.y --;
          break;
        case "down":
          head.y ++;
          break;
        case "left":
          head.x --;
          break;
        case "right":
          head.x ++;
          break;
      }

      head.x = (head.x + this.cols) % this.cols;
      head.y = (head.y + this.rows) % this.rows;
  
      this.body.unshift(head);
  
      if (head.x === this.food.location.x && head.y === this.food.location.y) {
        this.food.replace();
      } else {
        this.body.pop();
      }
    }
  

    eat(food) {
      const head = this.body[0];
      if (head.x === food.location.x && head.y === food.location.y) {
        this.body.push({ ...this.body[this.body.length - 1] });
        return true;
      }
      return false;
    }
  
    changeDirection(newDirection) {
      if (["up", "down", "left", "right"].includes(newDirection)) {
        this.direction = newDirection;
      }
    }
  }
  
  
  class Score {
    constructor() {
      this.currentScore = 0;
      this.highScore = localStorage.getItem("highScore") || 0;
    }
  
    save() {
      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        localStorage.setItem("highScore", this.highScore);
      }
    }
  
    updateDisplay() {
      const currentScoreElement = document.getElementById("current_score");
      const highScoreElement = document.getElementById("high_score");
  
      currentScoreElement.innerText = `Current Score: ${this.currentScore}`;
      highScoreElement.innerText = `High Score: ${this.highScore}`;
    }
    reset() {
      this.currentScore = 0;
    }
  }
  
  
  class Food {
    constructor() {
      this.location = this.generateLocation();
    }
    generateLocation() {
      return {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
      };
    }
    replace() {
      this.location = this.generateLocation();
    }
    isOnSnake(snake) {
      for (const segment of snake.body) {
        if (segment.x === this.location.x && segment.y === this.location.y) {
          return true;
        }
      }
      return false;
    }
  }
  
  
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


  */