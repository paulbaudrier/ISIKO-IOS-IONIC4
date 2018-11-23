webpackJsonp([6],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcommentPageModule", function() { return AllcommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allcomment__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllcommentPageModule = /** @class */ (function () {
    function AllcommentPageModule() {
    }
    AllcommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allcomment__["a" /* AllcommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allcomment__["a" /* AllcommentPage */]),
            ],
        })
    ], AllcommentPageModule);
    return AllcommentPageModule;
}());

//# sourceMappingURL=allcomment.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(167);
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
 * Generated class for the AllcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllcommentPage = /** @class */ (function () {
    function AllcommentPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getComment();
        this.value = navParams.get('expos');
    }
    AllcommentPage.prototype.getComment = function () {
        var _this = this;
        this.restProvider.getComment()
            .then(function (data) {
            _this.comments = data;
            console.log("COMMMENT :" + _this.comments);
        });
    };
    AllcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllcommentPage');
        console.log("Ma valeur " + this.value);
    };
    AllcommentPage.prototype.backvisit = function () {
        this.navCtrl.push('AddcommentPage');
    };
    AllcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allcomment',template:/*ion-inline-start:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\allcomment\allcomment.html"*/'<!--\n\n  Generated template for the AllcommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Commentaires Disponible</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n \n\n\n\n<ng-container *ngFor="let comment of comments" class="zeubilamouche">\n\n  <ion-option *ngIf="value == comment.exhibitionID" >\n\n   <p class="commentaire">{{comment.content}}</p>\n\n   <p class="commentaire">{{comment.stars}}</p>\n\n   <p class="commentaire">{{comment.userID}}</p>\n\n  </ion-option>\n\n  \n\n</ng-container>\n\n<br>\n\n<button ion-button block clear (click)="backvisit()">Ajouter mon commentaire !</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\Documents\GitHub\PAUL-BAUDRIER-J-AI-TOUJOURS-RESPECTER\src\pages\allcomment\allcomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], AllcommentPage);
    return AllcommentPage;
}());

//# sourceMappingURL=allcomment.js.map

/***/ })

});
//# sourceMappingURL=6.js.map