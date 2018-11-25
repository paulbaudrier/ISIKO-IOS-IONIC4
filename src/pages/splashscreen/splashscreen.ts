import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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
  secondPage = WelcomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, public smartAudio: SmartAudioProvider) {
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
