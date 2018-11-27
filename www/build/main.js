webpackJsonp([9],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, authService, formBuilder, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.errorMessage = '';
        this.successMessage = '';
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.ionViewWillLoad = function () {
        this.registerForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]()
        });
    };
    SignupPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            _this.errorMessage = "";
            _this.successMessage = "Votre compte a bien été créé ! Merci de vous connecter.";
        }, function (err) {
            _this.alertinscription();
            _this.successMessage = "";
        });
    };
    SignupPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.alertinscription();
        });
    };
    SignupPage.prototype.goLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.alertinscription = function () {
        var alert = this.alertCtrl.create({
            title: 'Une erreur est survenue durant votre inscription sur ISIKO ! Merci de vérifier les champs renseignés.',
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>S\'inscrire sur ISIKO</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="form-content">\n\n  <form class="form" [formGroup]="registerForm" (ngSubmit)="tryRegister(registerForm.value)">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button block class="submit-button" type="submit">S\'inscrire</button>\n\n    <label class="error-message">{{errorMessage}}</label>\n\n    <label class="success-message">{{successMessage}}</label>\n\n  </form>\n\n  <br>\n\n  <button ion-button block type="submit" class="google-button"  (click)="tryGoogleLogin()">S\'inscrire avec Google</button>\n\n  <br>\n\n  <div>\n\n    <p>Déja un compte ? <a (click)="goLoginPage()">Essayer de vous connecter </a></p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* User */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__(70);
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
    function LoginPage(navCtrl, user, toastCtrl, translateService, authService, formBuilder, menuCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
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
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
        });
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.authService.doLogin(value)
            .then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
            _this.alerterrorconnexion();
        });
    };
    LoginPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.alerterrorconnexion();
        });
    };
    LoginPage.prototype.alerterrorconnexion = function () {
        var alert = this.alertCtrl.create({
            title: 'Une erreur est survenue durant votre connexion ! Merci de vérifier les champs renseignés.',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    };
    // COMPARE LOGIN INFO 
    //
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Se connecter à ISIKO</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="form-content">\n\n  <form class="form" [formGroup]="loginForm" (ngSubmit)="tryLogin(loginForm.value)">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" formControlName="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="password" class="form-controll"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button full class="submit-button" type="submit">\n\n      Se connecter\n\n    </button>\n\n    <label class="error-message">{{errorMessage}}</label>\n\n\n\n    <br>\n\n    <button ion-button full type="submit" class="google-button"  (click)="tryGoogleLogin()">Se connecter avec Google</button>\n\n    <br>\n\n    <div>\n\n      <p>Pas encore de compte ? <a (click)="goRegisterPage()">Créee un compte</a></p>\n\n    </div>\n\n   \n\n  </form>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* User */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* MenuController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'https://isiko.restlet.net/v2/getExhibitionses/';
        this.apiUrl_two = 'https://isiko.restlet.net/v2/getUser_Favoriteses/';
        this.apiUrl_three = 'https://isiko.restlet.net:443/v2/getUserDatas/';
        this.apiUrl_four = 'https://isiko.restlet.net/v2/get_Exhibitions_scripts/';
        this.apiUrl_five = 'https://isiko.restlet.net/v2/getCommentses/';
        this.apiUrl_six = 'https://isiko.restlet.net/v2/loginUsers/';
        console.log('Hello API Provider');
    }
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (dataexpo) {
                resolve(dataexpo);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl_six).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getComment = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl_five).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getExibitionsScript = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl_four).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getUserFavorit = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl_two).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.postUerfavorit = function (commentData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //let options = new RequestOptions({ headers: headers });
        var data = { "id_Expo": ["f4407900-1679-11e8-a774-0bda78ba5176"], "id_Users": ["zqhtGgUakITOzp2UjcNKn3x4L9v2"] };
        this.http.post("https://isiko.restlet.net/v2/getUser_Favoriteses/", data, { headers: headers })
            .subscribe(function (res) {
        }, function (err) {
            alert("Il y'a eu un problème durant l'ajout au Favoris ! Merci de réessayer plus tard");
        });
    };
    RestProvider.prototype.deleteUserfavorit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PUT');
        //let options = new RequestOptions({ headers: headers });
        this.http.delete("https://isiko.restlet.net/v2/getUser_Favoriteses/8ddaafd1-f1a4-11e8-96a2-632bdefa9a39", { headers: headers })
            .subscribe(function (res) {
        }, function (err) {
            alert("Il y'a eu un problème durant la suppression du Favoris ! Merci de réessayer plus tard");
        });
    };
    RestProvider.prototype.addComment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        //let options = new RequestOptions({ headers: headers });
        var data = {
            "id": "sample id",
            "userID": [
                "zqhtGgUakITOzp2UjcNKn3x4L9v2"
            ],
            "exhibitionID": [
                "f4407900-1679-11e8-a774-0bda78ba5176"
            ],
            "content": [
                "TEST PAUL IOS"
            ],
            "stars": "4",
            "title": "TEST PAUL IOS",
            "date_post": "26 Novembre 2018"
        };
        this.http.post("https://isiko.restlet.net/v2/getCommentses/", data, { headers: headers })
            .subscribe(function (res) {
        }, function (err) {
            alert("Il y'a eu un problème durant l'ajout de votre commentaire ! Merci de réessayer plus tard");
        });
    };
    RestProvider.prototype.deleteComment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PUT');
        //let options = new RequestOptions({ headers: headers });
        this.http.delete("https://isiko.restlet.net/v2/getCommentses/48629171-f1a4-11e8-96a2-632bdefa9a39", { headers: headers })
            .subscribe(function (res) {
        }, function (err) {
            alert("Il y'a eu un problème durant la suppression du Commentaire ! Merci de réessayer plus tard");
        });
    };
    RestProvider.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl_three).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcomment/addcomment.module": [
		733,
		7
	],
	"../pages/allcomment/allcomment.module": [
		734,
		6
	],
	"../pages/core/core.module": [
		735,
		5
	],
	"../pages/expos-details/expos-details.module": [
		736,
		4
	],
	"../pages/feedback/feedback.module": [
		737,
		3
	],
	"../pages/my-favorites/my-favorites.module": [
		738,
		2
	],
	"../pages/my-profile/my-profile.module": [
		739,
		1
	],
	"../pages/splashscreen/splashscreen.module": [
		740,
		8
	],
	"../pages/thankyou/thankyou.module": [
		741,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    // fbAppId: 186848361921511,
    googleWebClientId: '401245627689-ke4oci7bc8440anmpo4dms1od5keoome.apps.googleusercontent.com',
    firebase: {
        apiKey: "AIzaSyChxxMc-rDBQ-JTFYbGchPD9lvCoEsk6JY",
        authDomain: "isiko-43dbc.firebaseapp.com",
        databaseURL: "https://isiko-43dbc.firebaseio.com",
        projectId: "isiko-43dbc",
        storageBucket: "isiko-43dbc.appspot.com",
        messagingSenderId: "910567039347"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://isiko.restlet.net/v2/loginUsers/';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/', reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/', body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/', body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/', reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/', body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                var userModel = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* FirebaseUserModel */]();
                if (user) {
                    if (user.providerData[0].providerId == 'password') {
                        //use a default image
                        userModel.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
                        userModel.name = user.displayName;
                        userModel.email = user.email;
                        userModel.uid = user.uid;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                    else {
                        userModel.image = user.photoURL;
                        userModel.name = user.displayName;
                        userModel.email = user.email;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
        this.email = "";
        this.uid = "";
    }
    return FirebaseUserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(71);
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
    function SplashscreenPage(navCtrl, navParams, nativeAudio, smartAudio, splashScreen) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeAudio = nativeAudio;
        this.smartAudio = smartAudio;
        this.splash = true;
        this.showSplash = true; // <-- show animation
        this.secondPage = __WEBPACK_IMPORTED_MODULE_1__welcome_welcome__["a" /* WelcomePage */];
        this.showSplash = true;
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(2500).subscribe(function () { return _this.showSplash = false; });
    }
    SplashscreenPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__welcome_welcome__["a" /* WelcomePage */]);
    };
    SplashscreenPage.prototype.Netflixsound = function () {
        this.smartAudio.play('opening');
    };
    SplashscreenPage.prototype.GobacktoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__welcome_welcome__["a" /* WelcomePage */]);
    };
    SplashscreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashscreenPage');
    };
    SplashscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-splashscreen',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/'<div *ngIf="showSplash" class="splash">\n\n  <ion-content>\n\n    <div class="sk-cube-grid">\n\n      <div class="sk-cube sk-cube1"></div>\n\n      <div class="sk-cube sk-cube2"></div>\n\n      <div class="sk-cube sk-cube3"></div>\n\n      <div class="sk-cube sk-cube4"></div>\n\n      <div class="sk-cube sk-cube5"></div>\n\n      <div class="sk-cube sk-cube6"></div>\n\n      <div class="sk-cube sk-cube7"></div>\n\n      <div class="sk-cube sk-cube8"></div>\n\n      <div class="sk-cube sk-cube9"></div>\n\n    </div>\n\n    <div class="titre" textalign="center">\n\n        <h1>Chargement en cours...</h1>\n\n    </div>\n\n    <img class="fullscreen" class="bounce1" src="../assets/img/isiko-SplashScreen.png">\n\n  </ion-content>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\splashscreen\splashscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashscreenPage);
    return SplashscreenPage;
}());

//# sourceMappingURL=splashscreen.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_expos_expos__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_favorites_favorites__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_core_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_core_user_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__environment_environment__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_plus__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_twitter_connect__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_smart_audio_smart_audio__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers__["b" /* Settings */](storage, {
        option1: true,
        option2: 'ISIKO',
        option3: '3',
        option4: 'Android APP'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_25__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addcomment/addcomment.module#AddcommentPageModule', name: 'AddcommentPage', segment: 'addcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allcomment/allcomment.module#AllcommentPageModule', name: 'AllcommentPage', segment: 'allcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/core/core.module#CorePageModule', name: 'CorePage', segment: 'core', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expos-details/expos-details.module#ExposDetailsPageModule', name: 'ExposDetailsPage', segment: 'expos-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-favorites/my-favorites.module#MyFavoritesPageModule', name: 'MyFavoritesPage', segment: 'my-favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splashscreen/splashscreen.module#SplashscreenPageModule', name: 'SplashscreenPage', segment: 'splashscreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_signup_signup__["a" /* SignupPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["c" /* User */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthServices */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_32__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__providers__["b" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_expos_expos__["a" /* ExposProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_favorites_favorites__["a" /* FavoritesProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthServices */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_21__pages_core_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_22__pages_core_user_service__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'https://isiko.restlet.net:443/v2/loginUsers/';
var AuthServices = /** @class */ (function () {
    function AuthServices(http) {
        this.http = http;
        this.url = 'https://isiko.restlet.net/v2/loginUsers/';
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServices.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(apiUrl, JSON.stringify(credentials))
                .subscribe(function (res) {
                // resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //
    //
    AuthServices.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/', reqOpts);
    };
    AuthServices.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/', body, reqOpts);
    };
    AuthServices.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/', body, reqOpts);
    };
    AuthServices.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/', reqOpts);
    };
    AuthServices.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/', body, reqOpts);
    };
    AuthServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServices);
    return AuthServices;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(173);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, restProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
        menuCtrl.swipeEnable(false);
        this.getUsers();
    }
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomePage.prototype.expo_detail = function (id) {
        console.log("MY ID :" + id);
        this.navCtrl.push('ExposDetailsPage', { user: id });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\home\home.html"*/'<ion-content>\n\n    <div class="title">\n\n      <button ion-button [menuToggle]>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </div>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let user of users" (click)="expo_detail(user.id)">\n\n      <div class="row">\n\n      <div class="blackscreen"></div>\n\n    <div class="titleexpo">\n\n      <h2>{{user.name}}</h2>\n\n    </div>\n\n    <div class="texthomepage">\n\n      <p>{{user.artists}}</p>\n\n    </div>\n\n\n\n    <div class="imghome">\n\n      <img class="listemenuimage" src="{{user.image_ios}}">\n\n    </div>\n\n    </div>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_twitter_connect__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment_environment__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, fb, googlePlus, tw, platform) {
        this.afAuth = afAuth;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.tw = tw;
        this.platform = platform;
    }
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.googlePlus.login({
                    'scopes': '',
                    'webClientId': __WEBPACK_IMPORTED_MODULE_8__environment_environment__["a" /* environment */].googleWebClientId,
                    'offline': true
                }).then(function (response) {
                    var googleCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider.credential(response.idToken);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(googleCredential)
                        .then(function (user) {
                        resolve();
                    });
                }, function (err) {
                    reject(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
                    .then(function (user) {
                    resolve();
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                //["public_profile"] is the array of permissions, you can add more if you need
                _this.fb.login(["public_profile"])
                    .then(function (response) {
                    var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(facebookCredential)
                        .then(function (user) { return resolve(); });
                }, function (err) { return reject(err); });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
                    .then(function (result) {
                    //Default facebook img is too small and we need a bigger image
                    var bigImgUrl = "https://graph.facebook.com/" + result.additionalUserInfo.profile + "/picture?height=500";
                    // update profile to save the big fb profile img.
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.updateProfile({
                        displayName: result.user.displayName,
                        photoURL: bigImgUrl
                    }).then(function (res) { return resolve(); }, function (err) {
                        reject(err);
                    });
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if we are in a mobile device we use the twitter native plugin
            if (_this.platform.is('cordova')) {
                _this.tw.login()
                    .then(function (response) {
                    var twitterCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider.credential(response.token, response.secret);
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(twitterCredential)
                        .then(function (user) { return resolve(); }, function (error) { return reject(error); });
                }, function (err) {
                    console.log(err);
                    reject(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider())
                    .then(function (result) {
                    //Default twitter img is just 48x48px and we need a bigger image https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
                    var bigImgUrl = (result.user.photoURL).replace('_normal', '_400x400');
                    // update profile to save the big tw profile img.
                    __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.updateProfile({
                        displayName: result.user.displayName,
                        photoURL: bigImgUrl
                    }).then(function (res) { return resolve(); }, function (err) {
                        reject(err);
                    });
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(190);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(345);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_splashscreen_splashscreen__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, menuCtrl, smartAudio, modalCtrl, nativeAudio) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.nativeAudio = nativeAudio;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__["a" /* WelcomePage */];
        this.FirstRunPage = __WEBPACK_IMPORTED_MODULE_11__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */];
        this.showSplash = true; // <-- show animation
        this.pages = [
            { title: 'Liste des expositions', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */] },
            { title: 'Ma liste de favoris', component: 'MyFavoritesPage' },
            { title: 'Mon profil', component: 'MyProfilePage' },
            { title: 'FeedBack', component: 'FeedbackPage' },
        ];
        platform.ready().then(function () {
            _this.menuCtrl.enable(false);
            menuCtrl.swipeEnable(false);
            // smartAudio.play('opening');
            _this.statusBar.styleDefault();
            splashScreen.hide(); // <-- hide static image
            Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
            // this.splashScreen.hide();  // <-- hide static image
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            smartAudio.preload('opening', 'assets/img/isiko-opening.mp3');
            smartAudio.play('opening');
        });
        this.initTranslate();
    }
    MyApp.prototype.ionViewDidLoad = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('fr');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('fr'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.menuCtrl.swipeEnable(false);
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button class=\"myboutton\" menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__providers__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ExposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExposProvider = /** @class */ (function () {
    function ExposProvider(http) {
        this.http = http;
        this.apiUrlexpos = 'https://isiko.restlet.net/v2/getExhibitionses/';
        console.log('Hello ExposProvider Provider');
    }
    ExposProvider.prototype.getExpos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrlexpos).subscribe(function (dataexpos) {
                resolve(dataexpos);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ExposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ExposProvider);
    return ExposProvider;
}());

//# sourceMappingURL=expos.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoritesProvider = /** @class */ (function () {
    function FavoritesProvider(http) {
        this.http = http;
        this.apiUrl = 'https://isiko.restlet.net/v2/getUser_Favoriteses/';
        console.log('Hello FavoritesProvider Provider');
    }
    FavoritesProvider.prototype.getFavorit = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    FavoritesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FavoritesProvider);
    return FavoritesProvider;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmartAudioProvider = /** @class */ (function () {
    function SmartAudioProvider(http, nativeAudio, platform) {
        this.http = http;
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
        console.log('Hello SmartAudioProvider Provider');
    }
    SmartAudioProvider.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudioProvider.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmartAudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], SmartAudioProvider);
    return SmartAudioProvider;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(346);
/* unused harmony reexport Items */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(710);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(711);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// ALERT POP UP IMPORT








/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 *
 *
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, alertCtrl, authService, formBuilder, menuCtrl, smartAudio, statusBar, splashScreen, modalCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.smartAudio = smartAudio;
        this.statusBar = statusBar;
        this.nativeAudio = nativeAudio;
        this.showSplash = true; // <-- show animation
        this.errorMessage = '';
        this.cpt = 0;
        this.statusBar.styleDefault();
        menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.showSplash = true;
        Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__["timer"])(2500).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        console.log("AVANT:" + this.cpt);
        // if (this.cpt = 0)
        // {
        //   this.showSplash = true;
        //   smartAudio.preload('opening', 'assets/img/isiko-opening.mp3');
        //   this.Netflix();
        //   this.Netflixsound();
        //   timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
        //   this.cpt++;
        //   console.log("APRESS:" + this.cpt);
        // }
        // if (this.cpt = 1)
        // {
        //   console.log("IF CPT = 1:" + this.cpt);
        //   this.showSplash = false;
        //   this.cpt++;
        // }
    }
    WelcomePage.prototype.login = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.tryLogin = function (value) {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        this.authService.doLogin(value)
            .then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    WelcomePage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    WelcomePage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.menuCtrl.swipeEnable(false);
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    WelcomePage.prototype.Netflix = function () {
        this.smartAudio.play('opening');
    };
    WelcomePage.prototype.Netflixsound = function () {
        this.smartAudio.play('opening');
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.swipeEnable(false);
        this.menuCtrl.enable(false);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\welcome\welcome.html"*/'<div *ngIf="showSplash" class="splash">\n\n  <ion-content>\n\n    <div class="sk-cube-grid">\n\n      <div class="sk-cube sk-cube1"></div>\n\n      <div class="sk-cube sk-cube2"></div>\n\n      <div class="sk-cube sk-cube3"></div>\n\n      <div class="sk-cube sk-cube4"></div>\n\n      <div class="sk-cube sk-cube5"></div>\n\n      <div class="sk-cube sk-cube6"></div>\n\n      <div class="sk-cube sk-cube7"></div>\n\n      <div class="sk-cube sk-cube8"></div>\n\n      <div class="sk-cube sk-cube9"></div>\n\n    </div>\n\n    <div class="titre" textalign="center">\n\n        <h1>Chargement en cours...</h1>\n\n    </div>\n\n    <img class="fullscreen" class="bounce1" src="../assets/img/isiko-SplashScreen.png">\n\n  </ion-content>\n\n\n\n</div>\n\n<ion-content scroll="false">\n\n  <div class="blackbg"></div>\n\n  <div class="splash-bg"></div>\n\n  <div class="contenthomepage">\n\n    <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button block (click)="signup()">{{ \'INSCRIPTION\'}}</button>\n\n    <button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>\n\n    <button ion-button icon-left block clear (click)="tryGoogleLogin()">\n\n      <ion-icon name="logo-google"></ion-icon>\n\n      Se connecter avec Google\n\n    </button>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map