webpackJsonp([2],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFavoritesPageModule", function() { return MyFavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_favorites__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyFavoritesPageModule = /** @class */ (function () {
    function MyFavoritesPageModule() {
    }
    MyFavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_favorites__["a" /* MyFavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_favorites__["a" /* MyFavoritesPage */]),
            ],
        })
    ], MyFavoritesPageModule);
    return MyFavoritesPageModule;
}());

//# sourceMappingURL=my-favorites.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_model__ = __webpack_require__(388);
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
 * Generated class for the MyFavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFavoritesPage = /** @class */ (function () {
    function MyFavoritesPage(navCtrl, navParams, restProvider, userService, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.userService = userService;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__core_user_model__["a" /* FirebaseUserModel */]();
        this.getUserFavorit();
    }
    MyFavoritesPage.prototype.getExposImg = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (dataexpo) {
            _this.expos = dataexpo;
            console.log("laaaaaaa expo : " + _this.expos);
        });
    };
    MyFavoritesPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.getExposImg();
        this.userService.getCurrentUser()
            .then(function (user) {
            _this.user = user;
            console.log("UID" + user.uid);
        }, function (err) { return console.log(err); });
    };
    MyFavoritesPage.prototype.getUserFavorit = function () {
        var _this = this;
        this.restProvider.getUserFavorit()
            .then(function (data) {
            _this.favorits = data;
            console.log(_this.favorits);
        });
    };
    MyFavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyFavoritesPage');
    };
    MyFavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-favorites',template:/*ion-inline-start:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/my-favorites/my-favorites.html"*/'<ion-content>\n    <button ion-button [menuToggle]>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  <ion-list inset>\n      <ng-container *ngFor="let expo of expos">\n        <img class="listemenuimage" src="{{expo.image_ios}}">\n          </ng-container>\n      <ng-container *ngFor="let favorit of favorits">\n          <ion-option *ngIf="user.uid == favorit.id_Users" >\n\n          <h2>{{favorit.id_Expo}}</h2>\n          <p>{{favorit.id_Users}}</p>\n            </ion-option>\n\n        </ng-container>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/my-favorites/my-favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* AuthService */]])
    ], MyFavoritesPage);
    return MyFavoritesPage;
}());

//# sourceMappingURL=my-favorites.js.map

/***/ })

});
//# sourceMappingURL=2.js.map