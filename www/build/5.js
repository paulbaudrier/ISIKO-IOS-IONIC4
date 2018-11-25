webpackJsonp([5],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExposDetailsPageModule", function() { return ExposDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expos_details__ = __webpack_require__(744);
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

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExposDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(168);
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
        var browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
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
            selector: 'page-expos-details',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\expos-details\expos-details.html"*/'<ion-content>\n\n  <div>\n\n    <button ion-button [menuToggle]>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </div>\n\n    <ion-list inset>\n\n      <ion-item *ngFor="let user of users">\n\n        <div class="mondivinchAllah" *ngIf="value == user.id">\n\n          <div class="imghome">\n\n            <img class="listemenuimage" src="{{user.images}}">\n\n\n\n            <div class="details">\n\n                <div class="blackscreen"></div>\n\n              <div class="titleexpo">\n\n                <h2>{{user.name}}</h2>\n\n              </div>\n\n              <div class="texthomepage">\n\n                <p>{{user.artists}}</p>\n\n              </div>\n\n\n\n                  </div>\n\n          <!-- <h2>{{user.name}}</h2>\n\n        <p>{{user.id}}</p>\n\n        <p>{{user.artists}}</p>\n\n        <p>{{user.ending_exhibition_date}}</p>\n\n        <p>{{user.stars}}</p> -->\n\n      <div class="buttonscontainer">\n\n        <button  class=" btn-hover color-2" block clear (click)="openWebpage(\'http://player.isiko.io/MobileVersion/?exhibition=Iletaitunefois\')">Commencer la visite</button>\n\n        <!-- BUTTON ALGO LECTEUR FUNCTION -->\n\n        <!-- <button ion-button block clear (click)="lecteuralgo()">Commencer la visite</button> -->\n\n        <br>\n\n        <button class="btn-hover color-2" block clear (click)="addtomyfavorit()">{{btn_txt}}</button>\n\n        <br>\n\n        <button class="btn-hover color-2" block clear (click)="addcomment()">Ajouter mon commentaire</button>\n\n        <br>\n\n        <button class="btn-hover color-2" block clear (click)="allcomment(user.id)">Voir tout les commentaires</button>\n\n        <br>\n\n        <button class="btn-hover color-2" block clear (click)="listoeuvres()">Voir la liste des Oeuvres</button>\n\n        <br>\n\n        <button class="btn-hover color-2" block clear (click)="backexpos()">Revenir à la liste des expositions</button>\n\n      </div>\n\n        </div>\n\n      </div>\n\n\n\n\n\n    </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\expos-details\expos-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ExposDetailsPage);
    return ExposDetailsPage;
}());

//# sourceMappingURL=expos-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map