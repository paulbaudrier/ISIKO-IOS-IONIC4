webpackJsonp([13],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecteurVisitesPageModule", function() { return LecteurVisitesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lecteur_visites__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LecteurVisitesPageModule = /** @class */ (function () {
    function LecteurVisitesPageModule() {
    }
    LecteurVisitesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lecteur_visites__["a" /* LecteurVisitesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lecteur_visites__["a" /* LecteurVisitesPage */]),
            ],
        })
    ], LecteurVisitesPageModule);
    return LecteurVisitesPageModule;
}());

//# sourceMappingURL=lecteur-visites.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecteurVisitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(385);
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
 * Generated class for the LecteurVisitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LecteurVisitesPage = /** @class */ (function () {
    function LecteurVisitesPage(navCtrl, navParams, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
    }
    LecteurVisitesPage.prototype.openWebpage = function (url) {
        var options = {
            zoom: 'no'
        };
        // Opening a URL and returning an InAppBrowserObject
        var browser = this.inAppBrowser.create('http://player.isiko.io/360Player/?exhibition=Iletaitunefois', '_self', options);
    };
    LecteurVisitesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LecteurVisitesPage');
    };
    LecteurVisitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lecteur-visites',template:/*ion-inline-start:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/lecteur-visites/lecteur-visites.html"*/'\n\n<ion-content padding>\n\n\n\n  <button ion-button block clear (click)="openWebpage(\'http://player.isiko.io/360Player/?exhibition=Iletaitunefois\')">Commencer la visite</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/lecteur-visites/lecteur-visites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LecteurVisitesPage);
    return LecteurVisitesPage;
}());

//# sourceMappingURL=lecteur-visites.js.map

/***/ })

});
//# sourceMappingURL=13.js.map