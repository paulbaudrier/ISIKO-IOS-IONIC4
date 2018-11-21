import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {

  apiUrl = 'https://isiko.restlet.net/v2/getUser_Favoriteses/';
  constructor(public http: HttpClient) {
    console.log('Hello FavoritesProvider Provider');
  }
  getFavorit() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
