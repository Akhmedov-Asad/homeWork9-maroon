"use strict";
(() => {
var exports = {};
exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/products/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(6655);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/data.json
const data_namespaceObject = JSON.parse('{"R":[{"id":1,"name":"High","for":"крем для лица","price":990,"weight":"50ml","img":"/images/productImg1.png"},{"id":2,"name":"Rest","for":"минеральная пудра","price":690,"weight":"20g","img":"/images/productImg2.png"},{"id":3,"name":"Rose","for":"крем для лица","price":890,"weight":"50ml","img":"/images/productImg3.png"},{"id":4,"name":"Milk","for":"масло для тела","price":790,"weight":"120ml","img":"/images/productImg4.png"},{"id":5,"name":"Paradise","for":"минеральная пудра","price":590,"weight":"15g","img":"/images/productImg5.png"},{"id":6,"name":"Sun","for":"бомбочка для ванны","price":90,"weight":"20g","img":"/images/productImg6.png"},{"id":7,"name":"Violet","for":"крем для лица","price":890,"weight":"50ml","img":"/images/productImg7.png"},{"id":8,"name":"Clean","for":"маска для лица","price":490,"weight":"100g","img":"/images/productImg8.png"},{"id":9,"name":"Coconut","for":"масло для тела","price":990,"weight":"50g","img":"/images/productImg9.png"},{"id":10,"name":"Lavender","for":"мыло ручной работы","price":290,"weight":"50g","img":"/images/productImg10.png"},{"id":11,"name":"Lotos","for":"маска для лица","price":890,"weight":"50ml","img":"/images/productImg11.png"},{"id":12,"name":"Earth","for":"бомбочка для ванны","price":90,"weight":"20g","img":"/images/productImg12.png"}]}');
;// CONCATENATED MODULE: ./app/api/products/route.js


// http://localhost:3000/api/products
async function GET(request) {
    return new next_response/* default */.Z(JSON.stringify(data_namespaceObject.R));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fproducts%2Froute&name=app%2Fapi%2Fproducts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2FUsers%2Fuser%2FDesktop%2Fhomework-9%2Fapp&appPaths=%2Fapi%2Fproducts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/products/route",
        pathname: "/api/products",
        filename: "route",
        bundlePath: "app/api/products/route"
    },
    resolvedPagePath: "/Users/user/Desktop/homework-9/app/api/products/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/products/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778], () => (__webpack_exec__(4428)));
module.exports = __webpack_exports__;

})();