/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Modules/Auth.ts":
/*!*****************************!*\
  !*** ./src/Modules/Auth.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar firebase = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\nvar Auth = /** @class */ (function () {\n    function Auth() {\n    }\n    Auth.getUID = function (idToken) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, firebase\n                        .auth()\n                        .verifyIdToken(idToken)\n                        .then(function (decoded) {\n                        return decoded.uid;\n                    })];\n            });\n        });\n    };\n    Auth.fetchIdTokenResult = function (idToken) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, firebase\n                            .auth()\n                            .verifyIdToken(idToken)\n                            .then(function (decoded) { return __awaiter(_this, void 0, void 0, function () {\n                            var accessType;\n                            return __generator(this, function (_a) {\n                                switch (_a.label) {\n                                    case 0: return [4 /*yield*/, firebase\n                                            .auth()\n                                            .getUser(decoded.uid)\n                                            .then(function (user) {\n                                            return user.customClaims[\"accessType\"];\n                                        })];\n                                    case 1:\n                                        accessType = _a.sent();\n                                        return [2 /*return*/, {\n                                                uid: decoded.uid,\n                                                authTime: decoded.auth_time,\n                                                accessType: accessType\n                                            }];\n                                }\n                            });\n                        }); })];\n                    case 1:\n                        result = _a.sent();\n                        return [2 /*return*/, result];\n                }\n            });\n        });\n    };\n    return Auth;\n}());\nexports[\"default\"] = Auth;\n\n\n//# sourceURL=webpack:///./src/Modules/Auth.ts?");

/***/ }),

/***/ "./src/Modules/ChatDatabase.ts":
/*!*************************************!*\
  !*** ./src/Modules/ChatDatabase.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar redis = __webpack_require__(/*! redis */ \"redis\");\nvar ChatDatabase = /** @class */ (function () {\n    function ChatDatabase() {\n    }\n    ChatDatabase.writeMessage = function (message, sender, room) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, ChatDatabase.redisClient.lpush(\"\" + room, sender + \":\" + new Date().getTime() + \":\" + message)];\n                    case 1:\n                        result = _a.sent();\n                        return [2 /*return*/, result];\n                }\n            });\n        });\n    };\n    ChatDatabase.redisClient = redis.createClient();\n    return ChatDatabase;\n}());\nexports[\"default\"] = ChatDatabase;\n\n\n//# sourceURL=webpack:///./src/Modules/ChatDatabase.ts?");

/***/ }),

/***/ "./src/Modules/Controllers/UserController.ts":
/*!***************************************************!*\
  !*** ./src/Modules/Controllers/UserController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar redis = __webpack_require__(/*! redis */ \"redis\");\nvar UserController = /** @class */ (function () {\n    function UserController() {\n    }\n    UserController.setStatus = function (userUID, status) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, UserController.redisClient.hset(\"userdata:\" + userUID, \"status\", status)];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    UserController.redisClient = redis.createClient();\n    return UserController;\n}());\nexports[\"default\"] = UserController;\n\n\n//# sourceURL=webpack:///./src/Modules/Controllers/UserController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\n__webpack_require__(/*! express */ \"express\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar socket = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar redis = __webpack_require__(/*! redis */ \"redis\");\nvar firebase = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\nvar Auth_1 = __webpack_require__(/*! ./Modules/Auth */ \"./src/Modules/Auth.ts\");\nvar ChatDatabase_1 = __webpack_require__(/*! ./Modules/ChatDatabase */ \"./src/Modules/ChatDatabase.ts\");\nvar UserController_1 = __webpack_require__(/*! ./Modules/Controllers/UserController */ \"./src/Modules/Controllers/UserController.ts\");\nvar serviceAccount = __webpack_require__(/*! ./serviceAccount.json */ \"./src/serviceAccount.json\");\nfirebase.initializeApp({\n    credential: firebase.credential.cert(serviceAccount),\n    databaseURL: \"https://fairy-6c964.firebaseio.com\"\n});\nvar redisClient = redis.createClient();\nredisClient.flushall();\nvar connections = {};\nvar app = express();\napp.set(\"port\", 3332);\nvar http = __webpack_require__(/*! http */ \"http\").Server(app);\nvar io = socket(http);\napp.get(\"/\", function (req, res) {\n    res.sendFile(path.resolve(\"./test.html\"));\n});\napp.get(\"/2\", function (req, res) {\n    res.sendFile(path.resolve(\"./test2.html\"));\n});\nio.on(\"connection\", function (socket) {\n    /**\n     * connect_user invokes when user authentificated in firebase system, anonymous or not.\n     */\n    socket.on(\"connect_user\", function (message) { return __awaiter(void 0, void 0, void 0, function () {\n        var idToken, uid_1, uidConnections, newConnection, e_1;\n        var _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _b.trys.push([0, 3, , 4]);\n                    idToken = socket.handshake.query[\"id_token\"];\n                    if (!idToken) return [3 /*break*/, 2];\n                    return [4 /*yield*/, Auth_1[\"default\"].getUID(idToken)];\n                case 1:\n                    uid_1 = _b.sent();\n                    uidConnections = connections[uid_1];\n                    if (uidConnections) {\n                        connections[uid_1].push(socket);\n                    }\n                    else if (!uidConnections) {\n                        newConnection = (_a = {}, _a[uid_1] = [socket], _a);\n                        Object.assign(connections, newConnection);\n                    }\n                    console.log(\"user connected\", uid_1);\n                    console.log(\"TOTAL CONNECTED USERS\", Object.keys(connections).length);\n                    console.log(\"CONNECTIONS BY THIS USER\", connections[uid_1] ? connections[uid_1].length : 0);\n                    /**\n                     * Join all rooms user is in\n                     */\n                    redisClient.smembers(\"roomsETE:\" + uid_1, function (err, reply) {\n                        if (err)\n                            throw Error(err.toString());\n                        reply.forEach(function (room) {\n                            socket.join(room);\n                        });\n                    });\n                    socket.on(\"disconnect\", function () {\n                        var connectionsTotal = connections[uid_1].length;\n                        if (connectionsTotal === 1) {\n                            /**\n                             * if all connections is lost, delete connection from pull and set offline status\n                             */\n                            // UserController.setOffline(uid);\n                            delete connections[uid_1];\n                        }\n                        else if (connectionsTotal > 1) {\n                            var i = connections[uid_1].findIndex(function (sock) { return sock === socket; });\n                            connections[uid_1].splice(i, 1);\n                        }\n                    });\n                    _b.label = 2;\n                case 2: return [3 /*break*/, 4];\n                case 3:\n                    e_1 = _b.sent();\n                    console.error(e_1);\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    }); });\n    /**\n     * Broadcasts message to the target room.\n     * Write message to RedisDB requires 2 parameters: sender firebase UID and room.\n     */\n    socket.on(\"broadcast\", function (data) { return __awaiter(void 0, void 0, void 0, function () {\n        var idToken, sender;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    idToken = socket.handshake.query[\"id_token\"];\n                    return [4 /*yield*/, Auth_1[\"default\"].getUID(idToken)];\n                case 1:\n                    sender = _a.sent();\n                    console.log(\"start broadcast to\", data.room);\n                    /**\n                     * Write message to redis database\n                     */\n                    ChatDatabase_1[\"default\"].writeMessage(data.msg, sender, data.room);\n                    socket.broadcast\n                        .to(data.room)\n                        .emit(\"receive_message\", { message: data.msg });\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n    /**\n     * This emitter specially designed for firebase activity listener. It tracks activity across all connections\n     * and sets user precense status.\n     */\n    socket.on(\"setStatus\", function (data) { return __awaiter(void 0, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            UserController_1[\"default\"].setStatus(data.uid, data.status);\n            return [2 /*return*/];\n        });\n    }); });\n    socket.on(\"invite\", function (room) { return __awaiter(void 0, void 0, void 0, function () {\n        var idToken, to, from, newRoom, receiver, sender;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    idToken = socket.handshake.query[\"id_token\"];\n                    to = room.to.to;\n                    return [4 /*yield*/, Auth_1[\"default\"].getUID(idToken)];\n                case 1:\n                    from = _a.sent();\n                    console.log(\"INVITED PERSON\", room.to);\n                    console.log(\"FROM PERSON\", room.from);\n                    newRoom = from + \":\" + to;\n                    /*\n                     * Write data to both sender and receiver accounts\n                     */\n                    redisClient.sadd(\"roomsETE:\" + to, newRoom);\n                    redisClient.sadd(\"roomsETE:\" + from, newRoom);\n                    receiver = connections[to];\n                    sender = connections[from];\n                    if (receiver) {\n                        receiver.forEach(function (socket) { return socket.join(newRoom); });\n                        // receiver.emit(\"create_chat_room\", {room: newRoom, recipient: room.from});\n                    }\n                    if (sender) {\n                        sender.forEach(function (socket) { return socket.join(newRoom); });\n                        // receiver.emit(\"create_chat_room\", {room: newRoom, recipient: room.to});\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n});\nhttp.listen(3332, function () {\n    console.log(\"SERVER START LISTENING\");\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/serviceAccount.json":
/*!*********************************!*\
  !*** ./src/serviceAccount.json ***!
  \*********************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"type\\\":\\\"service_account\\\",\\\"project_id\\\":\\\"fairy-6c964\\\",\\\"private_key_id\\\":\\\"74b9eb515b91cbbfa9d69b0b378b9243534ba9f0\\\",\\\"private_key\\\":\\\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCTghp96G5O7z2g\\\\n9QUVphWANUu7ZROrEls0byq2eZvteLfONKjWVJ+WFTOG2W1rgT1/lUrtgyBf/S0E\\\\nRH/oi3x2ilXBjPrmeLmH24aA9Xs6qSL5yDmRgtd9nGwUs3DqBvInIAJ2I4RaHv++\\\\nCJPJ4XJhSy96D/hKBhzoO+wmlqK9POvlnSBsDVuQY8Ov+np6IJGqn2lQ3eGCaJNW\\\\nh/HjH7AYf5lSFIa3YRMosIHIxUBLlI7yw12GPDsznjomCNo2fbRftgHChTej/fCb\\\\nt6HzgFRcnF4cVvN5MZso6RXNQUvPMRx5qbqGWpisrzxMQSjHUsdqAonkP1fTVT5q\\\\nJAKlpyHxAgMBAAECggEAH+oo2DAHWc26bE5HBNmT0lL1qTxjxoIouI4K1EM4gOc7\\\\nAYL0OrdBdgPtS5JUccubJjUDaqMRyKLq7/7wG7y+N5mTl1Zs3JunLKVLEzDJsjXx\\\\nCtEO35RLEnLbEZmHZyMMlnl+/teNZcBKPe/2JdpA2JsfUQ4OftmWvIpmfCzgVgf5\\\\ntBmtlnRCMRokKROIx8sIgsx/rMGMMzYPdkkCZgI+Yv05pApT1fN3qrYJUjdDqhUu\\\\nHsE6MZNRW24thEA2NFZoRp7wVlcur7LivGHh8TyCDU5RhtjpATasBrHn59VjTPbR\\\\nbbVJY8XGzHCaCxKw3X4jtbA9tQRNsuc6C5V6DMLqCQKBgQDIFABF/VT1hCjLQYv7\\\\nf5A0frx+cXWV8ztC0Eq2L6wPkt/iDAqlrVxkEkKe2wuj1otp2nBKBM2OFJ5ygiBT\\\\nQf4urqSxhOX0py7utJ/DESTxichFAiaprWpCl5kjW8krvdK4Fu9cu+oEvw7sqI53\\\\nGHUglINLOkVIZ3wSbPCILqN3tQKBgQC8vJ4mVtG8L+GmwlXM52loDVj03sDhCN3q\\\\n/XqYooOknbcaUsbDwli3Gbhw2S/Sy005R+QiRLvZrKk6kyZdHQ4RQBkx4vHCj5aW\\\\n0XZOdQxrrrjt8M847A51D0KFm6XM0Dxl3+mDYz0fOxSnItmJ84/lwY6aDxI/v6zr\\\\n/X+jQ17uzQKBgB8ylzRSoyvBVscSymwF4Qt+c4/Xyzj9e1EYv32XA2JOSaCqtgJN\\\\nfOmRu1ef2jnK22Q/DmFMTG0KJAbA6Z9x29uVmdKgYWb7pqLMAVleU/9ht5ujETpF\\\\n8xq9HsDXsA+lArV3xg0UtBHXZNFcGxLQ+nqBDdPuGx2GHV+WIw9pDk49AoGAIbYn\\\\nIX38dHqw+ZJYtQLYpwdLTmHDXe6xhNnF3iGZFfw9ymviqPC72+iyMyX4DtTVdFfM\\\\n/fn8+8KFb7r87UDVVGt4lJqOyEvRgBrl4NmzYECTM50Bxo8TfgE9xpOop87CGwhF\\\\ns3w0XLG23Kuy45snpshN6mKqxcw83OIovEa6XDkCgYBoOYXQ9mzWmbKWARBEk4Gq\\\\nDwOjT2JnzdMN6JiqbCSJLyO8+mOg0vjdc+4zrLRbsrdN90wZUKlqYlMze6MQnEtu\\\\nLnPQ3gVPrI0F0HDxlzWbe7dYSZs00XPLabzCgQiirFuX3W29VAWxVs3fMSAmodr+\\\\nQhkSrtYZ/YrVeLhIURzs3Q==\\\\n-----END PRIVATE KEY-----\\\\n\\\",\\\"client_email\\\":\\\"firebase-adminsdk-ijeut@fairy-6c964.iam.gserviceaccount.com\\\",\\\"client_id\\\":\\\"110360407585462916556\\\",\\\"auth_uri\\\":\\\"https://accounts.google.com/o/oauth2/auth\\\",\\\"token_uri\\\":\\\"https://oauth2.googleapis.com/token\\\",\\\"auth_provider_x509_cert_url\\\":\\\"https://www.googleapis.com/oauth2/v1/certs\\\",\\\"client_x509_cert_url\\\":\\\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ijeut%40fairy-6c964.iam.gserviceaccount.com\\\"}\");\n\n//# sourceURL=webpack:///./src/serviceAccount.json?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-admin\");\n\n//# sourceURL=webpack:///external_%22firebase-admin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });