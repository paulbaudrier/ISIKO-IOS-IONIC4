webpackJsonp([1],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function() { return SplashscreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splashscreen__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashscreenPageModule = /** @class */ (function () {
    function SplashscreenPageModule() {
    }
    SplashscreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splashscreen__["a" /* SplashscreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splashscreen__["a" /* SplashscreenPage */]),
            ],
        })
    ], SplashscreenPageModule);
    return SplashscreenPageModule;
}());

//# sourceMappingURL=splashscreen.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(171);
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
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashscreenPage = /** @class */ (function () {
    function SplashscreenPage(navCtrl, navParams, nativeAudio, smartAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeAudio = nativeAudio;
        this.smartAudio = smartAudio;
        this.splash = true;
        this.secondPage = __WEBPACK_IMPORTED_MODULE_1__welcome_welcome__["a" /* WelcomePage */];
    }
    SplashscreenPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__welcome_welcome__["a" /* WelcomePage */]);
    };
    SplashscreenPage.prototype.Netflixsound = function () {
        this.smartAudio.play('opening');
    };
    SplashscreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Netflixsound();
        setTimeout(function () { return _this.splash = false; }, 4000);
        console.log('ionViewDidLoad SplashscreenPage');
    };
    SplashscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-splashscreen',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/'<!--\n\n  Generated template for the SplashscreenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n<!-- <div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/logo.svg">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div> -->\n\n\n\nNetflixsound()\n\n\n\n<ion-content>\n\n \n\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n\n      <defs>\n\n          <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n\n      </defs>\n\n      <title>jmlogo</title>\n\n      <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n\n      <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n\n      <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n\n      <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n\n      <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n\n      <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n\n  </svg>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n<button ion-button icon-left block clear (click)="back()"> BACK</button>'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
    ], SplashscreenPage);
    return SplashscreenPage;
}());

//# sourceMappingURL=splashscreen.js.map

/***/ })

});
//# sourceMappingURL=1.js.map