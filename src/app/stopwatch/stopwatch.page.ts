import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {


  stopwatch = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }; // holds the stopwatch timer, to be formatted later

  timer: any = null; // stores setInterval function, resets to null when timer is stopped

  constructor() { }

  ngOnInit() {}


  start() {
       //This if statement starts the timer if it is not already running.
    // If the timer is null it will execute, and it sets the timer to the setInterval function 
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.stopwatch.milliseconds++;
        //Resets back to 0 once it reaches 60
        if (this.stopwatch.milliseconds === 100) {
          this.stopwatch.seconds++;
          this.stopwatch.milliseconds = 0;
        }
        if (this.stopwatch.seconds === 60) {
          this.stopwatch.minutes++;
          this.stopwatch.seconds = 0;
        }
        if (this.stopwatch.minutes === 60) {
          this.stopwatch.hours++;
          this.stopwatch.minutes = 0;
        }
      }, 10);
    }
  }

  // clears the interval function, sets timer to null
  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  // Resets all stopwatch values to 0, cleard the interval, sets timer to null
  reset() {
    this.stopwatch = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
    clearInterval(this.timer);
    this.timer = null;
  }

  //formats using the padStart function
  //Time is defined as a number in order for it to take stopwatch as argument
  //This then converts the arguments to a string and outputs it formatted
  formatTime(time: number): string {
  return time.toString().padStart(2, '0');
  }


  //Uses formatTime function to format the milliseconds, 
  //seconds, minutes and hours, and outputs to html formatted
  stopwatchFormat(): string {
    let hours = this.formatTime(this.stopwatch.hours);
    let minutes = this.formatTime(this.stopwatch.minutes);
    let seconds = this.formatTime(this.stopwatch.seconds);
    let milliseconds = this.formatTime(this.stopwatch.milliseconds);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }


}
