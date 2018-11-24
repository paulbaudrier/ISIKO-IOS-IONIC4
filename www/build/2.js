webpackJsonp([2],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = /** @class */ (function () {
    function MyProfilePageModule() {
    }
    MyProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
            ],
        })
    ], MyProfilePageModule);
    return MyProfilePageModule;
}());

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome_welcome__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_model__ = __webpack_require__(386);
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
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * <!--  <ion-navbar hideBackButton="true"> -->
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams, restProvider, userService, authService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.userService = userService;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__core_user_model__["a" /* FirebaseUserModel */]();
        // this.getProfile();
    }
    MyProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .then(function (user) {
            _this.user = user;
            console.log("USER IDDDDD" + user.name);
        }, function (err) { return console.log(err); });
    };
    MyProfilePage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__welcome_welcome__["a" /* WelcomePage */]);
            _this.menuCtrl.enable(false);
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    // getProfile() {
    //   this.restProvider.getProfile()
    //   .then(data => {
    //     this.users = data;
    //     console.log(this.users);
    //   });
    // }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/my-profile/my-profile.html"*/'<ion-header>\n    <ion-title>Mon Profil</ion-title>\n    <button ion-button menuToggle>Menu</button>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <img [src]="user.image"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{user.name}}\n      </ion-card-title>\n      <p>\n        Bonjour, {{user.name}}.\n        <br>\n        <br>\n        Vous trouverez ici les informations de votre profil !\n      </p>\n      <br>\n      <p>\n        Mon email : {{user.email}}\n      </p>\n      <br>\n      Mon ID : {{user.uid}}\n\n    </ion-card-content>\n    <br>\n    <button ion-button block type="button" (click)=\'logout()\'>Se déconnecter</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__core_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map