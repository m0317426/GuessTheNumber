import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public number = 0;
  public guessedNumber = 0;
  public numberOfGuesses = 0;
  public result = '';
  //Timer  https://stackoverflow.com/questions/50455347/how-to-do-a-timer-in-angular-5
  public timeSpend: number = 0;
  interval;


  constructor() { }

  ngOnInit(): void {
  }

  guess(value: number) {

    this.numberOfGuesses++;
    console.log("het nummer is: " + this.number)

    switch (true) {
      case (value <= 0):
        return this.result = "number needs to be bigger then 1"
      case (value > 1000):
        return this.result = "number needs to be smaller then 1000!"
      case (value < this.number):
        return this.result = "think bigger..."
      case (value > this.number):
        return this.result = "you overshot the target."
      case (value == this.number):
        this.pauseTimer();
        return this.result = "you got it!"
    }
  }
  setGetal() {
    //this.number = Math.floor(Math.random()*1000)+1; 
    this.number = _.random(1, 1000);
    this.numberOfGuesses = 0;
    console.log("het nummer is: " + this.number)
    this.startTimer();
  }

  reset() {
    this.pauseTimer();
    this.setGetal();
    this.timeSpend = 0;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timeSpend++;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}


