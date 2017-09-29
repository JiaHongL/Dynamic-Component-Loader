webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_page_signup_page_signup_component__ = __webpack_require__("../../../../../src/app/pages/page-signup/page-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_page_two_page_two_component__ = __webpack_require__("../../../../../src/app/pages/page-two/page-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_page_one_page_one_component__ = __webpack_require__("../../../../../src/app/pages/page-one/page-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'page1', component: __WEBPACK_IMPORTED_MODULE_2__pages_page_one_page_one_component__["a" /* PageOneComponent */]
    },
    {
        path: 'page2', component: __WEBPACK_IMPORTED_MODULE_1__pages_page_two_page_two_component__["a" /* PageTwoComponent */]
    },
    {
        path: 'join', component: __WEBPACK_IMPORTED_MODULE_0__pages_page_signup_page_signup_component__["a" /* PageSignupComponent */]
    },
    {
        path: '**',
        redirectTo: 'page2',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes, {
                useHash: true,
                enableTracing: false
            })],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <!-- header -->\n  <div class=\"page-header\">\n    <nav class=\"menu\">\n      <ul>\n        <li><a href=\"#\" routerLinkActive=\"active\" [routerLink]=\"['/page1']\">Page1</a></li>\n        <li><a href=\"#\" routerLinkActive=\"active\" [routerLink]=\"['/page2']\">Page2</a></li>\n        <li><a href=\"#\" routerLinkActive=\"active\" [routerLink]=\"['/join']\">Join</a></li>\n      </ul>\n    </nav>\n  </div>\n  <!-- header -->\n  <!-- page -->\n  <div class=\"page-content\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- page end-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  margin: 5px 80px 5px 80px; }\n  .page .page-header .menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #808080;\n    height: 50px; }\n    .page .page-header .menu ul {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 100%;\n              flex: 1 1 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .page .page-header .menu ul li {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 80px;\n                flex: 0 0 80px; }\n        .page .page-header .menu ul li a {\n          color: white; }\n        .page .page-header .menu ul li .active {\n          color: blue;\n          font-weight: 500; }\n  .page .page-content {\n    padding: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_ad_ad_module__ = __webpack_require__("../../../../../src/app/feature/ad/ad.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_lorem_ipsum__ = __webpack_require__("../../../../ngx-lorem-ipsum/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page_one_page_one_component__ = __webpack_require__("../../../../../src/app/pages/page-one/page-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page_two_page_two_component__ = __webpack_require__("../../../../../src/app/pages/page-two/page-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_signup_page_signup_component__ = __webpack_require__("../../../../../src/app/pages/page-signup/page-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_page_one_page_one_component__["a" /* PageOneComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_page_two_page_two_component__["a" /* PageTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_page_signup_page_signup_component__["a" /* PageSignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_lorem_ipsum__["a" /* NgxLoremIpsumModule */],
            __WEBPACK_IMPORTED_MODULE_0__feature_ad_ad_module__["a" /* AdModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-1/ad-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ad\" [style.background-image]=\"'url(' + backgroundImg + ')'\">\n  <span class=\"title\">{{Title}}</span>\n  <i  class=\"ad-close fa fa-window-close fa-lg\" aria-hidden=\"true\" (click)=\"colse()\"></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-1/ad-1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ad {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  border: 2px solid blanchedalmond;\n  border-radius: 2px;\n  margin: 10px 0px 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: blanchedalmond;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  color: white; }\n  .ad .title {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    font-size: 100px; }\n  .ad .ad-close {\n    position: absolute;\n    right: -10px;\n    top: -8px;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-1/ad-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ad1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Ad1Component = (function () {
    function Ad1Component() {
        this.backgroundImg = 'assets/images/banner1.png';
        this.CloseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(Ad1Component.prototype, "Title", {
        get: function () {
            return this._title;
        },
        set: function (v) {
            this._title = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ad1Component.prototype, "BannerList", {
        get: function () {
            return this._bannerList;
        },
        set: function (v) {
            this._bannerList = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ad1Component.prototype, "Period", {
        get: function () {
            return this._period;
        },
        set: function (v) {
            this._period = v;
        },
        enumerable: true,
        configurable: true
    });
    Ad1Component.prototype.colse = function () {
        this.CloseEvent.emit();
    };
    Ad1Component.prototype.setBanner = function (BannerList, Period) {
        var _this = this;
        if (this.TimerSubscription) {
            this.TimerSubscription.unsubscribe();
        }
        var count = BannerList.length - 1;
        var i = 0;
        this.TimerSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(0, Period).subscribe(function (v) {
            _this.backgroundImg = BannerList[i].url;
            i++;
            if (i > count) {
                i = 0;
            }
            ;
        });
    };
    Ad1Component.prototype.ngOnInit = function () {
        this.setBanner(this.BannerList, this.Period);
        // console.log('Ad1Component Created :' + new Date());
    };
    Ad1Component.prototype.ngOnDestroy = function () {
        this.TimerSubscription.unsubscribe();
        // console.log('Ad1Component OnDestroy :' + new Date());
    };
    return Ad1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Ad1Component.prototype, "Title", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Ad1Component.prototype, "BannerList", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Ad1Component.prototype, "Period", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], Ad1Component.prototype, "CloseEvent", void 0);
Ad1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ad-1',
        template: __webpack_require__("../../../../../src/app/feature/ad/ad-1/ad-1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feature/ad/ad-1/ad-1.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Ad1Component);

//# sourceMappingURL=ad-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-2/ad-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ad\">\n  <iframe class=\"video\" [src]=\"Url\" frameborder=\"0\" allowfullscreen></iframe>\n  <i class=\"ad-close fa fa-window-close fa-lg\" aria-hidden=\"true\" (click)=\"colse()\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-2/ad-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ad {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  border: 2px solid blanchedalmond;\n  border-radius: 2px;\n  margin: 5px 0px 10px 0px; }\n  .ad .video {\n    width: 100%;\n    height: 100%; }\n  .ad .ad-close {\n    position: absolute;\n    right: -10px;\n    top: -8px;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-2/ad-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ad2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ad2Component = (function () {
    function Ad2Component(sanitizer) {
        this.sanitizer = sanitizer;
        this.CloseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(Ad2Component.prototype, "Url", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this._url);
        },
        set: function (v) {
            this._url = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ad2Component.prototype, "IsAutoplay", {
        get: function () {
            return this._IsAutoplay;
        },
        set: function (v) {
            this._IsAutoplay = v;
            if (this._IsAutoplay) {
                this._url += '?autoplay=1';
            }
        },
        enumerable: true,
        configurable: true
    });
    Ad2Component.prototype.colse = function () {
        this.CloseEvent.emit();
    };
    Ad2Component.prototype.ngOnInit = function () {
        // console.log('Ad2Component Created :' + new Date());
    };
    Ad2Component.prototype.ngOnDestroy = function () {
        // console.log('Ad2Component OnDestroy :' + new Date());
    };
    return Ad2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Ad2Component.prototype, "Url", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Ad2Component.prototype, "IsAutoplay", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], Ad2Component.prototype, "CloseEvent", void 0);
Ad2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ad-2',
        template: __webpack_require__("../../../../../src/app/feature/ad/ad-2/ad-2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feature/ad/ad-2/ad-2.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], Ad2Component);

var _a;
//# sourceMappingURL=ad-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-3/ad-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ad\">\n  <a class=\"btn\" (click)=\"join()\">Sign-Up</a>\n  <i class=\"ad-close fa fa-window-close fa-lg\" aria-hidden=\"true\" (click)=\"colse()\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-3/ad-3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ad {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  border: 2px solid blanchedalmond;\n  border-radius: 2px;\n  margin: 10px 0px 10px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner4.png") + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n  .ad .btn {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding: 5px 50px 5px 50px;\n    border-radius: 10px;\n    font-size: 21px;\n    font-weight: 600;\n    line-height: 42px;\n    background-color: rgba(181, 33, 255, 0.85);\n    color: white;\n    letter-spacing: 1px; }\n    .ad .btn:hover {\n      background-color: #A807F8; }\n  .ad .ad-close {\n    position: absolute;\n    right: -10px;\n    top: -8px;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad-3/ad-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ad3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ad3Component = (function () {
    function Ad3Component() {
        this.CloseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.JoinEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // setInterval(()=>{
        //   this.JoinEvent.emit();
        // },1000);
    }
    Ad3Component.prototype.colse = function () {
        this.CloseEvent.emit();
    };
    Ad3Component.prototype.join = function () {
        this.JoinEvent.emit();
    };
    Ad3Component.prototype.ngOnInit = function () {
        // console.log('Ad3Component Created :' + new Date());
    };
    Ad3Component.prototype.ngOnDestroy = function () {
        // console.log('Ad3Component OnDestroy :' + new Date());
    };
    return Ad3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], Ad3Component.prototype, "CloseEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], Ad3Component.prototype, "JoinEvent", void 0);
Ad3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ad-3',
        template: __webpack_require__("../../../../../src/app/feature/ad/ad-3/ad-3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feature/ad/ad-3/ad-3.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Ad3Component);

//# sourceMappingURL=ad-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdDirective = (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return AdDirective;
}());
AdDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[dynamic-Ad]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object])
], AdDirective);

var _a;
//# sourceMappingURL=ad.directive.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ad_directive__ = __webpack_require__("../../../../../src/app/feature/ad/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ad_service__ = __webpack_require__("../../../../../src/app/feature/ad/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_1_ad_1_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-1/ad-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ad_2_ad_2_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-2/ad-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ad_3_ad_3_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-3/ad-3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdModule = (function () {
    function AdModule() {
    }
    return AdModule;
}());
AdModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__ad_directive__["a" /* AdDirective */], __WEBPACK_IMPORTED_MODULE_4__ad_1_ad_1_component__["a" /* Ad1Component */], __WEBPACK_IMPORTED_MODULE_5__ad_2_ad_2_component__["a" /* Ad2Component */], __WEBPACK_IMPORTED_MODULE_6__ad_3_ad_3_component__["a" /* Ad3Component */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__ad_directive__["a" /* AdDirective */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__ad_1_ad_1_component__["a" /* Ad1Component */], __WEBPACK_IMPORTED_MODULE_5__ad_2_ad_2_component__["a" /* Ad2Component */], __WEBPACK_IMPORTED_MODULE_6__ad_3_ad_3_component__["a" /* Ad3Component */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ad_service__["a" /* AdService */]]
    })
], AdModule);

//# sourceMappingURL=ad.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature/ad/ad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ad_3_ad_3_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-3/ad-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ad_2_ad_2_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-2/ad-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_1_ad_1_component__ = __webpack_require__("../../../../../src/app/feature/ad/ad-1/ad-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdService = (function () {
    function AdService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.components = {
            ad1: __WEBPACK_IMPORTED_MODULE_2__ad_1_ad_1_component__["a" /* Ad1Component */],
            ad2: __WEBPACK_IMPORTED_MODULE_1__ad_2_ad_2_component__["a" /* Ad2Component */],
            ad3: __WEBPACK_IMPORTED_MODULE_0__ad_3_ad_3_component__["a" /* Ad3Component */]
        };
    }
    AdService.prototype.creatComponent = function (ViewContainerRef, ComponentName, Inputs) {
        this.createComponentFactory(ViewContainerRef, ComponentName, Inputs);
    };
    AdService.prototype.createComponentFactory = function (ViewContainerRef, ComponentName, Inputs) {
        // 如果已經有component時,先讓component做OnDestroy的動作.
        if (this.currentComponentRef) {
            this.onDestroy();
        }
        ;
        // 1.取得要動態產生component的directive
        this.currentViewContainerRef = ViewContainerRef;
        // 2.準備一個要產生的component
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[ComponentName]);
        // 3.清除directive裡的東西
        this.currentViewContainerRef.clear();
        // 4.創建component並取得ref
        this.currentComponentRef = this.currentViewContainerRef.createComponent(componentFactory);
        // 5.設定component的Input欄位(初始化賦值)
        if (Inputs) {
            this.setInputs(Inputs);
        }
        ;
        // ng serve /ng serve --aot=true / ng build  正常 , 
        // 但 ng serve --prod / ng build --prod  會有問題 , 待解決. 
        this.currentComponentName = this.currentComponentRef.componentType.name;
        console.log(this.currentComponentRef.componentType); // 正常時 console.log 立即顯示,有問題時會慢幾秒顯示.
        console.log(this.currentComponentRef.componentType.name); //正常時得到 component name,有問題時得到 n.
    };
    AdService.prototype.setInputs = function (Inputs) {
        var _this = this;
        Inputs.forEach(function (val, index) {
            var name = val['InputName'], data = val['InputData'];
            _this.currentComponentRef.instance[name] = data;
        });
    };
    // 更新賦值
    AdService.prototype.updataInput = function (InputName, InputData) {
        this.currentComponentRef.instance[InputName] = InputData;
    };
    // 回傳 output EventEmitter , 讓父Component做訂閱.
    AdService.prototype.getOutput = function (OutputName) {
        return this.currentComponentRef.instance[OutputName];
    };
    // 被創建Component的ondestroy
    AdService.prototype.onDestroy = function () {
        this.currentComponentRef.destroy();
        this.currentComponentName = '';
        // console.log('AdService.onDestroy()');
    };
    // 清除view 和 onDestroy()
    AdService.prototype.onClear = function () {
        this.currentViewContainerRef.clear();
        this.onDestroy();
        // console.log('AdService.onClear()');
    };
    return AdService;
}());
AdService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], AdService);

var _a;
//# sourceMappingURL=ad.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-one/page-one.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\" [innerHTML]=\"randomTitle\"></h1>\n<ng-template dynamic-Ad></ng-template>\n<div class=\"content\" [innerHTML]=\"randomText\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/page-one/page-one.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-family: medium-content-sans-serif-font,\"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif;\n  letter-spacing: -.02em;\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0;\n  font-size: 40px;\n  margin-left: -2.5px;\n  line-height: 1.04;\n  letter-spacing: -.028em;\n  margin: 5px 0px 20px 0px; }\n\n.content {\n  font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n  letter-spacing: .01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 1.58;\n  letter-spacing: -.003em; }\n\n.btn {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding: 5px 15px 5px 15px;\n  border-radius: 10px;\n  font-size: 21px;\n  font-weight: 600;\n  line-height: 42px;\n  background: #4ca74c;\n  color: white;\n  letter-spacing: 1px; }\n  .btn:hover {\n    background: #408840; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-one/page-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_ad_ad_service__ = __webpack_require__("../../../../../src/app/feature/ad/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_ad_ad_directive__ = __webpack_require__("../../../../../src/app/feature/ad/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_lorem_ipsum__ = __webpack_require__("../../../../ngx-lorem-ipsum/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageOneComponent = (function () {
    function PageOneComponent(NgxLoremIpsumService, AdService, router) {
        this.NgxLoremIpsumService = NgxLoremIpsumService;
        this.AdService = AdService;
        this.router = router;
        this.randomTitle = this.NgxLoremIpsumService.get(1);
        this.randomText = this.NgxLoremIpsumService.getRandom(15, 40, 3);
    }
    PageOneComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var viewContainerRef = this.componentHost.viewContainerRef;
        var type = this.getRandom(1, 3);
        var params = [];
        switch (type) {
            case 1:
                params = [{
                        'InputName': 'Title',
                        'InputData': '速度:4s'
                    }, {
                        'InputName': 'BannerList',
                        'InputData': [{
                                url: 'assets/images/banner1.png'
                            }, {
                                url: 'assets/images/banner2.png'
                            }, {
                                url: 'assets/images/banner3.png'
                            }, {
                                url: 'assets/images/banner4.png'
                            }]
                    }, {
                        'InputName': 'Period',
                        'InputData': 4000
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad1', params);
                break;
            case 2:
                params = [{
                        'InputName': 'Url',
                        'InputData': 'https://www.youtube.com/embed/nYm3hZqFbqE'
                    }, {
                        'InputName': 'IsAutoplay',
                        'InputData': true
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad2', params);
                break;
            case 3:
                this.AdService.creatComponent(viewContainerRef, 'ad3');
                var join$ = this.AdService.getOutput('JoinEvent');
                this.JoinSubscription = join$.subscribe(function (event) { _this.router.navigate(['/join']); });
                break;
            default:
                params = [{
                        'InputName': 'Title',
                        'InputData': '文字Ad'
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad1', params);
                break;
        }
        // 關閉Ad
        var close$ = this.AdService.getOutput('CloseEvent');
        this.CloseSubscription = close$.subscribe(function (event) {
            _this.AdService.onClear();
            _this.allSubscriptionUnsubscribe();
        });
    };
    PageOneComponent.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    PageOneComponent.prototype.allSubscriptionUnsubscribe = function () {
        if (this.CloseSubscription) {
            this.CloseSubscription.unsubscribe();
        }
        if (this.JoinSubscription) {
            this.JoinSubscription.unsubscribe();
        }
    };
    PageOneComponent.prototype.ngOnInit = function () {
    };
    PageOneComponent.prototype.ngOnDestroy = function () {
        this.allSubscriptionUnsubscribe();
        this.AdService.onDestroy();
    };
    return PageOneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__feature_ad_ad_directive__["a" /* AdDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feature_ad_ad_directive__["a" /* AdDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feature_ad_ad_directive__["a" /* AdDirective */]) === "function" && _a || Object)
], PageOneComponent.prototype, "componentHost", void 0);
PageOneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-page-one',
        template: __webpack_require__("../../../../../src/app/pages/page-one/page-one.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-one/page-one.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__feature_ad_ad_service__["a" /* AdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__feature_ad_ad_service__["a" /* AdService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], PageOneComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-signup/page-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <form action=\"#\" method=\"post\">\n    <h1>Create Account</h1>\n    <p>\n      <label for=\"user\">User Name:</label>\n      <input id=\"user\" type=\"text\" >\n    </p>\n    <p>\n      <label for=\"mail\">Email:</label>\n      <input id=\"mail\" type=\"text\" >\n    </p>\n    <p>\n      <label for=\"pword\">Password:</label>\n      <input id=\"pword\" type=\"password\">\n    </p>\n    <input type=\"submit\" value=\"Submit\" id=\"submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/page-signup/page-signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  width: 80%;\n  height: 400px;\n  border-radius: 3%;\n  margin: 0 auto;\n  padding: 20px;\n  background: #A4C9D4; }\n  #wrapper h1 {\n    text-align: center;\n    font-family: \"Permanent Marker\", sans-serif;\n    font-size: 2.45em;\n    margin: 10px 0px 40px 0px; }\n  #wrapper P {\n    margin-bottom: 15px; }\n  #wrapper input[type=\"text\"],\n  #wrapper input[type=\"password\"],\n  #wrapper label {\n    margin-left: 20%; }\n  #wrapper input[type=\"text\"],\n  #wrapper input[type=\"password\"] {\n    width: 55.556%;\n    height: 30px;\n    display: block;\n    margin-top: 10px;\n    magin-bottom: 15px;\n    box-shadow: 5px 5px 5px gray;\n    -webkit-box-shadow: 5px 5px 5px gray;\n    -moz-box-shadow: 5px 5px 5px gray;\n    -webkit-border: 1px solid;\n    -moz-border: 1px solid;\n    -o-border: 1px solid;\n    border: 1px solid;\n    font-family: \"Oswald\", sans-serif;\n    font-size: 0.95em;\n    letter-spacing: 1px; }\n  #wrapper input[type=\"submit\"] {\n    font-family: \"Permanent Marker\", Charcoal, sans-serif;\n    font-size: 1.3em;\n    margin: 3% 0 0 26%;\n    padding: .615%;\n    width: 45%;\n    height: 40px;\n    background-color: #555;\n    border: solid transparent;\n    border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-signup/page-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageSignupComponent = (function () {
    function PageSignupComponent() {
    }
    PageSignupComponent.prototype.ngOnInit = function () { };
    return PageSignupComponent;
}());
PageSignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-signup',
        template: __webpack_require__("../../../../../src/app/pages/page-signup/page-signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-signup/page-signup.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageSignupComponent);

//# sourceMappingURL=page-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-two/page-two.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-primary\" [ngClass]=\"{active: AdService.currentComponentName=='Ad1Component'}\" (click)=\"createAD(1)\">圖片廣告</button>\n<input type=\"\" name=\"\" [ngModel]=\"AdTitle\" (ngModelChange)=\"updateAction($event)\"  *ngIf=\"AdService.currentComponentName=='Ad1Component'\">\n<button class=\"btn btn-outline-primary\" [ngClass]=\"{active: AdService.currentComponentName=='Ad2Component'}\" (click)=\"createAD(2)\">影片廣告</button>\n<button class=\"btn btn-outline-primary\" [ngClass]=\"{active: AdService.currentComponentName=='Ad3Component'}\" (click)=\"createAD(3)\">註冊廣告</button>\n\n<h1 class=\"title\" [innerHTML]=\"randomTitle\"></h1>\n<ng-template dynamic-Ad></ng-template>\n<div class=\"content\" [innerHTML]=\"randomText\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/page-two/page-two.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-family: medium-content-sans-serif-font,\"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif;\n  letter-spacing: -.02em;\n  font-weight: 700;\n  font-style: normal;\n  letter-spacing: 0;\n  font-size: 40px;\n  margin-left: -2.5px;\n  line-height: 1.04;\n  letter-spacing: -.028em;\n  margin: 5px 0px 20px 0px; }\n\n.content {\n  font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n  letter-spacing: .01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 1.58;\n  letter-spacing: -.003em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-two/page-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_lorem_ipsum__ = __webpack_require__("../../../../ngx-lorem-ipsum/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_ad_ad_service__ = __webpack_require__("../../../../../src/app/feature/ad/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_ad_ad_directive__ = __webpack_require__("../../../../../src/app/feature/ad/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageTwoComponent = (function () {
    function PageTwoComponent(NgxLoremIpsumService, AdService, router) {
        this.NgxLoremIpsumService = NgxLoremIpsumService;
        this.AdService = AdService;
        this.router = router;
        this.randomTitle = this.NgxLoremIpsumService.get(1);
        this.randomText = this.NgxLoremIpsumService.getRandom(15, 40, 3);
    }
    PageTwoComponent.prototype.createAD = function (type) {
        var _this = this;
        this.allSubscriptionUnsubscribe();
        var viewContainerRef = this.componentHost.viewContainerRef;
        var params = [];
        switch (type) {
            case 1:
                this.AdTitle = '可修改文字';
                params = [{
                        'InputName': 'Title',
                        'InputData': this.AdTitle
                    }, {
                        'InputName': 'BannerList',
                        'InputData': [{
                                url: 'assets/images/banner1.png'
                            }, {
                                url: 'assets/images/banner2.png'
                            }, {
                                url: 'assets/images/banner3.png'
                            }, {
                                url: 'assets/images/banner4.png'
                            }]
                    }, {
                        'InputName': 'Period',
                        'InputData': 3000
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad1', params);
                break;
            case 2:
                params = [{
                        'InputName': 'Url',
                        'InputData': 'https://www.youtube.com/embed/nYm3hZqFbqE'
                    }, {
                        'InputName': 'IsAutoplay',
                        'InputData': true
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad2', params);
                break;
            case 3:
                this.AdService.creatComponent(viewContainerRef, 'ad3');
                var join$ = this.AdService.getOutput('JoinEvent');
                this.JoinSubscription = join$.subscribe(function (event) { _this.router.navigate(['/join']); });
                break;
            default:
                params = [{
                        'InputName': 'Title',
                        'InputData': '文字Ad'
                    }];
                this.AdService.creatComponent(viewContainerRef, 'ad1', params);
                break;
        }
        // 關閉Ad
        var close$ = this.AdService.getOutput('CloseEvent');
        this.CloseSubscription = close$.subscribe(function (event) { _this.AdService.onClear(); });
    };
    PageTwoComponent.prototype.updateAction = function (v) {
        this.AdService.updataInput('Title', v);
    };
    PageTwoComponent.prototype.allSubscriptionUnsubscribe = function () {
        if (this.CloseSubscription) {
            this.CloseSubscription.unsubscribe();
        }
        if (this.JoinSubscription) {
            this.JoinSubscription.unsubscribe();
        }
    };
    PageTwoComponent.prototype.ngAfterContentInit = function () {
        this.createAD(1);
    };
    PageTwoComponent.prototype.ngOnInit = function () {
    };
    PageTwoComponent.prototype.ngOnDestroy = function () {
        this.allSubscriptionUnsubscribe();
        this.AdService.onDestroy();
    };
    return PageTwoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__feature_ad_ad_directive__["a" /* AdDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__feature_ad_ad_directive__["a" /* AdDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__feature_ad_ad_directive__["a" /* AdDirective */]) === "function" && _a || Object)
], PageTwoComponent.prototype, "componentHost", void 0);
PageTwoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-page-two',
        template: __webpack_require__("../../../../../src/app/pages/page-two/page-two.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-two/page-two.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__feature_ad_ad_service__["a" /* AdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__feature_ad_ad_service__["a" /* AdService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _d || Object])
], PageTwoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-two.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/banner4.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner4.525f30105f47c4a75a41.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map