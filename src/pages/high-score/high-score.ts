import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { HomePage } from '../home/home';
import { Storage } from '../../../node_modules/@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-high-score',
  templateUrl: 'high-score.html',
})
export class HighScorePage {
  yourScore: number;
  highScore;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
      this.yourScore = navParams.get("data");  
      this.storage.get("highScore").then((data) => {
        this.highScore = data;  
      });
  }

  onPlayAgain() {
    this.navCtrl.setRoot(GamePage, {}, {
      animate: true, direction: "forward"});
  }

  onMenu() {
    this.navCtrl.setRoot(HomePage, {}, {
      animate: true, direction: "forward"});
  }

  onResetScore() {
    this.yourScore = 0;
    this.storage.remove('highScore');
    this.storage.get("highScore").then((data) => {
      this.highScore = data;  
    });
  }
}
