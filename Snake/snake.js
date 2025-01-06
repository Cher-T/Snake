import Food from "./food.js";


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


export default Snake;