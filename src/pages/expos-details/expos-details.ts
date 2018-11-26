import { AllcommentPage } from './../allcomment/allcomment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { AlertController } from 'ionic-angular';
import { AddcommentPage } from './../addcomment/addcomment';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';

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
  url: string;
  value:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private inAppBrowser: InAppBrowser,private alertCtrl: AlertController, public menuCtrl: MenuController) {
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
  addtomyfavorit(commentData)
  {
    commentData= {
      id_Expo: 999999,
      id_Users: 9999999
    };
    this.restProvider.postUerfavorit(commentData);
    if (this.btn_txt == 'Ajouter à mes favoris') {
      this.popupaddtomyfavorit();
      this.btn_txt = 'Supprimé de mes favoris';
   } 
    else {
      console.log('go to next page');
   }
    // this.restProvider.postUerfavorit(commentData)
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

    // A UPDATE user.url_visite pas bon
    // const browser = this.inAppBrowser.create('{{user.url_visite}}', '_self', options);
  }

  deletecomment()
    {
      this.restProvider.deleteComment();
    }

  deletefavorit()
    {
      this.restProvider.deleteUserfavorit();
    }



  addcomment()
  {
    this.navCtrl.push('AddcommentPage');
  }

  allcomment(id)
  {
    this.navCtrl.push('AllcommentPage', {expos:id});
  }

  // LECTEUR VISITE LINK ALGO
  //

  // lecteuralgo(url: string)
  // {
  //   const options: InAppBrowserOptions = {
  //     zoom: 'no'
  //   }
  //   IF ID = PREMIERE_EXPO
  //   const browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
  //   IF ID = DEUXIEME_EXPO
  //   const browser = this.inAppBrowser.create('http://player.isiko.io/MobileVersion/?exhibition=Montagnes', '_self', options);
  //   IF ID = TROISIEME_EXPO
  //   const browser = this.inAppBrowser.create('http://player.isiko.io/MobileVersion/?exhibition=Alearand', '_self', options);

  // }

  ionViewDidLoad() {

    console.log("MY VALUE :" + this.value);
    console.log('ionViewDidLoad ExposDetailsPage');
  }

}