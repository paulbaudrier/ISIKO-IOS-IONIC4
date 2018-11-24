import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { User } from '../../providers';
import { MainPage } from '../';
import { HomePage } from '../home/home';

import { UserPage } from '../user/user';
import { AuthService } from '../core/auth.service';
import { MenuController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;
  errorMessage: string = '';
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public menuCtrl: MenuController
    ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  ionViewWillLoad(){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  tryLogin(value){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.navCtrl.push(HomePage);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  tryGoogleLogin(){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.authService.doGoogleLogin()
    .then((res) => {
      this.navCtrl.push(HomePage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  goRegisterPage(){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
    this.navCtrl.push(SignupPage);
  }


  // COMPARE LOGIN INFO 



  //

  // Attempt to login in through our User service
  doLogin() {
      this.menuCtrl.swipeEnable(false);
      this.menuCtrl.enable(false);
      this.navCtrl.push(HomePage);
  }
}
