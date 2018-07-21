import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { HighScorePage } from '../pages/high-score/high-score';
import { HowToPlayPage } from '../pages/how-to-play/how-to-play';
import { AboutPage } from '../pages/about/about';
import { ScreenOrientation } from '../../node_modules/@ionic-native/screen-orientation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    HighScorePage,
    HowToPlayPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    HighScorePage,
    HowToPlayPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
