/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    color: #7a2121;\n    font-family: \"Roboto Light\", sans-serif;\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: rgba(205, 189, 129, 0.4);\n}\n\nheader {\n    margin: 0;\n    padding: 1rem 0 0 0;\n}\n\nnav {\n    margin: 0 auto;\n    width: 300px;\n    display: flex;\n    justify-content: space-between;\n}\n\nnav  button {\n    color: #7a2121;\n    border-radius: 15px 15px 0 0;\n    background: transparent;\n    height: 2.3rem;\n    width: 5.3rem;\n    border: none;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\nli {\n    border: none;\n}\n\n.active {\n    border: rgba(220, 185, 106, 0.5) solid 1px;\n    border-bottom: none;\n    background-color: rgba(220, 185, 106, 0.5);\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactUs: () => (/* binding */ contactUs)\n/* harmony export */ });\nfunction contactUs () {\n    const contactUsContainer = document.createElement(\"div\");\n    contactUs.className = \"contact-us\"\n    const contactUsHeading = document.createElement(\"h1\");\n    contactUsHeading.textContent = \"Contact Us\";\n    const contactUsList = document.createElement(\"ul\");\n    contactUsContainer.appendChild(contactUsHeading);\n    contactUsContainer.appendChild(contactUsList);\n\n    const contacts = [\n        {name: \"John Law\", phoneNumber: \"555-666-7777\", occupation: \"Chef\", email: \"john@yuya.food\"},\n        {name: \"Gary Tom\", phoneNumber: \"555-666-7776\", occupation: \"Manger\", email: \"gary@yuya.food\"},\n        {name: \"Lotus Nat\", phoneNumber: \"555-666-7775\", occupation: \"Waiter\", email: \"lotus@yuya.food\"}\n    ]\n\n    contacts.forEach(contact => {\n        const contactPerson = document.createElement(\"li\");\n        contactPerson.textContent = contact.name;\n        const contactPersonOccupation = document.createElement(\"p\");\n        contactPersonOccupation.textContent = contact.occupation;\n        const contactPersonPhone = document.createElement(\"p\");\n        contactPersonPhone.textContent = contact.phoneNumber;\n        const contactPersonEmail = document.createElement(\"p\");\n        contactPersonEmail.textContent = contact.email;\n        contactUsList.appendChild(contactPerson);\n        contactPerson.appendChild(contactPersonOccupation);\n        contactPerson.appendChild(contactPersonPhone);\n        contactPerson.appendChild(contactPersonEmail);\n    })\n\n    return contactUsContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cafeDescription: () => (/* binding */ cafeDescription),\n/* harmony export */   cafeLocation: () => (/* binding */ cafeLocation),\n/* harmony export */   homeHeader: () => (/* binding */ homeHeader),\n/* harmony export */   workingHours: () => (/* binding */ workingHours)\n/* harmony export */ });\nfunction homeHeader () {\n    const homeHeading = document.createElement(\"div\");\n    homeHeading.className = \"home-heading-content\";\n    const homeTitle = document.createElement(\"h1\");\n    homeTitle.className = \"home-title\";\n    homeTitle.textContent = \"Yuya's Breakfast Bar\";\n    homeHeading.appendChild(homeTitle);\n\n    return homeHeading;\n}\n\nfunction cafeDescription () {\n    const cafeDescriptionContainer = document.createElement(\"div\");\n    cafeDescriptionContainer.className = \"description-content\";\n    const cafeDescriptionContent = document.createElement(\"p\");\n    cafeDescriptionContent.className = \"home-description\";\n    cafeDescriptionContent.textContent = `Welcome to Yuya's Breakfast Bar, where fresh flavors and a cozy ambiance come together! Enjoy a delicious selection of breakfast favorites made from high-quality, locally sourced ingredients. Whether you're craving a classic meal or something new, our menu offers a variety of dishes to start your day right. Perfect for early risers, brunch lovers, and coffee enthusiasts, Yuya's Breakfast Bar is your go-to spot for a satisfying and delightful dining experience`;\n    cafeDescriptionContainer.appendChild(cafeDescriptionContent);\n\n    return cafeDescriptionContainer;\n}\n\nfunction workingHours () {\n    const workingHourContainer = document.createElement(\"div\");\n    workingHourContainer.className = \"working-hour-container\";\n    const workingHourHeading = document.createElement(\"h3\");\n    workingHourHeading.textContent = \"Working Hours\";\n    const hoursList = document.createElement(\"ul\");\n    hoursList.className = \"hours-list\";\n    workingHourContainer.appendChild(workingHourHeading)\n    workingHourContainer.appendChild(hoursList);\n\n    const hours = [\n        { day: \"Sunday\", time: \"8am - 8pm\" },\n        { day: \"Monday\", time: \"6am - 6pm\" },\n        { day: \"Tuesday\", time: \"6am - 6pm\" },\n        { day: \"Wednesday\", time: \"6am - 6pm\" },\n        { day: \"Thursday\", time: \"6am - 10pm\" },\n        { day: \"Friday\", time: \"6am - 10pm\" },\n        { day: \"Saturday\", time: \"8am - 10pm\" }\n    ];\n\n    hours.forEach (hour => {\n        const listItem = document.createElement(\"li\");\n        listItem.textContent = `${hour.day}: ${hour.time}`;\n        hoursList.append(listItem);\n    });\n\n    return workingHourContainer;\n}\n\nfunction cafeLocation () {\n    const cafeLocationContainer = document.createElement(\"div\");\n    cafeLocationContainer.className = \"location-container\";\n    const cafeLocationHeading = document.createElement(\"h3\");\n    cafeLocationHeading.textContent = \"Location\";\n    const cafeLocationDescription = document.createElement(\"p\");\n    cafeLocationDescription.textContent = \"123 Forest Drive, Forestville, Maine\";\n    cafeLocationContainer.appendChild(cafeLocationHeading)\n    cafeLocationContainer.appendChild(cafeLocationDescription);\n\n    return cafeLocationContainer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst pageContent = document.querySelector(\"#content\");\n\nfunction createBtns() {\n    const btns = [\n        {text: \"Home\", class: \"btn\" },\n        {text: \"Menu\", class: \"btn\"},\n        {text: \"Contact\", class: \"btn\"}\n    ]\n\n    const buttonElements = {};\n    btns.forEach(btn => {\n        const button = document.createElement(\"button\");\n        button.textContent = btn.text;\n        button.dataset.page = btn.text;\n        button.id = btn.text.toLowerCase();\n        button.classList.add(btn.class);\n        buttonElements[btn.text.toLowerCase()] = button;\n    });\n\n    return buttonElements;\n}\n\nfunction renderNav() {\n    const nav = document.querySelector(\"nav\");\n\n    const buttons = createBtns();\n    Object.keys(buttons).forEach(key => {\n        nav.appendChild(buttons[key]);\n        buttons[key].addEventListener(\"click\", renderPage);\n    });\n}\n\nfunction renderPage(event) {\n    const target = event.target;\n    const page = target.dataset.page;\n    pageContent.innerHTML = '';\n    const buttons = document.querySelectorAll(\".btn\");\n    buttons.forEach(button => {\n        button.classList.remove(\"active\");\n    });\n    target.classList.add(\"active\");\n\n    if (page.toLowerCase() === \"home\") {\n        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.homeHeader)());\n        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.cafeDescription)());\n        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.workingHours)());\n        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.cafeLocation)())\n\n    } else if (page.toLowerCase() === \"menu\") {\n        pageContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuHeader)());\n        pageContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.beverage)());\n        pageContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.side)())\n        pageContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.mainDish)())\n    } else {\n        pageContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactUs)())\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    renderNav();\n    const homeButton = document.querySelector(\"#home\");\n    homeButton.classList.add(\"active\");\n    pageContent.innerHTML = \"\";\n    pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.homeHeader)());\n    pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.cafeDescription)());\n    pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.workingHours)());\n    pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.cafeLocation)())\n})\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   beverage: () => (/* binding */ beverage),\n/* harmony export */   mainDish: () => (/* binding */ mainDish),\n/* harmony export */   menuHeader: () => (/* binding */ menuHeader),\n/* harmony export */   side: () => (/* binding */ side)\n/* harmony export */ });\nfunction menuHeader () {\n    const menuHeadingContainer = document.createElement(\"div\");\n    menuHeadingContainer.className= \"menu-header\";\n    const menuTitle = document.createElement(\"h1\");\n    menuHeadingContainer.appendChild(menuTitle);\n\n    return menuHeadingContainer;\n}\n\nfunction beverage () {\n    const beveragesContainer = document.createElement(\"div\");\n    beveragesContainer.className= \"beverages-container\";\n    const beveragesTitle = document.createElement(\"h1\");\n    beveragesTitle.textContent = \"Beverages\";\n    const beveragesList = document.createElement(\"ul\");\n    beveragesList.className = \"beverages-list\";\n    beveragesContainer.appendChild(beveragesTitle);\n    beveragesContainer.appendChild(beveragesList);\n\n    const beverages = [\n        {\n            name: \"Fresh Orange Juice\",\n            description: \"Made from 100% freshly squeezed oranges, providing a vitamin-packed boost to your day.\",\n            price: 3\n        }, {\n            name: \"Apple & Carrot Juice\",\n            description: \"A healthy, naturally sweet combination of crisp apples and fresh carrots, packed with\" +\n                \" nutrients.\",\n            price: 4\n        }, {\n            name: \"Chamomile & Honey Herbal Tea\",\n            description: \"A soothing blend of chamomile flowers and natural honey, perfect for relaxation.\",\n            price: 5\n        }\n    ]\n\n    beverages.forEach(beverage => {\n        const beverageItem = document.createElement(\"li\");\n        const beverageName = document.createElement(\"h3\");\n        beverageName.textContent = beverage.name;\n        const beverageDescription = document.createElement(\"p\");\n        beverageDescription.textContent = beverage.description;\n        const beveragePrice = document.createElement(\"h4\");\n        beveragePrice.textContent = `$${beverage.price}`;\n        beveragesList.appendChild(beverageItem);\n        beverageItem.appendChild(beverageName);\n        beverageItem.appendChild(beverageDescription);\n        beverageItem.appendChild(beveragePrice);\n    });\n\n    return beveragesContainer;\n}\n\nfunction side () {\n    const sidesContainer = document.createElement(\"div\");\n    sidesContainer.className= \"sides-container\";\n    const sidesTitle = document.createElement(\"h1\");\n    sidesTitle.textContent = \"Sides\";\n    const sidesList = document.createElement(\"ul\");\n    sidesList.className = \"beverages-list\";\n    sidesContainer.appendChild(sidesTitle);\n    sidesContainer.appendChild(sidesList);\n\n    const sides = [\n        {\n            name: \"Cheesy Nachos\",\n            description: \"Crispy tortilla chips topped with melted cheese, jalapeños, and a side of salsa and guacamole.\",\n            price: 5\n        }, {\n            name: \"Mini Veggie Spring Rolls\",\n            description: \"Crispy vegetable spring rolls served with a sweet chili dipping sauce.\",\n            price: 7\n        }, {\n            name: \"Falafel Bites\",\n            description: \"Crispy on the outside, tender on the inside, these falafel bites are served with a tangy\" +\n                \" tahini sauce.\",\n            price: 6\n        }\n    ]\n\n    sides.forEach(side => {\n        const sideItem = document.createElement(\"li\");\n        const sideName = document.createElement(\"h3\");\n        sideName.textContent = side.name;\n        const sideDescription = document.createElement(\"p\");\n        sideDescription.textContent = side.description;\n        const sidePrice = document.createElement(\"h4\");\n        sidePrice.textContent = `$${side.price}`;\n        sidesList.appendChild(sideItem);\n        sideItem.appendChild(sideName);\n        sideItem.appendChild(sideDescription);\n        sideItem.appendChild(sidePrice);\n    });\n\n    return sidesContainer;\n}\n\nfunction mainDish () {\n    const mainDishesContainer = document.createElement(\"div\");\n    mainDishesContainer.className= \"sides-container\";\n    const mainDishesTitle = document.createElement(\"h1\");\n    mainDishesTitle.textContent = \"Main Dishes\";\n    const  mainDishesList = document.createElement(\"ul\");\n    mainDishesList.className = \"beverages-list\";\n    mainDishesContainer.appendChild( mainDishesTitle);\n    mainDishesContainer.appendChild( mainDishesList);\n\n    const  mainDishes = [\n        {\n            name: \"Grilled Chicken Shawarma Wrap\",\n            description: \"Juicy, marinated chicken grilled to perfection and wrapped in warm flatbread with fresh\" +\n                \" veggies and a creamy garlic sauce\",\n            price: 10\n        }, {\n            name: \"Beef Burger\",\n            description: \"A tender, halal beef patty topped with lettuce, tomato, and cheese, served on a soft bun\" +\n                \" with a side of fries.\",\n            price: 13\n        }, {\n            name: \"Chicken Caesar Salad\",\n            description: \"Grilled chicken breast served over crisp romaine lettuce, tossed in a creamy Caesar\" +\n                \" dressing with croutons and parmesan.\",\n            price: 11\n        }, {\n            name: \"Falafel Wrap\",\n            description: \"Crispy falafel balls wrapped in a warm pita with hummus, fresh vegetables, and a drizzle\" +\n                \" of tahini sauce.\",\n            price: 9\n        }, {\n            name: \"Spicy Grilled Salmon\",\n            description: \"Fresh salmon fillet seasoned with a spicy blend of herbs, grilled to perfection, and\" +\n                \" served with a side of steamed vegetables.\",\n            price: 16\n        }, {\n            name: \"Veggie Quesadilla\",\n            description: \"A warm tortilla filled with melted cheese, grilled peppers, onions, and mushrooms, served\" +\n                \" with salsa and sour cream on the side.\",\n            price: 10\n        }, {\n            name: \"Chicken Alfredo Pasta\",\n            description: \"Tender grilled chicken tossed in a rich and creamy Alfredo sauce, served over fettuccine\" +\n                \" and topped with fresh parsley.\",\n            price: 14\n        }\n    ]\n\n    mainDishes.forEach( mainDish => {\n        const  mainDishItem = document.createElement(\"li\");\n        const mainDishName = document.createElement(\"h3\");\n        mainDishName.textContent = mainDish.name;\n        const mainDishDescription = document.createElement(\"p\");\n        mainDishDescription.textContent = mainDish.description;\n        const mainDishPrice = document.createElement(\"h4\");\n        mainDishPrice.textContent = `$${mainDish.price}`;\n        mainDishesList.appendChild(mainDishItem);\n        mainDishItem.appendChild(mainDishName);\n        mainDishItem.appendChild(mainDishDescription);\n        mainDishItem.appendChild(mainDishPrice);\n    });\n\n    return mainDishesContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;