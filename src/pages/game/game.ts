import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { HighScorePage } from '../high-score/high-score';
import { Storage } from '../../../node_modules/@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',

})
export class GamePage {
  // instantiating variables
  yourScore: number = 0; // store player score value
  highScore: number; // store and retrieve high score value
  simon = new Array(); // an array used to enabled buttons

  timer; // timer used for counting down
  subscription; // subscription for timer/Observable
  tick = 1000; // 1000 milliseconds
  timeLimit = 15; // 15 seconds, timeLimit of the game

  // ids used to identify buttons
  id: Element; id2: Element; id3: Element; id4: Element;
  id5: Element; id6: Element; id7: Element; id8: Element;
  id9: Element; id10: Element; id11: Element; id12: Element;
  id13: Element; id14: Element; id15: Element; id16: Element;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  // when Game Page loads
  ionViewDidLoad() {
    // call grabID() to grab button ID and disable them
    this.grabID();

    // call startSimon() to create the array to enable the buttons
    this.simon = this.startSimon();

    // call enableSimon() to enable those buttons
    this.enableSimon(this.simon);

    // start the timer for the game
    this.startTimer();
  }

  startTimer() {
    // set timer to Observable timer
    this.timer = Observable.timer(0, this.tick);

    // create subscription for Observable timer
    this.subscription = this.timer.subscribe(x => {
      // logic to display countdown timer
      this.timer = this.timeLimit;
      this.timer -= x;

      // once countdown timer ends, 
      // unsubscribe to subscription,
      // call saveScore() to check current score with high score
      // then push those scores to High Score Page
      if (x == this.timeLimit) {
        this.subscription.unsubscribe();
        this.saveScore();
      }
    })
  }

  // random number generator that returns a random number
  randomNumber(): number {
    // returns a value between 1 and 16
    var min: number = 1;
    var max: number = 16;

    return Math.floor(Math.random() * max) + min;
  }

  // returns an array before the game starts
  startSimon(): Array<number> {
    // new array
    var simon = new Array();

    // call randomNumber() and push into array twice
    simon.push(this.randomNumber());
    simon.push(this.randomNumber());

    // check if the two numbers are the same
    // if they are, pop() the last one and push a new randomNumber()
    while (simon[0] == simon[1]) {
      simon.pop();
      simon.push(this.randomNumber());
    }

    // push another randomNumber() into array, 3 in total
    simon.push(this.randomNumber());

    // check new pushed randomNumber() against the other two
    // if any are the same, remove it and push new randomNumber()
    while (simon[0] == simon[2] || simon[1] == simon[2]) {
      simon.pop();
      simon.push(this.randomNumber());
    }

    // return an array with 3 randomNumbers() between 1 and 16
    return simon;
  }

  // used to check button clicked
  clicked(event) {
    // event.target.id grabs the id attribute of the button
    // store that id into buttonID
    var buttonID = event.target.id;
    
    // check buttonID against id button names
    // if they match, disable the button
    // add 1 to the score
    // call newSimon() to remove button clicked from array
    // and push new randomNumber()
    switch (buttonID) {
      case "btn1": {
        this.id.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn1");
        break;
      } case "btn2": {
        this.id2.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn2");
        break;
      } case "btn3": {
        this.id3.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn3");
        break;
      } case "btn4": {
        this.id4.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn4");
        break;
      } case "btn5": {
        this.id5.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn5");
        break;
      } case "btn6": {
        this.id6.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn6");
        break;
      } case "btn7": {
        this.id7.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn7");
        break;
      } case "btn8": {
        this.id8.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn8");
        break;
      } case "btn9": {
        this.id9.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn9");
        break;
      } case "btn10": {
        this.id10.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn10");
        break;
      } case "btn11": {
        this.id11.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn11");
        break;
      } case "btn12": {
        this.id12.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn12");
        break;
      } case "btn13": {
        this.id13.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn13");
        break;
      } case "btn14": {
        this.id14.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn14");
        break;
      } case "btn15": {
        this.id15.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn15");
        break;
      } case "btn16": {
        this.id16.setAttribute("disabled", "");
        this.yourScore += 1;
        this.newSimon("btn16");
        break;
      } default: {
        break;
      }
    }
  }

  // creates a new randomNumber() to be pushed into simon  
  newSimon(buttonID: string) {
    // take the buttonID string and remove "btn" from it
    // then parse that string into an int
    // ex: buttonID = "btn7", slice = "7", parseInt = 7
    var btn = parseInt(buttonID.slice(3));

    // for each item in simon array
    for (let simonRan of this.simon) {

      // if there's a match between btn and item in simon array
      // remove that element from the array
      if (simonRan == btn) {
        this.simon.splice(this.simon.indexOf(btn), 1)
      }
    }

    // push new randomNumber() and make sure it doesn't match any of the other ones
    this.simon.push(this.randomNumber());
    while (this.simon[0] == this.simon[2] || this.simon[1] == this.simon[2]) {
      this.simon.pop();
      this.simon.push(this.randomNumber());
    }

    // call enableSimon() to enable new button
    this.enableSimon(this.simon);
  }

  // enableSimon enables the buttons to be clicked
  enableSimon(array) {
    // searches through array and if the buttonID matches
    // enable that button
    for (let btnID of array) {
      switch (btnID) {
        case 1: {
          this.id.removeAttribute("disabled");
          break;
        } case 2: {
          this.id2.removeAttribute("disabled")
          break;
        } case 3: {
          this.id3.removeAttribute("disabled")
          break;
        } case 4: {
          this.id4.removeAttribute("disabled")
          break;
        } case 5: {
          this.id5.removeAttribute("disabled")
          break;
        } case 6: {
          this.id6.removeAttribute("disabled")
          break;
        } case 7: {
          this.id7.removeAttribute("disabled")
          break;
        } case 8: {
          this.id8.removeAttribute("disabled")
          break;
        } case 9: {
          this.id9.removeAttribute("disabled")
          break;
        } case 10: {
          this.id10.removeAttribute("disabled")
          break;
        } case 11: {
          this.id11.removeAttribute("disabled")
          break;
        } case 12: {
          this.id12.removeAttribute("disabled")
          break;
        } case 13: {
          this.id13.removeAttribute("disabled")
          break;
        } case 14: {
          this.id14.removeAttribute("disabled")
          break;
        } case 15: {
          this.id15.removeAttribute("disabled")
          break;
        } case 16: {
          this.id16.removeAttribute("disabled")
          break;
        } default: {
          break;
        }
      }
    }
  }

  //grabs ID for element buttons and disables them
  grabID() {
    // grab and set buttons to ids
    this.id = document.getElementById("btn1");
    this.id2 = document.getElementById("btn2");
    this.id3 = document.getElementById("btn3");
    this.id4 = document.getElementById("btn4");
    this.id5 = document.getElementById("btn5");
    this.id6 = document.getElementById("btn6");
    this.id7 = document.getElementById("btn7");
    this.id8 = document.getElementById("btn8");
    this.id9 = document.getElementById("btn9");
    this.id10 = document.getElementById("btn10");
    this.id11 = document.getElementById("btn11");
    this.id12 = document.getElementById("btn12");
    this.id13 = document.getElementById("btn13");
    this.id14 = document.getElementById("btn14");
    this.id15 = document.getElementById("btn15");
    this.id16 = document.getElementById("btn16");

    // set all buttons to disabled
    this.id.setAttribute("disabled", "");
    this.id2.setAttribute("disabled", "");
    this.id3.setAttribute("disabled", "");
    this.id4.setAttribute("disabled", "");
    this.id5.setAttribute("disabled", "");
    this.id6.setAttribute("disabled", "");
    this.id7.setAttribute("disabled", "");
    this.id8.setAttribute("disabled", "");
    this.id9.setAttribute("disabled", "");
    this.id10.setAttribute("disabled", "");
    this.id11.setAttribute("disabled", "");
    this.id12.setAttribute("disabled", "");
    this.id13.setAttribute("disabled", "");
    this.id14.setAttribute("disabled", "");
    this.id15.setAttribute("disabled", "");
    this.id16.setAttribute("disabled", "");
  }

  // saveScore() is used to check current score against high score
  // uses Storage cordova plugin to save and retrieve high score
  // through the use of a key ("valued pair")
  // pushes the data to the High Score Page
  saveScore() {
    this.storage.get("highScore").then((highScore) => {
      if(this.yourScore > highScore) {
        this.storage.set("highScore", this.yourScore);
      }
      this.navCtrl.setRoot(HighScorePage, {
        data: this.yourScore, highScore
      }, {animate: true, direction: "forward"});
    })
  }

  // quit game
  onGiveUp() {
    // stop timer subscription
    this.subscription.unsubscribe();

    // call saveScore to push current score and high score
    // to High Score Page
    this.saveScore();   
  }
}
