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

/***/ "./src/dateFormatter.js":
/*!******************************!*\
  !*** ./src/dateFormatter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateFormatter\": () => (/* binding */ dateFormatter)\n/* harmony export */ });\n//Format the date without calling the Date object.\n//This is to simplify timezone issues.\nconst dateFormatter = (() => {\n\tconst months = {\n\t\t1:\"Jan\",\n\t\t2:\"Feb\",\n\t\t3:\"Mar\",\n\t\t4:\"Apr\",\n\t\t5:\"May\",\n\t\t6:\"Jun\",\n\t\t7:\"Jul\",\n\t\t8:\"Aug\",\n\t\t9:\"Sep\",\n\t\t10:\"Oct\",\n\t\t11:\"Nov\",\n\t\t12:\"Dec\"\n\t};\n\n\tconst days = {\n\t\t1:\"1st\",\n\t\t2:\"2nd\",\n\t\t3:\"3rd\",\n\t\t4:\"4th\",\n\t\t5:\"5th\",\n\t\t6:\"6th\",\n\t\t7:\"7th\",\n\t\t8:\"8th\",\n\t\t9:\"9th\",\n\t\t10:\"10th\",\n\t\t11:\"11th\",\n\t\t12:\"12th\",\n\t\t13:\"13th\",\n\t\t14:\"14th\",\n\t\t15:\"15th\",\n\t\t16:\"16th\",\n\t\t17:\"17th\",\n\t\t18:\"18th\",\n\t\t19:\"19th\",\n\t\t20:\"20th\",\n\t\t21:\"21st\",\n\t\t22:\"22nd\",\n\t\t23:\"23rd\",\n\t\t24:\"24th\",\n\t\t25:\"25th\",\n\t\t26:\"26th\",\n\t\t27:\"27th\",\n\t\t28:\"28th\",\n\t\t29:\"29th\",\n\t\t30:\"30th\",\n\t\t31:\"31st\"\n\t};\n\n\tfunction formatDate(date) {\n\t\tconst dateArray = date.split(\"-\");\n\t\tconst month = formatMonth(dateArray[1]);\n\t\tconst day = formatDay(dateArray[2]);\n\t\tconst year = dateArray[0];\n\t\treturn `${month}-${day}-${year}`;\n\t}\n\n\tfunction formatMonth(num) {\n\t\tif (num[0] == \"0\") {\n\t\t\treturn months[parseInt(num[1])];\n\t\t}\n\t\treturn months[parseInt(num)];\n\t}\n\n\tfunction formatDay(num) {\n\t\tif (num[0] == \"0\") {\n\t\t\treturn days[parseInt(num[1])];\n\t\t}\n\t\treturn days[parseInt(num)];\n\t}\n\n\treturn {\n\t\tformatDate,\n\t}\n\t\n})();\n\n\n//# sourceURL=webpack://todoapp/./src/dateFormatter.js?");

/***/ }),

/***/ "./src/domToDo.js":
/*!************************!*\
  !*** ./src/domToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay),\n/* harmony export */   \"showForm\": () => (/* binding */ showForm),\n/* harmony export */   \"submitForm\": () => (/* binding */ submitForm),\n/* harmony export */   \"showCard\": () => (/* binding */ showCard)\n/* harmony export */ });\n/* harmony import */ var _dateFormatter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFormatter.js */ \"./src/dateFormatter.js\");\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n\n\n\nlet myEvents = [];\nconst storedLibrary = localStorage.getItem('myEvents');\nif (storedLibrary) {\n\tmyEvents = JSON.parse(storedLibrary).map((event) => new _toDo_js__WEBPACK_IMPORTED_MODULE_1__.default(event));\n}\n\nconst updateDisplay = (() => {\n\tconst tableBody = document.querySelector('[data-todo-events]');\n\n\tfunction updateToDoDisplay(myEvents) {\n\t\ttableBody.innerHTML = myEvents.map((toDoEvent) => `\n\t\t<tr>\n\t\t\t\t<td><strong>To Do:</strong> ${toDoEvent.title} </td>\n\t\t\t\t<td><strong>Due:</strong> ${toDoEvent.dueDate}</td>\n\t\t\t\t<td><strong>Priority:</strong> ${toDoEvent.priority}</td>\n\t\t\t\t<td><button data-expand-event>Expand</button></td>\n\t\t\t\t</tr><br />`).join('');\n\t}\n\n\treturn {\n\t\tupdateToDoDisplay,\n\t}\n\n})();\n\nupdateDisplay.updateToDoDisplay(myEvents);\n\nconst showForm = (() => {\n\tconst eventButton = document.querySelector('[data-add-modal]');\n\tconst eventExitButton = document.querySelector('[data-hide-button]');\n\tconst overlay = document.getElementById('overlay');\n\n\teventButton.addEventListener('click', () => {\n\t\tconst eventModal = document.querySelector(eventButton.dataset.addModal);\n\t\topenForm(eventModal);\n\t});\n\n\teventExitButton.addEventListener('click', () => {\n\t\tconst eventModal = eventExitButton.closest('.wrap-modal');\n\t\thideForm(eventModal);\n\t});\n\n\tfunction openForm(eventModal) {\n\t\tif (eventModal == null) return;\n\t\teventModal.classList.add('active');\n\t\toverlay.classList.add('active');\n\t}\n\n\tfunction hideForm(eventModal) {\n\t\tif (eventModal == null) return;\n\t\teventModal.classList.remove('active');\n\t\toverlay.classList.remove('active');\n\t}\n})();\n\nconst submitForm = (() => {\n\tconst modal = document.querySelector('[data-wrap-form]');\n\tconst overlay = document.getElementById('overlay');\n\n\tconst eventForm = document.querySelector('[data-new-event-form]');\n\teventForm.addEventListener('submit', newEvent);\n\tfunction newEvent(e) {\n\t\te.preventDefault();\n\t\tlet newEvent = new _toDo_js__WEBPACK_IMPORTED_MODULE_1__.default({\n\t\t\ttitle: document.querySelector('[name=title]').value,\n\t\t\tdescription: document.querySelector('[name=description]').value,\n\t\t\tdueDate: document.querySelector('[name=due-date]').value,\n\t\t\tpriority: document.querySelector('[name=priority]').value\n\t\t})\n\t\taddToDoToArray(newEvent);\n\t\thideModal(modal);\n\t\thideOverlay(overlay);\n\t\tthis.reset();\n\t\tlocation.reload();\n\t}\n\n\tfunction addToDoToArray(newEvent) {\n\t\tlet formatted = _dateFormatter_js__WEBPACK_IMPORTED_MODULE_0__.dateFormatter.formatDate(newEvent.dueDate);\n\t\tnewEvent.dueDate = formatted;\n\t\tmyEvents.push(newEvent);\n\t\tlocalStorage.setItem('myEvents', JSON.stringify(myEvents));\n\t}\n\n\tfunction hideModal(modal) {\n\t\tif (modal == null) return;\n\t\tmodal.classList.remove('active');\n\t}\n\n\tfunction hideOverlay(overlay) {\n\t\tif (overlay == null) return;\n\t\toverlay.classList.remove('active');\n\t}\n})();\n\nconst showCard = (() => {\n\tconst expandedCard = document.querySelector('[data-expand-modal]');\n\tconst expandButtons = document.querySelectorAll('[data-expand-event]');\n\tconst overlay = document.getElementById('overlay');\n\n\t\n\texpandButtons.forEach((button, index) => {\n\t\tbutton.addEventListener('click', () => {\n\t\t\tconst clickedEvent = myEvents[index];\n\t\t\texpandCard(clickedEvent);\n\t\t\toverlay.classList.add('active');\n\t\t});\n\t});\n\n\n\tfunction expandCard(clickedEvent) {\n\t\texpandedCard.classList.add('card-border');\n\t\texpandedCard.innerHTML = `<div class=\"card\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"wrap-event-close\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close-button\" data-card-close>&times;</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"wrap-btn h3-btn\"><strong>${clickedEvent.title}</strong></h3>\n\t\t\t\t\t\t<p class=\"wrap-text\">\n\t\t\t\t\t\t${clickedEvent.description}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"date-priority\">\n\t\t\t\t\t\t\t<div><strong>Due:</strong> ${clickedEvent.dueDate}</div>\n\t\t\t\t\t\t\t<div><strong>Priority:</strong> ${clickedEvent.priority}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wrap-btn wrap-complete\">\n\t\t\t\t\t\t\t<button>Complete: ${clickedEvent.complete ? \"Yes\" : \"No\"}</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>`; \n\t\tcloseCard();\n\t}\n\n\tfunction closeCard() {\n\t\tif (expandedCard.innerHTML == \"\") return;\n\t\tconst closeButton = document.querySelector('[data-card-close]');\n\t\tcloseButton.addEventListener(\"click\", () => {\n\t\t\texpandedCard.classList.remove('card-border');\n\t\t\texpandedCard.innerHTML = \"\";\n\t\t\toverlay.classList.remove('active');\n\t\t})\n\t}\n})();\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/domToDo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _domToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domToDo.js */ \"./src/domToDo.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n\tconstructor(title, description, projectToDo=[]) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.projectToDo = projectToDo;\n\t}\n\n\taddToDo(todo) {\n\t\tthis.projectToDo.push(todo);\n\t}\n}\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/project.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n\tconstructor(params) {\n\t\tthis.title = params.title;\n\t\tthis.description = params.description;\n\t\tthis.dueDate = params.dueDate;\n\t\tthis.priority = params.priority;\n\t\tthis.complete = false;\n\t}\n\n\ttoggleComplete() {\n\t\tif (this.complete === false) {\n\t\t\tthis.complete = true;\n\t\t} else {\n\t\t\tthis.complete = false;\n\t\t}\n\t}\n\n\tupdateTitle(title) {\n\t\tthis.title = title;\n\t}\n\n\tupdateDescription(description) {\n\t\tthis.description = description;\n\t}\n\n\tupdateDueDate(dueDate) {\n\t\tthis.dueDate = dueDate;\n\t}\n\n\tupdatePriority(priority) {\n\t\tthis.priority = priorityArray[priority];\n\t}\n}\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/toDo.js?");

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