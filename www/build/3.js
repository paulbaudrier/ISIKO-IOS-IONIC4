webpackJsonp([3],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.thankyou = function () {
        this.navCtrl.push('ThankyouPage');
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/feedback/feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-title>Donnez votre avis</ion-title>\n    <button class="buttonmenu" ion-button [menuToggle]>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n</ion-header>\n<ion-content>\n    <ion-list inset>\n        <p>Quelle note donnez vous a la page d\'acceuil ?</p>\n        <ionic3-star-rating\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "#488aff"\n        defaultColor = "#f4f4f4"\n        readonly="false"\n        [rating]="3">\n        </ionic3-star-rating>\n        <p>Quelle note donnez vous à la page d\'éxposition ?</p>\n        <ionic3-star-rating\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "#488aff"\n        defaultColor = "#f4f4f4"\n        readonly="false"\n        [rating]="4">\n        </ionic3-star-rating>\n        <p>Quelle note donnez vous à la visite virtuel ?</p>\n        <ionic3-star-rating\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "#488aff"\n        defaultColor = "#f4f4f4"\n        readonly="false"\n        [rating]="2">\n        </ionic3-star-rating>\n        <p>Quelle note donnez vous à l\'ambiance des visites ?</p>\n        <ionic3-star-rating\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "#488aff"\n        defaultColor = "#f4f4f4"\n        readonly="false"\n        [rating]="1">\n        </ionic3-star-rating>\n        <p>Quelle note donnez vous au design de l\'application ?</p>\n        <ionic3-star-rating\n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "#488aff"\n        defaultColor = "#f4f4f4"\n        readonly="false"\n        [rating]="5">\n        </ionic3-star-rating>\n        <br/>\n        <br/>\n\n        <textarea #myInput id="myInput" rows="5" maxLength="500" [(ngModel)]="myStuff" placeholder="Laissez nous un commentaire"></textarea>\n        <button ion-button block (click)="thankyou()">{{ \'Envoyer\'}}</button>\n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/rayan/Documents/GVHP/PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ })

});
//# sourceMappingURL=3.js.map