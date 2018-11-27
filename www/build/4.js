webpackJsonp([4],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExposDetailsPageModule", function() { return ExposDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expos_details__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExposDetailsPageModule = /** @class */ (function () {
    function ExposDetailsPageModule() {
    }
    ExposDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expos_details__["a" /* ExposDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expos_details__["a" /* ExposDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
            ],
        })
    ], ExposDetailsPageModule);
    return ExposDetailsPageModule;
}());

//# sourceMappingURL=expos-details.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExposDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
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
 * Generated class for the ExposDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExposDetailsPage = /** @class */ (function () {
    function ExposDetailsPage(navCtrl, navParams, restProvider, inAppBrowser, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.inAppBrowser = inAppBrowser;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.btn_txt = 'Ajouter à mes favoris';
        menuCtrl.swipeEnable(false);
        this.value = navParams.get('user');
        this.getUsers();
        this.getExibitionsScript();
        this.getComment();
    }
    ExposDetailsPage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log("USERS : " + _this.users);
        });
    };
    ExposDetailsPage.prototype.getComment = function () {
        var _this = this;
        this.restProvider.getComment()
            .then(function (data) {
            _this.comments = data;
            console.log("COMMMENT :" + _this.comments);
        });
    };
    ExposDetailsPage.prototype.backexpos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ExposDetailsPage.prototype.listoeuvres = function () {
        var alert = this.alertCtrl.create({
            title: 'Bientôt Disponible',
            subTitle: 'Merci de revenir plus tard !',
            buttons: ['OK']
        });
        alert.present();
    };
    ExposDetailsPage.prototype.addtomyfavorit = function (commentData) {
        commentData = {
            id_Expo: 999999,
            id_Users: 9999999
        };
        this.restProvider.postUerfavorit(commentData);
        if (this.btn_txt == 'Ajouter à mes favoris') {
            this.popupaddtomyfavorit();
            this.btn_txt = 'Supprimé de mes favoris';
        }
        else {
            console.log('go to next page');
        }
        // this.restProvider.postUerfavorit(commentData)
    };
    ExposDetailsPage.prototype.popupdeletetomyfavorit = function () {
        var alert = this.alertCtrl.create({
            title: 'Exposition supprimé de vos favoris !',
            subTitle: 'Exposition supprimé de vos favoris',
            buttons: ['OK']
        });
        alert.present();
    };
    ExposDetailsPage.prototype.popupaddtomyfavorit = function () {
        var alert = this.alertCtrl.create({
            title: 'Exposition ajouter à vos favoris !',
            subTitle: 'Exposition ajouter à vos favoris',
            buttons: ['OK']
        });
        alert.present();
    };
    ExposDetailsPage.prototype.getExibitionsScript = function () {
        var _this = this;
        this.restProvider.getExibitionsScript()
            .then(function (data) {
            _this.exib = data;
            console.log("MY EXIB : " + _this.exib);
        });
    };
    ExposDetailsPage.prototype.openWebpage = function (url) {
        var options = {
            zoom: 'no'
        };
        // Opening a URL and returning an InAppBrowserObject
        // A UPDATE user.url_visite pas bon
        var browser = this.inAppBrowser.create(url, '_self', options);
    };
    ExposDetailsPage.prototype.deletecomment = function () {
        this.restProvider.deleteComment();
    };
    ExposDetailsPage.prototype.deletefavorit = function () {
        this.restProvider.deleteUserfavorit();
    };
    ExposDetailsPage.prototype.addcomment = function () {
        this.navCtrl.push('AddcommentPage');
    };
    ExposDetailsPage.prototype.allcomment = function (id) {
        this.navCtrl.push('AllcommentPage', { expos: id });
    };
    // LECTEUR VISITE LINK ALGO
    //
    // lecteuralgo(url: string)
    // {
    //   const options: InAppBrowserOptions = {
    //     zoom: 'no'
    //   }
    //   IF ID = PREMIERE_EXPO
    //   const browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
    //   IF ID = DEUXIEME_EXPO
    //   const browser = this.inAppBrowser.create('http://player.isiko.io/MobileVersion/?exhibition=Montagnes', '_self', options);
    //   IF ID = TROISIEME_EXPO
    //   const browser = this.inAppBrowser.create('http://player.isiko.io/MobileVersion/?exhibition=Alearand', '_self', options);
    // }
    ExposDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("MY VALUE :" + this.value);
        console.log('ionViewDidLoad ExposDetailsPage');
    };
    ExposDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expos-details',template:/*ion-inline-start:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/expos-details/expos-details.html"*/'<ion-content>\n  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">\n  <div class="headerisiko">\n    <button ion-button [menuToggle]>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <button class="buttonreturn" block clear (click)="backexpos()"><span>Retour à la liste</span></button>\n\n  </div>\n    <ion-list inset>\n      <ion-item *ngFor="let user of users">\n        <div class="mondivinchAllah" *ngIf="value == user.id">\n          <div class="imghome">\n            <img class="listemenuimage" src="{{user.image_ios}}">\n\n            <div class="details">\n              <div class="titleblackscreen"></div>\n                <div class="blackscreen"></div>\n              <div class="titleexpo">\n                <h2>{{user.name}}</h2>\n              </div>\n              <div class="texthomepage">\n                <p>{{user.artists}}</p>\n              </div>\n\n                  </div>\n          <!-- <h2>{{user.name}}</h2>\n        <p>{{user.id}}</p>\n        <p>{{user.artists}}</p>\n        <p>{{user.ending_exhibition_date}}</p>\n        <p>{{user.stars}}</p> -->\n      <div class="buttonscontainer">\n        <button  class=" btn-hover color-8" block clear (click)="openWebpage(user.url_visite)">Commencer la visite</button>\n        <!-- BUTTON ALGO LECTEUR FUNCTION -->\n        <!-- <button ion-button block clear (click)="lecteuralgo()">Commencer la visite</button> -->\n        <br>\n        <button class="btn-hover color-2" block clear (click)="addtomyfavorit()">{{btn_txt}}</button>\n        <button class="btn-hover color-2" block clear (click)="deletefavorit()">Suppimer mon favoris TEST</button>\n        <br>\n        <button class="btn-hover color-2" block clear (click)="addcomment()">Ajouter mon commentaire</button>\n        <button class="btn-hover color-2" block clear (click)="deletecomment()">DELETE MON COMMENTAIRE TEST</button>\n        <br>\n        <button class="btn-hover color-2" block clear (click)="allcomment(user.id)">Voir tout les commentaires</button>\n        <br>\n      </div>\n        </div>\n      </div>\n\n\n    </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/expos-details/expos-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object])
    ], ExposDetailsPage);
    return ExposDetailsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=expos-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map