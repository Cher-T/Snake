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


  export default Score;