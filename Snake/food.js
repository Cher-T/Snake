export class Food {
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


export default Food;