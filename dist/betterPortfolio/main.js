(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content-slider/content-slider.component */ "./src/app/components/content-slider/content-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'content', component: _components_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_3__["ContentSliderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n  background: url(\"/assets/img/landing.jpg\");\n  background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/content-slider/content-slider.component */ "./src/app/components/content-slider/content-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                _components_content_slider_content_slider_component__WEBPACK_IMPORTED_MODULE_7__["ContentSliderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content-slider/content-slider.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-slider/content-slider.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <ul>\r\n    <li>\r\n      <div class=\"content\">\r\n        <h2>My Story</h2>\r\n        <p>\r\n          <strong>Software</strong> development was not something that I set my sights on at a young age but rather something that I stumbled upon later in life.\r\n        </p>\r\n        <p>\r\n          <strong>From</strong> my own interest in all things related to the Internet and some much need encouragement from my friends, I made a realization that it was something worth pursuing.\r\n        </p>\r\n        <p>\r\n          <strong>After</strong> a leap of faith, I have plunged myself into the vast world of Front End Development and have tried to learn at every turn my journey has taken.\r\n        </p>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"content\">\r\n        <h2>My Hobbies</h2>\r\n        <p><strong>Photography</strong> has been a hobby that I have indulged in for many years. \r\n          I have learned the hard way that you should always have your camera with you but not always use it.\r\n        </p>\r\n        <p>\r\n          <strong>Reading</strong> is a passion of mine since childhood. \r\n          With both of my parents being teachers I was doomed to the life of a bookworm.\r\n        </p>\r\n        <p>   \r\n          <strong>Traveling</strong> is something that came hand in hand with my passion for reading. \r\n          Time after time I would read about places far off and want visit them and experience their cultures first hand.\r\n        </p>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"content\">\r\n        <h2>ANGULAR</h2>\r\n        <h3>RECIPE BOOK</h3>\r\n        <p>This project was developed with Udemy Angular 2/4 course that I took and completed. \r\n          The code scaffolding and build were done using Angular CLI. \r\n          The course work took roughly 22 hours and allowed me to fully understand the changes that were made from Angular 1 to Angular 2/4. \r\n          This application was deployed on AWS.\r\n        </p>\r\n        <button mat-raised-button (click)=\"navigateTo('ngRecipe')\">Visit App</button>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"content contact\">\r\n        <h2>My Information</h2>\r\n        <button mat-raised-button (click)=\"navigateTo('linkedIn')\">LINKEDIN</button>\r\n        <button mat-raised-button (click)=\"navigateTo('gitHub')\">GITHUB</button>\r\n        <button mat-raised-button (click)=\"navigateTo('photoSite')\">PHOTOGRAPHY WEBSITE</button>\r\n        <button mat-raised-button routerLink=\"/\">\r\n          <mat-icon>arrow_back_ios</mat-icon>\r\n          BACK TO HOME\r\n        </button>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content-slider/content-slider.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-slider/content-slider.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin: 0;\n  padding: 0; }\n\nul {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(245, 241, 241, 0.4);\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nul li {\n  list-style: none;\n  position: relative;\n  width: 25%;\n  height: 100%;\n  border-right: 1px solid black;\n  float: left;\n  box-sizing: border-box;\n  transition: .5s;\n  text-align: center;\n  overflow: hidden; }\n\nul li:nth-child(1) {\n  background: url(/assets/img/bnwwindowdesk.jpg);\n  background-size: cover;\n  background-position: center; }\n\nul li:nth-child(2) {\n  background: url(/assets/img/eagleCreekPond.jpg);\n  background-size: cover;\n  background-position: center; }\n\nul li:nth-child(3) {\n  background: url(/assets/img/alpacaFriends.jpg);\n  background-size: cover;\n  background-position: center; }\n\nul li:nth-child(4) {\n  background: url(/assets/img/workoutBuddha.jpg);\n  background-size: cover;\n  background-position: center; }\n\nul:hover li {\n  width: 10%; }\n\nul li:hover {\n  width: 70%; }\n\nul li .content {\n  position: absolute;\n  bottom: -100;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  box-sizing: border-box;\n  color: #fff;\n  opacity: 0; }\n\nul li:hover .content {\n  bottom: 0;\n  transition: .5s;\n  transition-delay: .5s;\n  opacity: 1; }\n\n.contact {\n  display: flex;\n  flex-direction: column; }\n\nstrong {\n  font-size: 18px; }\n\nbutton {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white; }\n\nbutton:hover {\n  background-color: #ccc;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/components/content-slider/content-slider.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-slider/content-slider.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSliderComponent", function() { return ContentSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentSliderComponent = /** @class */ (function () {
    function ContentSliderComponent() {
        this.angularRecipeUrl = 'http://ng-recipe-book.s3-website.us-east-2.amazonaws.com/" target="blank" class="btn btn-default btn-lg';
        this.linkedInUrl = 'https://www.linkedin.com/in/brian-stanley/';
        this.gitHubUrl = 'https://github.com/bristanley';
        this.photoUrl = 'https://brianstanley.me/';
    }
    ContentSliderComponent.prototype.ngOnInit = function () {
    };
    ContentSliderComponent.prototype.navigateTo = function (value) {
        switch (value) {
            case 'ngRecipe':
                window.open(this.angularRecipeUrl);
                break;
            case 'linkedIn':
                window.open(this.linkedInUrl);
                break;
            case 'gitHub':
                window.open(this.gitHubUrl);
                break;
            case 'photoSite':
                window.open(this.photoUrl);
                break;
        }
    };
    ContentSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-slider',
            template: __webpack_require__(/*! ./content-slider.component.html */ "./src/app/components/content-slider/content-slider.component.html"),
            styles: [__webpack_require__(/*! ./content-slider.component.scss */ "./src/app/components/content-slider/content-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentSliderComponent);
    return ContentSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"title-container\">\r\n    <h1>Which Brian do you want to see?</h1>\r\n  </div>\r\n  <div class=\"content-container\">\r\n    <div class=\"box\">\r\n      <div class=\"icon\">\r\n        <mat-icon class=\"fa fa-photo cursor\" (click)=\"goToPhoto()\">photo_camera</mat-icon>\r\n      </div>\r\n      <div class=\"content\">\r\n        <h3>Photographer</h3>\r\n        <p>Landscape Photography has been a passion of mine since I started taking photos\r\n          for fun. I hope you enjoy the moments I was able to capture as much as I enjoyed taking them.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"box\">\r\n      <div class=\"icon\">\r\n        <mat-icon class=\"fa fa-dev cursor\" routerLink=\"/content\">computer</mat-icon>\r\n      </div>\r\n      <div class=\"content\">\r\n        <h3>Frontend Developer</h3>\r\n        <p>Web developement is an interest that quickly became a passion to which I have pursued and made a career out of. I have focused my developement\r\n          in the Angular Framework.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.cursor {\n  cursor: pointer; }\n\n.title-container {\n  width: 800px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.55);\n  border-radius: 10px 10px 0 0; }\n\n.title-container h1 {\n    color: white;\n    font: \"Roboto\" sans-serif; }\n\n.content-container {\n  position: relative;\n  width: 800px;\n  height: 300px;\n  background: rgba(0, 0, 0, 0.55);\n  border-radius: 0 0 10px 10px; }\n\n.content-container .box {\n  position: relative;\n  width: calc(400px - 30px);\n  height: calc(300px - 30px);\n  background: aqua;\n  float: left;\n  margin: 15px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 10px; }\n\n.content-container .box .icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  transition: 0.5s;\n  z-index: 1; }\n\n.content-container .box:hover .icon {\n  top: 20px;\n  left: calc(50% - 40px);\n  width: 80px;\n  height: 80px;\n  border-radius: 50%; }\n\n.content-container .box .icon .fa {\n  position: absolute;\n  top: 40%;\n  left: 42%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 80px;\n  transition: .5s;\n  color: white; }\n\n.content-container .box:hover .icon .fa {\n  font-size: 40px; }\n\n.content-container .box .content {\n  position: absolute;\n  top: 100%;\n  height: calc(100% - 100px);\n  text-align: center;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: .5s;\n  opacity: 0; }\n\n.content-container .box:hover .content {\n  top: 100px;\n  opacity: 1; }\n\n.content-container .box .content h3 {\n  margin: 0 0 10px;\n  padding: 0;\n  color: white;\n  font-size: 24px; }\n\n.content-container .box .content p {\n  margin: 0;\n  padding: 0;\n  color: white; }\n\n.content-container .box:nth-child(1) .icon {\n  background: #319635; }\n\n.content-container .box:nth-child(1) {\n  background: #4caf50; }\n\n.content-container .box:nth-child(2) .icon {\n  background: #23798e; }\n\n.content-container .box:nth-child(2) {\n  background: #328fa5; }\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.photoWebSiteUrl = 'http://brianstanley.myportfolio.com';
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.goToPhoto = function () {
        window.open(this.photoWebSiteUrl);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/components/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Brian\Desktop\projects\betterPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map