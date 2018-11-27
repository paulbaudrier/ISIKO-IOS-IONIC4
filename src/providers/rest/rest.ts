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
      this.http.get(this.apiUrl).subscribe(dataexpo => {
        resolve(dataexpo);
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

  postUerfavorit(AddUserFavoritData)
  {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    //let options = new RequestOptions({ headers: headers });
    // let data={"id_Expo":["ff151461-f1e0-11e8-96a2-632bdefa9a39"],"id_Users":["qxGtYMMRBwfko7TFfHFqw5LMWzj1"] };
    this.http.post("https://isiko.restlet.net/v2/getUser_Favoriteses/",AddUserFavoritData, { headers: headers })
    // .map(res => res.json(data))
    .subscribe(res => {
    }, (err) => {
    alert("Il y'a eu un problème durant l'ajout au Favoris ! Merci de réessayer plus tard");
  });
  }

  deleteUserfavorit(DeleteUserFavoritData)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PUT');
    //let options = new RequestOptions({ headers: headers });
    this.http.delete("https://isiko.restlet.net/v2/getUser_Favoriteses/{DeleteUserFavoritData}", { headers: headers })
    // .map(res => res.json(data))
    .subscribe(res => {
    }, (err) => {
    alert("Il y'a eu un problème durant la suppression du Favoris ! Merci de réessayer plus tard");
  });
  }


  addComment(AddDataComment)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    //let options = new RequestOptions({ headers: headers });
    // let data={
    //   "id": "sample id",
    //   "userID": [
    //     "zqhtGgUakITOzp2UjcNKn3x4L9v2"
    //   ],
    //   "exhibitionID": [
    //     "f4407900-1679-11e8-a774-0bda78ba5176"
    //   ],
    //   "content": [
    //     "TEST PAUL IOS"
    //   ],
    //   "stars": "4",
    //   "title": "TEST PAUL IOS",
    //   "date_post": "26 Novembre 2018"
    // };
    this.http.post("https://isiko.restlet.net/v2/getCommentses/",AddDataComment, { headers: headers })
    // .map(res => res.json(data))
    .subscribe(res => {
    }, (err) => {
    alert("Il y'a eu un problème durant l'ajout de votre commentaire ! Merci de réessayer plus tard");
  });
  }

  deleteComment(DeleteCommentData)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PUT');
    //let options = new RequestOptions({ headers: headers });
    this.http.delete("https://isiko.restlet.net/v2/getCommentses/{DeleteCommentData}", { headers: headers })
    // .map(res => res.json(data))
    .subscribe(res => {
    }, (err) => {
    alert("Il y'a eu un problème durant la suppression du Commentaire ! Merci de réessayer plus tard");
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
