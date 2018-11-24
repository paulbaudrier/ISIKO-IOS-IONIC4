import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

// ALERT POP UP IMPORT
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { UserPage } from '../user/user';
import { AuthService } from '../core/auth.service';

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

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,public authService: AuthService,
    public formBuilder: FormBuilder,public menuCtrl: MenuController) { 
      menuCtrl.swipeEnable(false);
      this.menuCtrl.enable(false);
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

  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
  }

}


