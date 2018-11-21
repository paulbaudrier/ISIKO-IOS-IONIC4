<<<<<<< HEAD
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions } from '@angular/http';



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://isiko.restlet.net/v2/getExhibitionses/';
  apiUrl_two ='https://isiko.restlet.net/v2/getUser_Favoriteses/';
  apiUrl_three = 'https://isiko.restlet.net:443/v2/getUserDatas/';
  apiUrl_four = 'https://isiko.restlet.net/v2/get_Exhibitions_scripts/'
  apiUrl_five = 'https://isiko.restlet.net/v2/getCommentses/'
  apiUrl_six = 'https://isiko.restlet.net/v2/loginUsers/'


  constructor(public http: HttpClient) {
    console.log('Hello API Provider');
  }
  
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getLogin()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_six).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getComment() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_five).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getExibitionsScript() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_four).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserFavorit() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_two).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  postUerfavorit(commentData)
  {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl_two, JSON.stringify(commentData))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getProfile() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_three).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
=======
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions } from '@angular/http';



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://isiko.restlet.net/v2/getExhibitionses/';
  apiUrl_two ='https://isiko.restlet.net/v2/getUser_Favoriteses/';
  apiUrl_three = 'https://isiko.restlet.net:443/v2/getUserDatas/';
  apiUrl_four = 'https://isiko.restlet.net/v2/get_Exhibitions_scripts/'
  apiUrl_five = 'https://isiko.restlet.net/v2/getCommentses/'
  apiUrl_six = 'https://isiko.restlet.net/v2/loginUsers/'


  constructor(public http: HttpClient) {
    console.log('Hello API Provider');
  }
  
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getLogin()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_six).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getComment() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_five).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getExibitionsScript() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_four).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserFavorit() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_two).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  postUerfavorit(commentData)
  {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl_two, JSON.stringify(commentData))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getProfile() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl_three).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
>>>>>>> 7a39b3d838cb80fb25cfb22fb9924dddb29411a9
