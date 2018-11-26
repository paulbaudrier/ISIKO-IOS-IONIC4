import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AddcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcomment',
  templateUrl: 'addcomment.html',
})
export class AddcommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public restProvider: RestProvider) {
  }

  // POST COMMENT
  DoAddComment()
  {
    this.restProvider.addComment();
  }

  // ALERT POP UP
  thankyou()
  {
    this.restProvider.addComment();
    let alert = this.alertCtrl.create({
      title: 'Commentaire poster !',
      subTitle: 'Merci votre commentaire a bien était ajouter',
      buttons: ['OK']
    });
    alert.present();
  }

  backvisit()
  {
    this.navCtrl.push('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcommentPage');
  }

}
