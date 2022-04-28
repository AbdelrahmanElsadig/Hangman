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

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pages.js */ \"./scripts/modules/pages.js\");\n/* harmony import */ var _modules_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/draw.js */ \"./scripts/modules/draw.js\");\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game.js */ \"./scripts/modules/game.js\");\n\r\n\r\n\r\n\r\n(0,_modules_pages_js__WEBPACK_IMPORTED_MODULE_0__.create_main_menu)();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://hangman/./scripts/app.js?");

/***/ }),

/***/ "./scripts/modules/draw.js":
/*!*********************************!*\
  !*** ./scripts/modules/draw.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_hanger\": () => (/* binding */ create_hanger),\n/* harmony export */   \"draw_functions\": () => (/* binding */ draw_functions)\n/* harmony export */ });\n\r\n\r\n\r\n\r\nfunction create_hanger(){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.fillStyle = '#ffffff';\r\n    cx.strokeStyle = '#ffffff';\r\n    cx.lineWidth = 4\r\n    cx.moveTo(50, 250);\r\n    cx.lineTo(0, 250);\r\n    cx.moveTo(25, 250);\r\n    cx.lineTo(25, 0);\r\n    cx.lineTo(150, 0);\r\n    cx.stroke();\r\n\r\n};\r\n\r\n\r\nfunction create_carrier(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.beginPath();\r\n    cx.moveTo(150, 0);\r\n    cx.lineTo(150, 30);\r\n    cx.stroke();\r\n    dispatch({tries: 1})\r\n};\r\n\r\nfunction create_head(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.lineWidth = 1\r\n    cx.moveTo(170, 50);\r\n    cx.arc(150, 30 + 20, 20, 0, 7);\r\n    cx.stroke();\r\n    dispatch({tries: 2})\r\n};\r\n\r\nfunction create_body(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.moveTo(150, 70);\r\n    cx.lineTo(150, 150);\r\n    cx.stroke();\r\n    dispatch({tries: 3});\r\n};\r\n\r\n\r\nfunction create_left_hand(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.moveTo(150, 100);\r\n    cx.lineTo(120, 80);\r\n    cx.stroke();\r\n    dispatch({tries: 4});\r\n};\r\n\r\nfunction create_right_hand(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.moveTo(150, 100);\r\n    cx.lineTo(180, 80);\r\n    cx.stroke();\r\n    dispatch({tries: 5});\r\n};\r\n\r\nfunction create_left_leg(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.moveTo(150, 150);\r\n    cx.lineTo(120, 180);\r\n    cx.stroke();\r\n    dispatch({tries: 6})\r\n};\r\n\r\nfunction create_right_leg(dispatch){\r\n    const canvas = document.querySelector('canvas');\r\n    const cx = canvas.getContext('2d');\r\n    cx.moveTo(150, 150);\r\n    cx.lineTo(180, 180);\r\n    cx.stroke();\r\n    dispatch({tries: 7})\r\n}\r\n\r\n\r\n\r\nconst draw_functions = [create_carrier, create_head, create_body,\r\n    create_left_hand, create_right_hand, create_left_leg, create_right_leg]\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://hangman/./scripts/modules/draw.js?");

/***/ }),

/***/ "./scripts/modules/game.js":
/*!*********************************!*\
  !*** ./scripts/modules/game.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game),\n/* harmony export */   \"State_Manager\": () => (/* binding */ State_Manager),\n/* harmony export */   \"create_start_state\": () => (/* binding */ create_start_state),\n/* harmony export */   \"game_over\": () => (/* binding */ game_over)\n/* harmony export */ });\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ \"./scripts/modules/pages.js\");\n\r\n\r\nconst words = [{hint: 'The Game Your Playing Right Now', word: 'HANGMAN'},\r\n               {hint: 'THEY LIVE FREELY AND CONTROL THE WORLD', word: 'RICH'},\r\n               {hint: 'Its a complete waste of time and will put you in debt', word:'COLLEGE'},\r\n               {hint: 'The best Frontend Library', word: 'REACT'},\r\n               {hint: 'The Best Programming Language', word: 'JAVASCRIPT'}];\r\n\r\nfunction create_start_state(){\r\n    const start_state = {\r\n        word: words[Math.round(Math.random() * 4)],\r\n        tries: 0\r\n    }\r\n    function get_blanks(word){\r\n        let s = '';\r\n        for(let i =0; i < word.word.length; i++){\r\n            s += '_';\r\n        };\r\n        return s;\r\n    };\r\n    \r\n    return Object.assign({} ,start_state,{blanks: get_blanks(start_state.word)})\r\n}\r\n\r\n\r\nclass Game{\r\n    constructor(state, word){\r\n        this.dom = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.create_game_page)(word);\r\n        this.state = state;\r\n        this.blanks =this.dom.querySelector('.blanks');\r\n    };\r\n    sync_state(change){\r\n        this.state = Object.assign(this.state, change);\r\n        this.blanks.textContent = this.state.blanks\r\n    };\r\n    \r\n}\r\n\r\n\r\nclass State_Manager{\r\n    constructor(state, config){\r\n        let {draw_functions, dispatch} = config;\r\n        this.state = state;\r\n        this.dispatch = dispatch\r\n        this.game = new Game(state, state.word);\r\n        this.draw_functions = draw_functions;\r\n        this.letter_events()\r\n    };\r\n    sync_state(change){\r\n        this.state = Object.assign(this.state, change);\r\n        this.game.sync_state(change);\r\n    };\r\n    draw(){\r\n        this.draw_functions[this.state.tries](this.dispatch);\r\n        if (this.state.tries >= 7) game_over(this.game.dom, this.state.word.word);\r\n    };\r\n\r\n\r\n    letter_events(){\r\n        let letters = document.querySelectorAll('.letter');\r\n        let word_arr = this.state.word.word.split('');\r\n        let blanks = this.game.blanks.textContent.split('')\r\n        letters.forEach(letter => {\r\n            letter.addEventListener('click', () => {\r\n                letter.classList.add('--transition')\r\n                let char = letter.textContent;\r\n                if (word_arr.indexOf(char) !== -1){\r\n                    word_arr.forEach((c,i) => {\r\n                        if (c == char){\r\n                            blanks[i] = c\r\n                        }\r\n                    });\r\n                    this.game.blanks.textContent = blanks.join('');\r\n                    this.sync_state({blanks: this.game.blanks.textContent})\r\n                    if (blanks.every(c => c !== '_')) you_win(document.querySelector('.game'),this.state.word.word)\r\n                    return\r\n                }  \r\n                this.draw();\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\nfunction game_over(game_div, word){\r\n    game_div.querySelector('.word-component').innerHTML = `<h1 class='title'> You Lost</h1>\r\n    <h1 class='title'>The Word is: ${word}</h1>`; \r\n};\r\n\r\nfunction you_win(game_div, word){\r\n    game_div.querySelector('.word-component').innerHTML = `<h1 class='title'> You Won</h1>\r\n    <h1 class='title'>The Word is: ${word}</h1>`; \r\n}\r\n\r\n\n\n//# sourceURL=webpack://hangman/./scripts/modules/game.js?");

/***/ }),

/***/ "./scripts/modules/pages.js":
/*!**********************************!*\
  !*** ./scripts/modules/pages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_game_page\": () => (/* binding */ create_game_page),\n/* harmony export */   \"create_intructions\": () => (/* binding */ create_intructions),\n/* harmony export */   \"create_main_menu\": () => (/* binding */ create_main_menu)\n/* harmony export */ });\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw.js */ \"./scripts/modules/draw.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./scripts/modules/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction create_main_menu(start_state=(0,_game_js__WEBPACK_IMPORTED_MODULE_1__.create_start_state)()){\r\n    let main_menu = document.createElement('div');\r\n    main_menu.classList.add('main-menu');\r\n    main_menu.innerHTML = `<h1 class=\"title\">HANGMAN</h1>\r\n    <button class=\"nav new-game\">New Game</button>\r\n    <button class=\"nav game-instructions\">Instructions</button>`;\r\n    main_menu.classList.add('--transition');\r\n    \r\n    document.querySelector('div')?.classList.add('--transition');\r\n    setTimeout(() => {\r\n        document.body.innerHTML = '';\r\n        document.body.appendChild(main_menu);\r\n        setTimeout(() => main_menu.classList.remove('--transition'),100) \r\n        document.querySelector('.game-instructions').addEventListener('click', () => {\r\n        create_intructions();\r\n    });\r\n        document.querySelector('.new-game').addEventListener('click', () => {\r\n        let app = new _game_js__WEBPACK_IMPORTED_MODULE_1__.State_Manager(start_state, {\r\n                draw_functions: _draw_js__WEBPACK_IMPORTED_MODULE_0__.draw_functions,\r\n                dispatch(change){\r\n                    app.sync_state(change);\r\n                }\r\n        })\r\n    });\r\n    },200)\r\n    \r\n}\r\n\r\nfunction create_intructions(){\r\n    let instructions = document.createElement('div');\r\n    instructions.classList.add('instructions');\r\n    instructions.classList.add('.--transition');\r\n    instructions.innerHTML = `<h1 class=\"title\">Hangman</h1>\r\n    <ul class=\"rules\">\r\n        <li class=\"rule\">WHEN YOU START A NEW GAME, THE GAME WILL AUTOMATICALLY CHOOSE A RANDOM WORD FOR YOU.\r\n        </li>\r\n        <li class=\"rule\">YOUR JOB IS TO GUESS THE CHOSEN WORD WITHIN 7 TRIES...</li>\r\n        <li class=\"rule\">IF YOU WIN, YOU GET TO LIVE, ELSE... YOU WILL BE HANGED TO DEATH! (WELL... NOT REALLY,\r\n            LOL.)</li>\r\n    </ul>\r\n    <button class=\"nav to-main-menu\">Main Menu</button>`;\r\n    \r\n    document.querySelector('div')?.classList.add('--transition');\r\n    setTimeout(() => {\r\n        document.body.innerHTML = '';\r\n        document.body.appendChild(instructions);\r\n        setTimeout(() => instructions.classList.remove('--transition'),100) \r\n        document.querySelector('.to-main-menu').addEventListener('click', event => {\r\n            create_main_menu();\r\n        });\r\n    },200);\r\n\r\n}\r\n\r\n\r\nfunction create_game_page(word) {\r\n    const game_div = document.createElement('div');\r\n    game_div.classList.add('game');\r\n    let blanks = (() => {\r\n        let s = '';\r\n        for (let i =0; i < word.word.length; i++){\r\n            s += '_';\r\n        };\r\n        return s\r\n    })()\r\n    game_div.innerHTML = `<h1 class=\"title\">Hangman</h1>\r\n    <canvas width=\"250\" height=\"250\"></canvas>\r\n    </div>\r\n    <div class='word-component'>\r\n    <div class='blanks'>${blanks}</div>\r\n    <p class=\"hint\">Hint: ${word.hint}</p>\r\n    <h3 class=\"tip\">PICK A LETTER, TRY TO GUESS THE WORD...</h3>\r\n    <div class=\"letters\"></div>\r\n    </div>\r\n    <button class=\"nav to-main-menu\">Main Menu</button>`;\r\n    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\n    game_div.classList.add('--transition');\r\n    const letters = game_div.querySelector('.letters');\r\n    for (let c of alphabet){\r\n        let p = document.createElement('p');\r\n        p.classList.add('letter');\r\n        p.textContent = c;\r\n        letters.appendChild(p);\r\n    }\r\n    document.body.appendChild(game_div)\r\n    document.querySelector('div')?.classList.add('--transition');\r\n    setTimeout(() => {\r\n    document.body.innerHTML = '';\r\n    document.body.appendChild(game_div);\r\n    setTimeout(() => game_div.classList.remove('--transition'),100) \r\n    },200)\r\n    document.querySelector('.to-main-menu').addEventListener('click', () => {\r\n        create_main_menu();\r\n    });\r\n    (0,_draw_js__WEBPACK_IMPORTED_MODULE_0__.create_hanger)();\r\n    return game_div\r\n}\r\n\r\ncreate_main_menu()\r\n\r\n\r\n\n\n//# sourceURL=webpack://hangman/./scripts/modules/pages.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;