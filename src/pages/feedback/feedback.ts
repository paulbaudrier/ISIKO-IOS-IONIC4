import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { StarRatingModule } from 'ionic3-star-rating';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  authForm: FormGroup;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  thankyou(){
    this.navCtrl.push('ThankyouPage');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  

}