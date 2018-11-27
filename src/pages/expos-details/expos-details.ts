import { AllcommentPage } from './../allcomment/allcomment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { AlertController } from 'ionic-angular';
import { AddcommentPage } from './../addcomment/addcomment';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';


/**
 * Generated class for the ExposDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expos-details',
  templateUrl: 'expos-details.html',
})
export class ExposDetailsPage {
  userID: FirebaseUserModel = new FirebaseUserModel();
  UserID: any;
  url: string;
  value:any;
  ExpoUniqueID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private inAppBrowser: InAppBrowser,private alertCtrl: AlertController, public menuCtrl: MenuController,public userService: UserService,
    public authService: AuthService) {
    menuCtrl.swipeEnable(false);
    this.value = navParams.get('user');
    this.getUsers();
    this.getExibitionsScript();
    this.getComment();
  }
  users: any;
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log("USERS : " + this.users);
    });
  }

  comments: any;
  getComment() {
    this.restProvider.getComment()
    .then(data => {
      this.comments = data;
      console.log("COMMMENT :" + this.comments);
    });
  }

  backexpos()
  {
    this.navCtrl.push(HomePage);
  }

  listoeuvres()
  {
    let alert = this.alertCtrl.create({
      title: 'Bientôt Disponible',
      subTitle: 'Merci de revenir plus tard !',
      buttons: ['OK']
    });
    alert.present();
  }

  btn_txt = 'Ajouter à mes favoris';
  addtomyfavorit(AddUserFavoritData, DeleteUserFavoritData)
  {
    AddUserFavoritData= {
      "id_Expo":[this.value],"id_Users":[this.UserID.uid]
    };
    // DeleteUserFavoritData= {

    // };
    // DeleteUserFavoritData= {
    //   [this.comments.]
    // };
    // commentData= {
    //   id_Expo: 999999,
    //   id_Users: 9999999
    // };

    if (this.btn_txt == 'Ajouter à mes favoris') {
      this.restProvider.postUerfavorit(AddUserFavoritData);
      this.popupaddtomyfavorit();
      this.btn_txt = 'Supprimé de mes favoris';
   }
    else {
      if (this.btn_txt == 'Supprimé de mes favoris') {
          this.deletetomyfavorit(DeleteUserFavoritData);
          this.popupdeletetomyfavorit();
          this.btn_txt = 'Ajouter à mes favoris';
     }
   }
  }

  deletetomyfavorit(DeleteUserFavoritData)
    {
      this.restProvider.getUserFavorit()
      .then(data => {
        this.ExpoUniqueID = data;
        console.log("ID UNIQUE EXPO API : " + this.ExpoUniqueID);
      });
      DeleteUserFavoritData= {
        // this.ExpoUniqueID
      };
      this.restProvider.deleteUserfavorit(DeleteUserFavoritData)
    }


  popupdeletetomyfavorit()
  {
    let alert = this.alertCtrl.create({
      title: 'Exposition supprimé de vos favoris !',
      subTitle: 'Exposition supprimé de vos favoris',
      buttons: ['OK']
    });
    alert.present();
  }

  popupaddtomyfavorit()
  {

    let alert = this.alertCtrl.create({
      title: 'Exposition ajouter à vos favoris !',
      subTitle: 'Exposition ajouter à vos favoris',
      buttons: ['OK']
    });
    alert.present();
  }

  exib: any;
  getExibitionsScript() {
    this.restProvider.getExibitionsScript()
    .then(data => {
      this.exib = data;
      console.log("MY EXIB : " + this.exib);
    });
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    // Opening a URL and returning an InAppBrowserObject

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

  addcomment(id, uid)
  {
    this.navCtrl.push("AddcommentPage", {expos:id});
  }

  allcomment(id)
  {
    this.navCtrl.push("AllcommentPage", {expos:id});
  }

  ionViewDidLoad() {
    this.userService.getCurrentUser()
    .then(UserID => {
      this.UserID = UserID;
      console.log("USER IDDDDD" + UserID.uid);
    }, err => console.log(err))
    console.log("MY VALUE :" + this.value);
    console.log('ionViewDidLoad ExposDetailsPage');
  }

}