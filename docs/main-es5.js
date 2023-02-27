(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orbit Report</h1>\r\n\r\n<div>\r\n\t<app-orbit-list [satellites]=\"displayList\"></app-orbit-list>\r\n</div>\r\n\r\n<div class=\"search-form\">\r\n\tSearch: <input #searchTerm type=\"text\" (keyup.enter)=\"search(searchTerm.value);\" name=\"searchTerm\"/>\r\n\t<button (click)=\"search(searchTerm.value);\">Search</button>\r\n</div>\r\n\r\n<app-orbit-counts [satellites]=\"displayList\"></app-orbit-counts>\r\n\r\n<!-- TODO 1: add list component to app HTML -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orbit-counts/orbit-counts.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orbit-counts/orbit-counts.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Satellite Count:</h3>\r\n<div class=\"counts\">\r\n\t<div>Total: <span class=\"counts-total\">{{satellites.length}}</span>\r\n\r\n\t<p *ngFor=\"let type of getTypeList(satellites)\">\r\n\t\t{{ type }}: <span class=\"counts-total\">{{ countByType(type) }}</span>\r\n\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<!-- TODO 4: add logic to count number of satellites displayed -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orbit-list/orbit-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orbit-list/orbit-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <tr class=\"header-row\">\r\n        <th (click)=\"sort('name')\" class=\"sortable\">Name</th>\r\n        <th (click)=\"sort('type')\" class=\"sortable\">Type</th>\r\n        <th>Operational</th>\r\n        <th>Orbit Type</th>\r\n        <th>Launch Date</th>\r\n    </tr>\r\n    <tr class=\"data-row\" [style.background]=isAltRow(satellite) *ngFor=\"let satellite of satellites\">\r\n        <td>{{satellite.name}}</td>\r\n        <td [class.warning]=\"satellite.isSpaceDebris()\">{{satellite.type}}</td> \r\n        <td>{{satellite.operational}}</td>\r\n        <td>{{satellite.orbitType}}</td>\r\n        <td>{{satellite.launchDate}}</td>\r\n    </tr>\r\n</table>\r\n\r\n<!-- TODO 3b: add style directive to conditionally highlight satellite type -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form {\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\nbutton {\r\n\tmargin-left: 10px;\r\n\tcolor: #fff;\r\n\tbackground-color: #009b25;\r\n\tborder-radius: 4px;\r\n\tpadding: 2px 5px;\r\n\tfont-size: 18px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWIyNTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0cGFkZGluZzogMnB4IDVweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _satellite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./satellite */ "./src/app/satellite.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'orbit-report';
        this.sourceList = [];
        this.displayList = [];
        var satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
        window.fetch(satellitesUrl).then(function (response) {
            response.json().then(function (data) {
                var fetchedSatellites = data.satellites;
                // loop over satellites
                for (var i = 0; i < fetchedSatellites.length; i++) {
                    // create a Satellite object 
                    var satellite = new _satellite__WEBPACK_IMPORTED_MODULE_2__["Satellite"](fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
                    // add the new Satellite object to sourceList 
                    this.sourceList.push(satellite);
                }
                // make a copy of the sourceList to be shown to the user
                this.displayList = this.sourceList.slice(0);
            }.bind(this));
        }.bind(this));
    }
    AppComponent.prototype.search = function (searchTerm) {
        var matchingSatellites = [];
        searchTerm = searchTerm.toLowerCase();
        for (var i = 0; i < this.sourceList.length; i++) {
            var name_1 = this.sourceList[i].name.toLowerCase();
            var type = this.sourceList[i].type.toLowerCase();
            var orbit = this.sourceList[i].orbitType.toLowerCase();
            if (name_1.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
            else if (type.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
            else if (orbit.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
        }
        // assign this.displayList to be the array of matching satellites
        // this will cause Angular to re-make the table, but now only containing matches
        this.displayList = matchingSatellites;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orbit-list/orbit-list.component */ "./src/app/orbit-list/orbit-list.component.ts");
/* harmony import */ var _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orbit-counts/orbit-counts.component */ "./src/app/orbit-counts/orbit-counts.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _orbit_list_orbit_list_component__WEBPACK_IMPORTED_MODULE_4__["OrbitListComponent"],
                _orbit_counts_orbit_counts_component__WEBPACK_IMPORTED_MODULE_5__["OrbitCountsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/orbit-counts/orbit-counts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/orbit-counts/orbit-counts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counts {\r\n\tbackground: #34495E;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\twidth: 225px;\r\n}\r\n\r\n.counts div {\r\n\tpadding: 8px;\r\n}\r\n\r\n.counts span {\r\n\tfloat: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JiaXQtY291bnRzL29yYml0LWNvdW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvb3JiaXQtY291bnRzL29yYml0LWNvdW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50cyB7XHJcblx0YmFja2dyb3VuZDogIzM0NDk1RTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0d2lkdGg6IDIyNXB4O1xyXG59XHJcblxyXG4uY291bnRzIGRpdiB7XHJcblx0cGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY291bnRzIHNwYW4ge1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/orbit-counts/orbit-counts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orbit-counts/orbit-counts.component.ts ***!
  \********************************************************/
/*! exports provided: OrbitCountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitCountsComponent", function() { return OrbitCountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrbitCountsComponent = /** @class */ (function () {
    function OrbitCountsComponent() {
    }
    OrbitCountsComponent.prototype.ngOnInit = function () {
    };
    OrbitCountsComponent.prototype.countByType = function (type) {
        var count = 0;
        if (this.satellites) {
            for (var i = 0; i < this.satellites.length; i++) {
                if (this.satellites[i].type === type) {
                    count++;
                }
            }
        }
        return count;
    };
    OrbitCountsComponent.prototype.getTypeList = function (sats) {
        var e_1, _a;
        var listOfTypes = [];
        try {
            for (var sats_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sats), sats_1_1 = sats_1.next(); !sats_1_1.done; sats_1_1 = sats_1.next()) {
                var sat = sats_1_1.value;
                if (listOfTypes.indexOf(sat.type) === -1) {
                    listOfTypes.push(sat.type);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sats_1_1 && !sats_1_1.done && (_a = sats_1.return)) _a.call(sats_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return listOfTypes;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrbitCountsComponent.prototype, "satellites", void 0);
    OrbitCountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orbit-counts',
            template: __webpack_require__(/*! raw-loader!./orbit-counts.component.html */ "./node_modules/raw-loader/index.js!./src/app/orbit-counts/orbit-counts.component.html"),
            styles: [__webpack_require__(/*! ./orbit-counts.component.css */ "./src/app/orbit-counts/orbit-counts.component.css")]
        })
    ], OrbitCountsComponent);
    return OrbitCountsComponent;
}());



/***/ }),

/***/ "./src/app/orbit-list/orbit-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/orbit-list/orbit-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sortable {\r\n\tcursor: pointer;\r\n\tcolor: #dd5;\r\n}\r\n\r\n.warning {\r\n\tbackground-color: #da8a8a;\r\n}\r\n\r\ntable {\r\n color: #111;\r\n border-radius: 5px;\r\n overflow: hidden;\r\n margin: 12px 0;\r\n min-width: 300px;\r\n background: #dad8d8;\r\n}\r\n\r\n.header-row {\r\n\tbackground: #34495E;\r\n\tcolor: #fff\r\n}\r\n\r\nth, td {\r\n\ttext-align: left;\r\n\tmargin: 5px 10px;\r\n\tpadding: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JiaXQtbGlzdC9vcmJpdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvb3JiaXQtbGlzdC9vcmJpdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydGFibGUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogI2RkNTtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkYThhOGE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuIGNvbG9yOiAjMTExO1xyXG4gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gb3ZlcmZsb3c6IGhpZGRlbjtcclxuIG1hcmdpbjogMTJweCAwO1xyXG4gbWluLXdpZHRoOiAzMDBweDtcclxuIGJhY2tncm91bmQ6ICNkYWQ4ZDg7XHJcbn1cclxuXHJcbi5oZWFkZXItcm93IHtcclxuXHRiYWNrZ3JvdW5kOiAjMzQ0OTVFO1xyXG5cdGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRtYXJnaW46IDVweCAxMHB4O1xyXG5cdHBhZGRpbmc6IDZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/orbit-list/orbit-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/orbit-list/orbit-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrbitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitListComponent", function() { return OrbitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrbitListComponent = /** @class */ (function () {
    function OrbitListComponent() {
    }
    OrbitListComponent.prototype.ngOnInit = function () {
    };
    OrbitListComponent.prototype.sort = function (column) {
        // array.sort modifies the array, sorting the items based on the given compare function
        this.satellites.sort(function (a, b) {
            if (a[column] < b[column]) {
                return -1;
            }
            else if (a[column] > b[column]) {
                return 1;
            }
            return 0;
        });
    };
    OrbitListComponent.prototype.isAltRow = function (sat) {
        if (this.satellites.indexOf(sat) % 2) {
            return '#b6b5b5';
        }
        return '#dad8d8';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrbitListComponent.prototype, "satellites", void 0);
    OrbitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orbit-list',
            template: __webpack_require__(/*! raw-loader!./orbit-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/orbit-list/orbit-list.component.html"),
            styles: [__webpack_require__(/*! ./orbit-list.component.css */ "./src/app/orbit-list/orbit-list.component.css")]
        })
    ], OrbitListComponent);
    return OrbitListComponent;
}());



/***/ }),

/***/ "./src/app/satellite.ts":
/*!******************************!*\
  !*** ./src/app/satellite.ts ***!
  \******************************/
/*! exports provided: Satellite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Satellite", function() { return Satellite; });
var Satellite = /** @class */ (function () {
    function Satellite(name, type, launchDate, orbitType, operational) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    Satellite.prototype.isSpaceDebris = function () {
        return this.type === "Space Debris";
    };
    Satellite.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Satellite;
}());

// TODO 3a: fix isSpaceDebris check


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nathan\programming\lc_101\Section 1 - Frontend\ga6_js-assignment-6-orbit-report-Nathan-422\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map