<<<<<<< HEAD
import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'https://isiko.restlet.net:443/v2/loginUsers/';

@Injectable()
export class AuthServices {
  url: string = 'https://isiko.restlet.net/v2/loginUsers/';

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {

      this.http.post(apiUrl, JSON.stringify(credentials))
        .subscribe(res => {
          // resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  //
  //

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/', reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/', body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/', body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/', reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/', body, reqOpts);
  }





}
=======
import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'https://isiko.restlet.net:443/v2/loginUsers/';

@Injectable()
export class AuthServices {
  url: string = 'https://isiko.restlet.net/v2/loginUsers/';

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {

      this.http.post(apiUrl, JSON.stringify(credentials))
        .subscribe(res => {
          // resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  //
  //

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/', reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/', body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/', body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/', reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/', body, reqOpts);
  }





}
>>>>>>> 7a39b3d838cb80fb25cfb22fb9924dddb29411a9
