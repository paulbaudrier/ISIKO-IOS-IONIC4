import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '../';
import { HomePage } from '../home/home';
import { AuthService } from '../core/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController
    ) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  ionViewWillLoad(){
    this.registerForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  tryRegister(value){
    this.authService.doRegister(value)
     .then(res => {
       this.errorMessage = "";
       this.PopupInscription();
     }, err => {
      this.alertinscription();
       this.successMessage = "";
     })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then((res) => {
      this.navCtrl.push(HomePage);
    }, (err) => {
      this.alertinscription();
    });
  }

  PopupInscription()
    {
      let alert = this.alertCtrl.create({
        title: 'Votre compte a bien été créé ! Merci de vous connecter !',
        buttons: ['OK']
      });
      alert.present();
    }
  

  goLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  alertinscription()
    {
      let alert = this.alertCtrl.create({
        title: 'Une erreur est survenue durant votre inscription sur ISIKO ! Merci de vérifier les champs renseignés.',
        buttons: ['OK']
      });
      alert.present();
    }




}
