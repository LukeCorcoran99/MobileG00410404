import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {

  stopwatch: number = 0; //holds and displays the stopwatch timer
  timer: any = null; //stores setInterval function, resets to null when timer is stopped


  constructor() { }

  ngOnInit() {
  }

  start() {
    //This if statement starts the timer if it is not already running.
    // If the timer is null it will execute, and it sets the timer to the setInterval function 
    if (!this.timer) {
      this.timer = setInterval(() => {this.stopwatch++;}, 1000); //Function that increments the stopwatch value every 1000ms (1s)
  }
}

  pause() {
    // clears the interval function, sets timer to null
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    // Reset the stopwatch value to 0, cleard the interval, sets timer to null
    this.stopwatch = 0;
    clearInterval(this.timer);
    this.timer = null;
  }

}
