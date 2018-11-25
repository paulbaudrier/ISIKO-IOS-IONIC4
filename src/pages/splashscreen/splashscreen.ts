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
    this.Netflixsound();
  }

  
  Netflixsound()
  {
    this.smartAudio.play('opening');
    this.nativeAudio.preloadSimple('uniqueId1', 'src/assets/img/isiko-opening.mp3');
    this.nativeAudio.preloadComplex('uniqueId2', 'src/assets/img/isiko-opening.mp3', 1, 1, 0);

    this.nativeAudio.play('uniqueId1');

// can optionally pass a callback to be called when the file is done playing
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

    this.nativeAudio.loop('uniqueId2');

    this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6);

    this.nativeAudio.stop('uniqueId1');

    this.nativeAudio.unload('uniqueId1');
  }

  ionViewDidLoad() {
    this.Netflixsound();
    setTimeout(() => this.splash = false, 4000);
    console.log('ionViewDidLoad SplashscreenPage');
  }

}
