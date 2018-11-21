webpackJsonp([7],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMoviesPageModule", function() { return MyMoviesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_movies__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMoviesPageModule = /** @class */ (function () {
    function MyMoviesPageModule() {
    }
    MyMoviesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_movies__["a" /* MyMoviesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_movies__["a" /* MyMoviesPage */]),
            ],
        })
    ], MyMoviesPageModule);
    return MyMoviesPageModule;
}());

//# sourceMappingURL=my-movies.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyMoviesPage = /** @class */ (function () {
    function MyMoviesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyMoviesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyMoviesPage');
    };
    MyMoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-movies',template:/*ion-inline-start:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/my-movies/my-movies.html"*/'<!--\n\n  Generated template for the MyMoviesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button menuToggle ion-button icon-only>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Movie App</ion-title>\n\n  </ion-navbar>\n\n \n\n  <ion-toolbar color="secondary">\n\n    <ion-title>My favorite movies</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p>You haven\'t selected any movie</p>\n\n      <p>Please select one by using the button below</p>\n\n      <button ion-button icon-left full (click)="findMovie()">\n\n        <ion-icon name="search"></ion-icon>\n\n        On going movies\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/my-movies/my-movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MyMoviesPage);
    return MyMoviesPage;
}());

//# sourceMappingURL=my-movies.js.map

/***/ })

});
//# sourceMappingURL=7.js.map