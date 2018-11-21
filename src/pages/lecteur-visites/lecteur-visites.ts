import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

/**
 * Generated class for the LecteurVisitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecteur-visites',
  templateUrl: 'lecteur-visites.html',
})
export class LecteurVisitesPage {
  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  }
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad LecteurVisitesPage');
  }

}
