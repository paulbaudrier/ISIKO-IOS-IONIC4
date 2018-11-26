import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { timer } from 'rxjs/observable/timer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {
  splash = true;
  showSplash = true; // <-- show animation
  secondPage = WelcomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, public smartAudio: SmartAudioProvider,splashScreen: SplashScreen) {
    this.showSplash = true;
    timer(2500).subscribe(() => this.showSplash = false)
  }

  back()
  {
    this.navCtrl.push(WelcomePage);
  }
  
  Netflixsound()
  {
    this.smartAudio.play('opening');
  }

  GobacktoHome()
    {
      this.navCtrl.push(WelcomePage);
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashscreenPage');
  }

}
