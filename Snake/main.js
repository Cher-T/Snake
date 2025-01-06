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