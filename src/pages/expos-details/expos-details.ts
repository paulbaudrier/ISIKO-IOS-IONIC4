import { AllcommentPage } from './../allcomment/allcomment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { AlertController } from 'ionic-angular';
import { AddcommentPage } from './../addcomment/addcomment';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private inAppBrowser: InAppBrowser,private alertCtrl: AlertController) {
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

  btn_txt = 'Ajouter à mes favoris';
  addtomyfavorit(commentData)
  {
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
    const browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
  }

  addcomment()
  {
    this.navCtrl.push('AddcommentPage');
  }

  allcomment()
  {
    this.navCtrl.push('AllcommentPage');
  }

  ionViewDidLoad() {

    console.log("MY VALUE :" + this.value);
    console.log('ionViewDidLoad ExposDetailsPage');
  }

}