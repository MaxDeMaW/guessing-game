class GuessingGame {
    constructor() { 
    this.minValue = 0;
    this.maxValue = 0;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return Math.ceil((this.maxValue + this.minValue) / 2);
    }

    lower() {
        this.maxValue = Math.ceil((this.maxValue + this.minValue) / 2);
    }

    greater() {
        this.minValue = Math.ceil((this.maxValue + this.minValue) / 2);
    }
}

module.exports = GuessingGame;
