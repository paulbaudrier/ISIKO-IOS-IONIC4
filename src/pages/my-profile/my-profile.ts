import { WelcomePage } from './../welcome/welcome';
import { MyFavoritesPage } from './../my-favorites/my-favorites';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';
import { MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * <!--  <ion-navbar hideBackButton="true"> -->
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  showSplash = false; // <-- show animation
  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,public userService: UserService,
    public authService: AuthService, public menuCtrl: MenuController,splashScreen: SplashScreen) {
      this.showSplash = false;
    // this.getProfile();
  }

  users: any;

  ionViewWillLoad(){
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
      console.log("USER IDDDDD" + user.name);
    }, err => console.log(err))
  }
  


  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.push(WelcomePage);
      this.menuCtrl.enable(false);
    }, (error) => {
      console.log("Logout error", error);
    });
  }




  // getProfile() {
  //   this.restProvider.getProfile()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

}
