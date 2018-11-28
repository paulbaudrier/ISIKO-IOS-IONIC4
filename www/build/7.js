webpackJsonp([7],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentPageModule", function() { return AddcommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcomment__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddcommentPageModule = /** @class */ (function () {
    function AddcommentPageModule() {
    }
    AddcommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addcomment__["a" /* AddcommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addcomment__["a" /* AddcommentPage */]),
            ],
        })
    ], AddcommentPageModule);
    return AddcommentPageModule;
}());

//# sourceMappingURL=addcomment.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_model__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AddcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddcommentPage = /** @class */ (function () {
    function AddcommentPage(navCtrl, navParams, alertCtrl, restProvider, userService, authService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.userService = userService;
        this.authService = authService;
        this.events = events;
        this.userID = new __WEBPACK_IMPORTED_MODULE_6__core_user_model__["a" /* FirebaseUserModel */]();
        events.subscribe('star-rating:changed', function (starRating) { _this.Stars = starRating; });
        this.currentDate = new Date();
        this.getFormattedDate();
        this.ExposID = navParams.get('expos');
    }
    AddcommentPage.prototype.getFormattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.formattedDate = date + '-' + monthArray[month] + '-' + year;
        this.formattedDateObj = new Date(this.formattedDate);
    };
    // POST COMMENT
    AddcommentPage.prototype.DoAddComment = function (AddDataComment) {
        this.restProvider.addComment(AddDataComment);
    };
    // ALERT POP UP
    AddcommentPage.prototype.thankyou = function (AddDataComment, ExposID) {
        console.log("AU MOMENT DE l'ENVOIE : " + this.Stars);
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
        AddDataComment = {
            "userID": [this.UserID.uid], "exhibitionID": [this.ExposID], "content": [this.CommentContent], "stars": this.Stars,
            "title": this.TitleComment,
            "date_post": this.formattedDate
        };
        var alert = this.alertCtrl.create({
            title: 'Commentaire poster !',
            subTitle: 'Merci votre commentaire a bien était ajouter',
            buttons: ['OK']
        });
        this.restProvider.addComment(AddDataComment);
        alert.present();
        console.log(this.CommentContent);
    };
    AddcommentPage.prototype.backvisit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    AddcommentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("DATE FORMATTED" + this.formattedDate);
        this.userService.getCurrentUser()
            .then(function (UserID) {
            _this.UserID = UserID;
            console.log("USER IDDDDD" + UserID.uid);
        }, function (err) { return console.log(err); });
        console.log('ionViewDidLoad ExposDetailsPage');
        console.log("ExposID PAGE ADD COMMENT" + this.ExposID);
        console.log('ionViewDidLoad AddcommentPage');
    };
    AddcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-addcomment',template:/*ion-inline-start:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/addcomment/addcomment.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">\n  <ion-title>Ajouter mon commentaire</ion-title>\n      <button ion-button [menuToggle]>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-header>\n\n<ion-content>\n  <ion-list inset>\n      <p>Quelle note donnez vous à cette éxposition ?</p>\n      <ionic3-star-rating\n      activeIcon = "ios-star"\n      defaultIcon = "ios-star-outline"\n      activeColor = "#488aff"\n      defaultColor = "#f4f4f4"\n      readonly="false"\n      [rating]="0">\n      </ionic3-star-rating>\n      <br/>\n      <textarea #myInput id="myInput" rows="2" maxLength="200" [(ngModel)]="TitleComment" placeholder="Titre de votre commentaire"></textarea>\n      <br/>\n      <textarea #myInput id="myInput" rows="9" maxLength="800" [(ngModel)]="CommentContent" placeholder="Contenu de votre commentaire"></textarea>\n      <br/>\n      <br/>\n      <button ion-button block (click)="thankyou()">{{ \'Envoyer mon commentaire\'}}</button>\n      <br />\n      <button ion-button block (click)="backvisit()">{{ \'Revenir à la liste des expositions\'}}</button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/addcomment/addcomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__core_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
    ], AddcommentPage);
    return AddcommentPage;
}());

//# sourceMappingURL=addcomment.js.map

/***/ })

});
//# sourceMappingURL=7.js.map