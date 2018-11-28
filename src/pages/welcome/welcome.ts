import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

// ALERT POP UP IMPORT
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Config, Nav, Platform, ModalController } from 'ionic-angular';

import { UserPage } from '../user/user';
import { AuthService } from '../core/auth.service';
import { SplashscreenPage } from '../splashscreen/splashscreen';
import { timer } from 'rxjs/observable/timer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 *
 *
*/





@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  loginForm: FormGroup;
  errorMessage: string = '';
  cpt = 0;
  splashcpt = 0;
  showSplash:true;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,public authService: AuthService,
    public formBuilder: FormBuilder,public menuCtrl: MenuController, public smartAudio: SmartAudioProvider,private statusBar: StatusBar, splashScreen: SplashScreen,modalCtrl: ModalController,private nativeAudio: NativeAudio, public navParams: NavParams) {
      this.statusBar.styleDefault();
      menuCtrl.swipeEnable(false);
      this.menuCtrl.enable(false);
      this.splashcpt = navParams.get('counter');
      if (this.splashcpt != 1)
      {
        this.showSplash = true;
        timer(2500).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
      }

      console.log("AVANT:" + this.splashcpt);
      // if (this.cpt = 0)
      // {
      //   this.showSplash = true;
      //   smartAudio.preload('opening', 'assets/img/isiko-opening.mp3');
      //   this.Netflix();
      //   this.Netflixsound();
      //   timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
      //   this.cpt++;
      //   console.log("APRESS:" + this.cpt);
      // }
      // if (this.cpt = 1)
      // {
      //   console.log("IF CPT = 1:" + this.cpt);
      //   this.showSplash = false;
      //   this.cpt++;
      // }
    }

  login() {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.navCtrl.push(SignupPage);
  }



  tryLogin(value){
    this.menuCtrl.swipeEnable(false);
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.navCtrl.push(HomePage);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  tryFacebookLogin(){
    this.menuCtrl.swipeEnable(false);
    this.authService.doFacebookLogin()
    .then((res) => {
      this.navCtrl.push(HomePage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  tryGoogleLogin(){
    this.menuCtrl.swipeEnable(false);
    this.authService.doGoogleLogin()
    .then((res) => {
      this.navCtrl.push(HomePage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  Netflix()
  {
    this.smartAudio.play('opening');
  }

  Netflixsound()
  {
    this.smartAudio.play('opening');
  }

  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
  }

}
