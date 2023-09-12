class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.stopTimerNow = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let display = value.toString();
    if (value < 10) {
      display = "0" + display.slice(0, 1);
    }
    return display;
  }

  stop() {
    clearInterval(this.stopTimerNow);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const splitSec = this.computeTwoDigitNumber(this.getSeconds());
    const splitMin = this.computeTwoDigitNumber(this.getMinutes());

    return `${splitMin}:${splitSec}`;
  }
}
