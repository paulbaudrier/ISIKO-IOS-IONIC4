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
        this.Netflixsound();
    }
    SplashscreenPage.prototype.Netflixsound = function () {
        this.smartAudio.play('opening');
        this.nativeAudio.preloadSimple('uniqueId1', 'src/assets/img/isiko-opening.mp3');
        this.nativeAudio.preloadComplex('uniqueId2', 'src/assets/img/isiko-opening.mp3', 1, 1, 0);
        this.nativeAudio.play('uniqueId1');
        // can optionally pass a callback to be called when the file is done playing
        this.nativeAudio.play('uniqueId1', function () { return console.log('uniqueId1 is done playing'); });
        this.nativeAudio.loop('uniqueId2');
        this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6);
        this.nativeAudio.stop('uniqueId1');
        this.nativeAudio.unload('uniqueId1');
    };
    SplashscreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Netflixsound();
        setTimeout(function () { return _this.splash = false; }, 4000);
        console.log('ionViewDidLoad SplashscreenPage');
    };
    SplashscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-splashscreen',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/'<!--\n\n  Generated template for the SplashscreenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n<!-- <div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/logo.svg">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div> -->\n\n\n\nNetflixsound()\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]) === "function" && _d || Object])
    ], SplashscreenPage);
    return SplashscreenPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=splashscreen.js.map

/***/ })

});
//# sourceMappingURL=1.js.map