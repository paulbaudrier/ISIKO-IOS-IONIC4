webpackJsonp([8],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentPageModule", function() { return AddcommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcomment__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(386);
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

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
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
    function AddcommentPage(navCtrl, navParams, alertCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
    }
    // POST COMMENT
    AddcommentPage.prototype.DoAddComment = function () {
        this.restProvider.addComment();
    };
    // ALERT POP UP
    AddcommentPage.prototype.thankyou = function () {
        this.restProvider.addComment();
        var alert = this.alertCtrl.create({
            title: 'Commentaire poster !',
            subTitle: 'Merci votre commentaire a bien était ajouter',
            buttons: ['OK']
        });
        alert.present();
    };
    AddcommentPage.prototype.backvisit = function () {
        this.navCtrl.push('HomePage');
    };
    AddcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcommentPage');
    };
    AddcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-addcomment',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\addcomment\addcomment.html"*/'<!--\n\n  Generated template for the FeedbackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajouter mon commentaire</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n      <p>Quelle note donnez vous à cette éxposition ?</p>\n\n      <ionic3-star-rating\n\n      activeIcon = "ios-star"\n\n      defaultIcon = "ios-star-outline"\n\n      activeColor = "#488aff"\n\n      defaultColor = "#f4f4f4"\n\n      readonly="false"\n\n      [rating]="0">\n\n      </ionic3-star-rating>\n\n      <br/>\n\n      <br/>\n\n      <textarea #myInput id="myInput" rows="9" maxLength="800" [(ngModel)]="myStuff" placeholder="Laissez nous un commentaire"></textarea>\n\n      <br/>\n\n      <br/>\n\n      <button ion-button block (click)="thankyou()">{{ \'Envoyer mon commentaire\'}}</button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\addcomment\addcomment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object])
    ], AddcommentPage);
    return AddcommentPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=addcomment.js.map

/***/ })

});
//# sourceMappingURL=8.js.map