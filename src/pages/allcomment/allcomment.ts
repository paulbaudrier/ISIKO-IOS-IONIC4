import { AddcommentPage } from './../addcomment/addcomment';
import { HomePage } from './../home/home';
import { ExposDetailsPage } from './../expos-details/expos-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';

import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the AllcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allcomment',
  templateUrl: 'allcomment.html',
})
export class AllcommentPage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getComment();
    this.value = navParams.get('expos');
  }

  myrating:any;
  comments: any;
  getComment() {
    this.restProvider.getComment()
    .then(data => {
      this.comments = data;

      console.log("COMMMENT :" + this.comments);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllcommentPage');
    console.log("Ma valeur " + this.value);
  }

  backvisit()
  {
    this.navCtrl.push('AddcommentPage');
  }

}
