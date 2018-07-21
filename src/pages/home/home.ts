import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';
import { HighScorePage } from '../high-score/high-score';
import { HowToPlayPage } from '../how-to-play/how-to-play';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage: any = HomePage;

  constructor(public navCtrl: NavController) {
  }

  onPlay() {
    this.navCtrl.push(GamePage);
  }

  onHighScore() {
    this.navCtrl.push(HighScorePage);
  }

  onHowToPlay() {
    this.navCtrl.push(HowToPlayPage);
  }

}
