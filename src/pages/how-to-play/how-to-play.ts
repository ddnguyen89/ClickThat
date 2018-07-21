import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-how-to-play',
  templateUrl: 'how-to-play.html',
})
export class HowToPlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPlayPage');
  }

  onAbout() {
    this.navCtrl.push(AboutPage);
  }

  onHome() {
    this.navCtrl.pop();
  }

}
