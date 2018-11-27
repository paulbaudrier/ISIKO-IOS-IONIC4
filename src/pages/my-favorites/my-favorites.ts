import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';


/**
 * Generated class for the MyFavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html',
})
export class MyFavoritesPage {
  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public userService: UserService,
    public authService: AuthService) {
    this.getUserFavorit();
  }

  expos: any;
  getExposImg() {
    this.restProvider.getUsers()
    .then(dataexpo => {
      this.expos = dataexpo;

    console.log("laaaaaaa expo : "+ this.expos);
    });
  }

  ionViewWillLoad(){
    this.getExposImg();
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
      console.log("UID" + user.uid);
    }, err => console.log(err))
  }

  favorits: any;
  getUserFavorit() {
    this.restProvider.getUserFavorit()
    .then(data => {
      this.favorits = data;
      console.log(this.favorits);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoritesPage');
  }

}
