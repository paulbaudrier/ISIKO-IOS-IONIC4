import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ExposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExposProvider {
  apiUrlexpos = 'https://isiko.restlet.net/v2/getExhibitionses/';
  constructor(public http: HttpClient) {
    console.log('Hello ExposProvider Provider');
  }

  getExpos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlexpos).subscribe(dataexpos => {
        resolve(dataexpos);
      }, err => {
        console.log(err);
      });
    });
  }

}
