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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todoapp/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todoapp/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todoapp/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todoapp/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todoapp/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/dateFormatter.js":
/*!******************************!*\
  !*** ./src/dateFormatter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateFormatter\": () => (/* binding */ dateFormatter)\n/* harmony export */ });\n//Format the date without calling the Date object.\n//This is to simplify timezone issues.\nconst dateFormatter = (() => {\n\tconst months = {\n\t\t1:\"Jan\",\n\t\t2:\"Feb\",\n\t\t3:\"Mar\",\n\t\t4:\"Apr\",\n\t\t5:\"May\",\n\t\t6:\"Jun\",\n\t\t7:\"Jul\",\n\t\t8:\"Aug\",\n\t\t9:\"Sep\",\n\t\t10:\"Oct\",\n\t\t11:\"Nov\",\n\t\t12:\"Dec\"\n\t};\n\n\tconst days = {\n\t\t1:\"1st\",\n\t\t2:\"2nd\",\n\t\t3:\"3rd\",\n\t\t4:\"4th\",\n\t\t5:\"5th\",\n\t\t6:\"6th\",\n\t\t7:\"7th\",\n\t\t8:\"8th\",\n\t\t9:\"9th\",\n\t\t10:\"10th\",\n\t\t11:\"11th\",\n\t\t12:\"12th\",\n\t\t13:\"13th\",\n\t\t14:\"14th\",\n\t\t15:\"15th\",\n\t\t16:\"16th\",\n\t\t17:\"17th\",\n\t\t18:\"18th\",\n\t\t19:\"19th\",\n\t\t20:\"20th\",\n\t\t21:\"21st\",\n\t\t22:\"22nd\",\n\t\t23:\"23rd\",\n\t\t24:\"24th\",\n\t\t25:\"25th\",\n\t\t26:\"26th\",\n\t\t27:\"27th\",\n\t\t28:\"28th\",\n\t\t29:\"29th\",\n\t\t30:\"30th\",\n\t\t31:\"31st\"\n\t};\n\n\tfunction formatDate(date) {\n\t\tconst dateArray = date.split(\"-\");\n\t\tconst month = formatMonth(dateArray[1]);\n\t\tconst day = formatDay(dateArray[2]);\n\t\tconst year = dateArray[0];\n\t\treturn `${month}-${day}-${year}`;\n\t}\n\n\tfunction formatMonth(num) {\n\t\tif (num[0] == \"0\") {\n\t\t\treturn months[parseInt(num[1])];\n\t\t}\n\t\treturn months[parseInt(num)];\n\t}\n\n\tfunction formatDay(num) {\n\t\tif (num[0] == \"0\") {\n\t\t\treturn days[parseInt(num[1])];\n\t\t}\n\t\treturn days[parseInt(num)];\n\t}\n\n\treturn {\n\t\tformatDate,\n\t}\n\t\n})();\n\n\n//# sourceURL=webpack://todoapp/./src/dateFormatter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDoDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoDom.js */ \"./src/toDoDom.js\");\n/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDom.js */ \"./src/projectDom.js\");\n/* harmony import */ var _projectActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectActions.js */ \"./src/projectActions.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ }),

/***/ "./src/myEvents.js":
/*!*************************!*\
  !*** ./src/myEvents.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myEvents\": () => (/* binding */ myEvents)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n\n\n\nlet myEvents = [];\n\nconst storedLibrary = localStorage.getItem('myEvents');\nif (storedLibrary) {\n\tmyEvents = JSON.parse(storedLibrary).map((event) => new _toDo_js__WEBPACK_IMPORTED_MODULE_1__.default(event));\n\tconsole.log(myEvents);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/myEvents.js?");

/***/ }),

/***/ "./src/myProjects.js":
/*!***************************!*\
  !*** ./src/myProjects.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\nlet myProjects = [];\n\nconst storedProjects = localStorage.getItem('myProjects');\nif (storedProjects) {\n\tmyProjects = JSON.parse(storedProjects).map((project) => new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(project));\n}\n\nlet currentProject;\n\nconst selectProject = (() => {\n\tconst defaultProject = () => {\n\tif (myProjects.length == null) return; \n\tcurrentProject = myProjects[0];\n\t}\n\n\tconst setCurrentProject = (index) => {\n\t\tcurrentProject = myProjects[index];\n\t}\n\n\t\n\n\treturn {\n\t\tsetCurrentProject,\n\t\tdefaultProject\n\t}\n})();\n\nselectProject.defaultProject();\n\n\n//# sourceURL=webpack://todoapp/./src/myProjects.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project {\n\tconstructor(params) {\n\t\tthis.title = params.title;\n\t\tthis.id = params.id;\n\t}\n}\n\n\n//# sourceURL=webpack://todoapp/./src/project.js?");

/***/ }),

/***/ "./src/projectActions.js":
/*!*******************************!*\
  !*** ./src/projectActions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom.js */ \"./src/projectDom.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\n\nconst newProject = (() => {\n\tconst newProjectForm = document.querySelector('[data-add-project]');\n\n\tnewProjectForm.addEventListener('submit', addNewProject);\n\n\tfunction addNewProject(e) {\n\t\te.preventDefault();\n\t\tconst newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default({\n\t\t\ttitle: document.querySelector('[name=project-title]').value\n\t\t})\n\t\taddProjectToStorage(newProject);\n\t\tthis.reset();\n\t\t_projectDom_js__WEBPACK_IMPORTED_MODULE_2__.showAllProjects.updateAllProjects();\n\t}\n\n\tconst addProjectToStorage = (newProject) => {\n\t\tif (newProject == null) return;\n\t\tnewProject.id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\t\t_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(newProject);\n\t\tlocalStorage.setItem('myProjects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));\n\t} \n})();\n\n\n//# sourceURL=webpack://todoapp/./src/projectActions.js?");

/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProjectForm\": () => (/* binding */ showProjectForm),\n/* harmony export */   \"showAllProjects\": () => (/* binding */ showAllProjects),\n/* harmony export */   \"chooseProject\": () => (/* binding */ chooseProject)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n/* harmony import */ var _toDoDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoDom.js */ \"./src/toDoDom.js\");\n\n\n\nconst showProjectForm = (() => {\n\tconst newProjectButton = document.querySelector('[data-new-project]');\n\n\tnewProjectButton.addEventListener('click', () => {\n\t\tconst projectForm = document.querySelector(newProjectButton.dataset.newProject); \n\t\ttoggleProjectForm(projectForm);\n\t})\n\n\tconst toggleProjectForm = (projectForm) => {\n\t\tif (projectForm.classList.contains('active')) {\n\t\t\tprojectForm.classList.remove('active');\n\t\t} else {\n\t\t\tprojectForm.classList.add('active');\n\t\t}\n\t}\n})();\n\nconst showAllProjects = (() => {\n\tconst tableBody = document.querySelector('[data-project-list]');\n\n\tconst updateAllProjects = () => {\n\t\ttableBody.innerHTML = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.map((project, index) => `<tr class=\"project-row\">\n\t\t\t\t\t\t\t<td class=\"project-name \"data-project-target=\"${index}\">${project.title}</td>\n\t\t\t\t\t\t</tr>`).join(\"\");\n\t}\n\n\treturn {\n\t\tupdateAllProjects,\n\t}\n\n})();\n\nconst chooseProject = (() => {\n\tconst projectTableBody = document.querySelector('[data-project-list]');\n\n\tprojectTableBody.addEventListener('click', setCurrentEvents);\n\n\tfunction setCurrentEvents(e) {\n\t\tif (!e.target.matches('[data-project-target]')) return;\n\t\tconst index = e.target.dataset.projectTarget;\n\t\tchangeHeader(index);\n\t\t_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.selectProject.setCurrentProject(index);\n\t\t_toDoDom_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay.updateToDoDisplay();\n\t}\n\n\tconst changeHeader = (index) => {\n\t\tconst currentTitle = document.querySelector('[data-header-title]');\n\t\tconst currentHeader = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[index].title;\n\t\tcurrentTitle.innerText = currentHeader;\n\t}\n\n\tconst defaultHeader = () => {\n\t\tif (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length == 0) return;\n\t\tconst currentTitle = document.querySelector('[data-header-title]');\n\t\tcurrentTitle.innerText = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[0].title;\n\t}\n\n\treturn {\n\t\tchangeHeader,\n\t\tdefaultHeader,\n\t}\n})();\n\n\nshowAllProjects.updateAllProjects();\nchooseProject.defaultHeader();\n\n\n//# sourceURL=webpack://todoapp/./src/projectDom.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n\n\nclass ToDo {\n\tconstructor(params) {\n\t\tthis.title = params.title;\n\t\tthis.description = params.description;\n\t\tthis.dueDate = params.dueDate;\n\t\tthis.priority = params.priority;\n\t\tthis.projectId = params.projectId;\n\t}\n\n\tupdateTitle(title) {\n\t\tthis.title = title;\n\t}\n\n\tupdateDescription(description) {\n\t\tthis.description = description;\n\t}\n\n\tupdateDueDate(dueDate) {\n\t\tthis.dueDate = dueDate;\n\t}\n\n\tupdatePriority(priority) {\n\t\tthis.priority = priority;\n\t}\n}\n\n\n//# sourceURL=webpack://todoapp/./src/toDo.js?");

/***/ }),

/***/ "./src/toDoActions.js":
/*!****************************!*\
  !*** ./src/toDoActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitForm\": () => (/* binding */ submitForm),\n/* harmony export */   \"editToDo\": () => (/* binding */ editToDo),\n/* harmony export */   \"deleteEvents\": () => (/* binding */ deleteEvents)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n/* harmony import */ var _myEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myEvents.js */ \"./src/myEvents.js\");\n/* harmony import */ var _dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormatter.js */ \"./src/dateFormatter.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n/* harmony import */ var _toDoDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoDom.js */ \"./src/toDoDom.js\");\n/* harmony import */ var _updateArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateArray.js */ \"./src/updateArray.js\");\n\n\n\n\n\n\n\nconst submitForm = (() => {\n\tconst modal = document.querySelector('[data-wrap-form]');\n\tconst overlay = document.getElementById('overlay');\n\n\tconst eventForm = document.querySelector('[data-new-event-form]');\n\teventForm.addEventListener('submit', newEvent);\n\tfunction newEvent(e) {\n\t\te.preventDefault();\n\t\t//set currentId seperately or all the projectId will be set to current id on init\n\t\tconst currentId = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.currentProject.id;\n\n\t\tconst newEvent = new _toDo_js__WEBPACK_IMPORTED_MODULE_3__.default({\n\t\t\ttitle: document.querySelector('[name=title]').value,\n\t\t\tdescription: document.querySelector('[name=description]').value,\n\t\t\tdueDate: document.querySelector('[name=due-date]').value,\n\t\t\tpriority: document.querySelector('[name=priority]').value,\n\t\t})\n\t\tnewEvent.projectId = currentId;\n\t\taddToDoToArray(newEvent);\n\t\tthis.reset();\n\t\tcloseOnSubmit();\n\t}\n\n\tconst addToDoToArray = (newEvent) => {\n\t\tconst formatted = _dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.dateFormatter.formatDate(newEvent.dueDate);\n\t\tnewEvent.dueDate = formatted;\n\t\t_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents.push(newEvent);\n\t\tlocalStorage.setItem('myEvents', JSON.stringify(_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents));\n\t\t_toDoDom_js__WEBPACK_IMPORTED_MODULE_4__.updateDisplay.updateToDoDisplay();\n\t}\n\n\tconst closeOnSubmit = () => {\n\t\toverlay.classList.remove('active');\n\t\tmodal.classList.remove('active');\n\t}\n})();\n\nconst editToDo = (() => {\n\tconst editForm = document.querySelector('[data-update-event-form]');\n\tconst overlay = document.getElementById('overlay');\n\tconst updateCardModal = document.querySelector('[data-wrap-form-update]');\n\tlet newTitle = \"\";\n\tlet newDescription = \"\";\n\tlet newDueDate = \"\";\n\tlet newPriority = \"\";\n\tlet thisIndex;\n\n\tconst updateModalEvent = (index) => {\n\t\tthisIndex = index\n\t\teditForm.addEventListener('submit', updateThisEvent);\n\t}\n\n\tfunction updateThisEvent(e) {\n\t\te.preventDefault();\n\t\tsetUpdatedParams();\n\t\tlocalStorage.setItem('myEvents', JSON.stringify(_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents));\n\t\tthis.reset();\n\t\tcloseOnSubmit();\n\t\t_toDoDom_js__WEBPACK_IMPORTED_MODULE_4__.updateDisplay.updateToDoDisplay();\n\t}\n\n\tconst setUpdatedParams = () => {\n\t\tnewTitle = document.querySelector('[name=update-title]').value;\n\t\tnewDescription = document.querySelector('[name=update-description]').value;\n\t\tnewDueDate = document.querySelector('[name=update-due-date]').value;\n\t\tnewPriority = document.querySelector('[name=update-priority]').value;\n\t}\n\n\tconst makeChangesToEvent = () => {\n\t\tconst thisObject = _myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents[thisIndex];\n\t\tchangeTitle(thisObject);\n\t\tchangeDescription(thisObject);\n\t\tchangeDueDate(thisObject);\n\t\tchangePriority(thisObject);\n\t}\n\n\tconst changeTitle = (thisObject) => {\n\t\tif (newTitle == \"\") return; \n\t\tthisObject.updateTitle(newTitle);\n\t}\n\n\tconst changeDescription = (thisObject) => {\n\t\tif (newDescription == \"\") return;\n\t\tthisObject.updateDescription(newDescription);\n\t}\n\n\tconst changeDueDate = (thisObject) => {\n\t\tif (newDueDate == \"\") return;\n\t\tthisObject.updateDueDate(_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.dateFormatter.formatDate(newDueDate));\n\t}\n\n\tconst changePriority = (thisObject) => {\n\t\tif (newPriority == null) return;\n\t\tthisObject.updatePriority(newPriority);\n\t}\n\n\tconst closeOnSubmit = () => {\n\t\toverlay.classList.remove('active');\n\t\tupdateCardModal.classList.remove('active');\n\t}\n\n\treturn {\n\t\tupdateModalEvent,\n\t}\n})();\n\nconst deleteEvents = (() => {\n\tfunction deleteRow(e) {\n\t\tif (!e.target.matches('[data-delete-card]')) return;\n\t\t_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents.splice(e.target.dataset.deleteCard, 1);\n\t\tlocalStorage.setItem('myEvents', JSON.stringify(_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents));\n\t\t_toDoDom_js__WEBPACK_IMPORTED_MODULE_4__.updateDisplay.updateToDoDisplay();\n\t}\n\n\treturn {\n\t\tdeleteRow,\n\t}\n})();\n\n\n//# sourceURL=webpack://todoapp/./src/toDoActions.js?");

/***/ }),

/***/ "./src/toDoDom.js":
/*!************************!*\
  !*** ./src/toDoDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay),\n/* harmony export */   \"popUpForm\": () => (/* binding */ popUpForm)\n/* harmony export */ });\n/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ \"./src/myProjects.js\");\n/* harmony import */ var _myEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myEvents.js */ \"./src/myEvents.js\");\n/* harmony import */ var _toDoActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoActions.js */ \"./src/toDoActions.js\");\n\n\n\n\nconst updateDisplay = (() => {\n\tconst tableBody = document.querySelector('[data-todo-events]');\n\tconst showThisCard = document.querySelector('[data-expand-modal]');\n\tconst updateCardModal = document.querySelector('[data-wrap-form-update]');\n\tconst closeButton = document.querySelector('[data-card-close]');\n\tconst updateCloseButton = document.querySelector(`[data-hide-update-button]`);\n\tconst overlay = document.getElementById('overlay');\n\n\tfunction updateToDoDisplay(){\n\t\tif (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.currentProject == null) return;\n\t\ttableBody.innerHTML =  _myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents.filter(thisEvent => thisEvent.projectId == _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.currentProject.id)\n\t\t\t.map((toDoEvent,index) => `\n\t\t<tr class=\"event-row\" data-card-row-${index} data-expand-card=\"${index}\">\n\t\t\t\t<td><strong>To Do:</strong> ${toDoEvent.title} </td>\n\t\t\t\t<td><strong>Due:</strong> ${toDoEvent.dueDate}</td>\n\t\t\t\t<td><button data-edit-card=\"${index}\">Edit</button></td>\n\t\t\t\t<td><button class=\"is-danger\" data-delete-card=\"${index}\">Delete</button></td>\n\t\t\t\t</tr><br />`).join('');\n\t\t//color code the events based on priority\n\t\t_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents.filter(thisEvent => thisEvent.projectId == _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.currentProject.id)\n\t\t\t.map((toDoEvent, index) => {\n\t\t\t\tcolorCode(toDoEvent, index);\n\t\t\t});\n\t};\n\n\ttableBody.addEventListener('click', _toDoActions_js__WEBPACK_IMPORTED_MODULE_2__.deleteEvents.deleteRow); // ./toDoActions.js\n\ttableBody.addEventListener('click', showCard);\n\ttableBody.addEventListener('click', showCardToUpdate);\n\n\t//*****************Show Card *******************************************\n\tfunction showCard(e) {\n\t\tif (!e.target.matches('[data-expand-card]')) return;\n\t\tshowThisCard.classList.add('active');\n\t\toverlay.classList.add('active');\n\t\tconst index = e.target.dataset.expandCard;\n\t\tfillCard(index);\n\t}\n\n\tfunction fillCard(index) {\n\t\tconst thisTitle = document.querySelector('[data-event-title]');\n\t\tconst thisDescription = document.querySelector('[data-card-description]');\n\t\tconst thisDueDate = document.querySelector('[data-card-due-date]');\n\t\tconst thisPriority = document.querySelector('[data-card-priority]');\n\t\tthisTitle.innerHTML = `<strong>${_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents[index].title}</strong>`;\n\t\tthisDescription.innerText = `${_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents[index].description}`\n\t\tthisDueDate.innerHTML = `<strong>Due:</strong> ${_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents[index].dueDate}`\n\t\tthisPriority.innerHTML = `<strong>Priority:</strong> ${_myEvents_js__WEBPACK_IMPORTED_MODULE_1__.myEvents[index].priority}`;\n\t}\n\n\tcloseButton.addEventListener('click', () => {\n\t\tconst openCard = closeButton.closest('.wrap-event-modal');\n\t\topenCard.classList.remove('active');\n\t\toverlay.classList.remove('active');\n\t})\n\t//********************Update section *************************************\n\tfunction showCardToUpdate(e) {\n\t\tif (!e.target.matches('[data-edit-card]')) return;\n\t\tupdateCardModal.classList.add('active');\n\t\toverlay.classList.add('active');\n\t\tconst index = e.target.dataset.editCard;\n\t\t_toDoActions_js__WEBPACK_IMPORTED_MODULE_2__.editToDo.updateModalEvent(index);\n\t}\n\n\tupdateCloseButton.addEventListener('click', () => {\n\t\tconst updateModal = updateCloseButton.closest('.wrap-modal');\n\t\tupdateCardModal.classList.remove('active');\n\t\toverlay.classList.remove('active');\n\t})\n\n\n\tconst colorCode = (toDoEvent, index) => {\n\t\tconst thisTR = document.querySelector(`[data-card-row-${index}]`);\n\t\tif (toDoEvent.priority == \"high\") {\n\t\t\tthisTR.classList.add('danger');\n\t\t} else if (toDoEvent.priority == \"medium\") {\n\t\t\tthisTR.classList.add('medium');\n\t\t} else if (toDoEvent.priority == \"low\") {\n\t\t\tthisTR.classList.add('easy');\n\t\t}\n\t}\n\n\treturn {\n\t\tupdateToDoDisplay,\n\t}\n})();\n\n/*This is the form for creating a new event.*/\nconst popUpForm = (() => {\n\tconst eventButton = document.querySelector('[data-add-modal]');\n\tconst eventExitButton = document.querySelector('[data-hide-button]');\n\tconst overlay = document.getElementById('overlay');\n\n\teventButton.addEventListener('click', () => {\n\t\tconst eventModal = document.querySelector(eventButton.dataset.addModal);\n\t\topenForm(eventModal);\n\t});\n\n\teventExitButton.addEventListener('click', () => {\n\t\tconst eventModal = eventExitButton.closest('.wrap-modal');\n\t\thideForm(eventModal);\n\t});\n\n\tconst openForm = (eventModal) => {\n\t\tif (eventModal == null) return;\n\t\tif (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.currentProject == null) {\n\t\t\twindow.alert(\"You need to set up a project\");\n\t\t\treturn;\n\t\t}\n\t\teventModal.classList.add('active');\n\t\toverlay.classList.add('active');\n\t}\n\n\tconst hideForm = (eventModal) => {\n\t\tif (eventModal == null) return;\n\t\teventModal.classList.remove('active');\n\t\toverlay.classList.remove('active');\n\t}\n})();\nupdateDisplay.updateToDoDisplay();\n\n\n//# sourceURL=webpack://todoapp/./src/toDoDom.js?");

/***/ }),

/***/ "./src/updateArray.js":
/*!****************************!*\
  !*** ./src/updateArray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updatedArray\": () => (/* binding */ updatedArray)\n/* harmony export */ });\n//This is to concat without duplicates the myEvents array with the currentEvents based on project_idarray\nfunction updatedArray(array1, array2) {\n\tlet newArray = array1.concat(array2);\n\tnewArray = [...new Set([...array1, ...array2])];\n\treturn newArray;\n}\n\n\n//# sourceURL=webpack://todoapp/./src/updateArray.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;