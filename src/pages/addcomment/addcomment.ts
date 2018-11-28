import { HomePage } from './../home/home';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';
import { AlertController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';



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

  currentDate;
  formattedDate;
  formattedDateObj;
  userID: FirebaseUserModel = new FirebaseUserModel();
  UserID: any;
  CommentContent: any;
  ExposID: any;
  TitleComment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public restProvider: RestProvider, public userService: UserService,
    public authService: AuthService) {
    this.currentDate = new Date();
    this.getFormattedDate()
    this.ExposID = navParams.get('expos');
  }

  getFormattedDate()
  {
    var dateObj = new Date()
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    this.formattedDate = date + '-' + monthArray[month] + '-' + year;
    this.formattedDateObj = new Date(this.formattedDate)

  }

  // POST COMMENT
  DoAddComment(AddDataComment)
  {
    this.restProvider.addComment(AddDataComment);
  }

  // ALERT POP UP
  thankyou(AddDataComment, ExposID)
  {
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
    
    AddDataComment= {
      "userID": [this.UserID.uid],"exhibitionID": [this.ExposID],"content": [this.CommentContent],"stars": "4",
        "title": this.TitleComment,
        "date_post": this.formattedDate
    };

    
    let alert = this.alertCtrl.create({
      title: 'Commentaire poster !',
      subTitle: 'Merci votre commentaire a bien était ajouter',
      buttons: ['OK']
    });
    this.restProvider.addComment(AddDataComment);
    alert.present();
    console.log(this.CommentContent);
  }

  backvisit()
  {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log("DATE FORMATTED" + this.formattedDate);
    this.userService.getCurrentUser()
    .then(UserID => {
      this.UserID = UserID;
      console.log("USER IDDDDD" + UserID.uid);
    }, err => console.log(err))
    console.log('ionViewDidLoad ExposDetailsPage');
    console.log("ExposID PAGE ADD COMMENT" + this.ExposID);
    console.log('ionViewDidLoad AddcommentPage');
  }

}
