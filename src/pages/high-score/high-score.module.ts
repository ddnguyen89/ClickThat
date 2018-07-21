import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighScorePage } from './high-score';

@NgModule({
  declarations: [
    HighScorePage,
  ],
  imports: [
    IonicPageModule.forChild(HighScorePage),
  ],
})
export class HighScorePageModule {}
