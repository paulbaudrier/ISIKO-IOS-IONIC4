<<<<<<< HEAD
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NgModule } from '@angular/core';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();
  }
  users: any;
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;

    console.log(this.users);
    });
  }

  expo_detail(id)
  {
    console.log("MY ID :" + id);
    this.navCtrl.push('ExposDetailsPage', {user:id});
  }

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
=======
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NgModule } from '@angular/core';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();
  }
  users: any;
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;

    console.log(this.users);
    });
  }

  expo_detail(id)
  {
    console.log("MY ID :" + id);
    this.navCtrl.push('ExposDetailsPage', {user:id});
  }

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
>>>>>>> 7a39b3d838cb80fb25cfb22fb9924dddb29411a9
