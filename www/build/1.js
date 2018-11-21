webpackJsonp([1],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, authService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: 'test@example.com',
            password: 'test'
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
        });
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    // COMPARE LOGIN INFO 
    //
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/login/login.html"*/'<<<<<<< HEAD\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="form-content">\n\n  <form class="form" [formGroup]="loginForm" (ngSubmit)="tryLogin(loginForm.value)">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" formControlName="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button full class="submit-button" type="submit">\n\n      Se connecter\n\n    </button>\n\n    <label class="error-message">{{errorMessage}}</label>\n\n\n\n    <br>\n\n    <div>\n\n      <p>Pas encore de compte ? <a (click)="goRegisterPage()">Créee un compte</a></p>\n\n    </div>\n\n    <br>\n\n  </form>\n\n  <button ion-button full type="submit" class="google-button"  (click)="tryGoogleLogin()">Se connecter avec Google</button>\n\n</ion-content>\n\n=======\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n  <form class="form" [formGroup]="loginForm" (ngSubmit)="tryLogin(loginForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n    </ion-item>\n\n    <button ion-button full class="submit-button" type="submit">\n      Se connecter\n    </button>\n    <label class="error-message">{{errorMessage}}</label>\n\n    <br>\n    <div>\n      <p>Pas encore de compte ? <a (click)="goRegisterPage()">Créee un compte</a></p>\n    </div>\n    <br>\n  </form>\n  <button ion-button full type="submit" class="google-button"  (click)="tryGoogleLogin()">Se connecter avec Google</button>\n</ion-content>\n>>>>>>> 7a39b3d838cb80fb25cfb22fb9924dddb29411a9\n'/*ion-inline-end:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
    }
    RegisterPage.prototype.ionViewWillLoad = function () {
        this.registerForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created. Please log in now.";
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    RegisterPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    RegisterPage.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n  <form class="form" [formGroup]="registerForm" (ngSubmit)="tryRegister(registerForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n    </ion-item>\n\n    <button ion-button block class="submit-button" type="submit">Register</button>\n    <label class="error-message">{{errorMessage}}</label>\n    <label class="success-message">{{successMessage}}</label>\n    <br>\n    <div>\n      <p>Already have an account? <a (click)="goLoginPage()">Try to Log in</a></p>\n    </div>\n    <br>\n  </form>\n  <button ion-button block type="submit" class="facebook-button" (click)="tryFacebookLogin()">Register with Facebook</button>\n  <button ion-button block type="submit" class="twitter-button" (click)="tryTwitterLogin()">Register with Twitter</button>\n  <button ion-button block type="submit" class="google-button"  (click)="tryGoogleLogin()">Register with Google</button>\n</ion-content>\n'/*ion-inline-end:"/Users/rayan/Desktop/ISIKO_PAUL/ISIKO-IOS-MASTER/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map