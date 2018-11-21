import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUserFavorit();
  }

  users: any;
  getUserFavorit() {
    this.restProvider.getUserFavorit()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoritesPage');
  }

}
