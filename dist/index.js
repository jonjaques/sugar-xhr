module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _get = __webpack_require__(1);

	var _get2 = _interopRequireDefault(_get);

	var _post = __webpack_require__(8);

	var _post2 = _interopRequireDefault(_post);

	var _put = __webpack_require__(9);

	var _put2 = _interopRequireDefault(_put);

	var _delete = __webpack_require__(10);

	var _delete2 = _interopRequireDefault(_delete);

	exports.get = _get2['default'];
	exports.post = _post2['default'];
	exports.put = _put2['default'];
	exports.del = _delete2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libRequest = __webpack_require__(2);

	var _libRequest2 = _interopRequireDefault(_libRequest);

	var _url = __webpack_require__(7);

	var _url2 = _interopRequireDefault(_url);

	exports['default'] = function (url, query, opts) {
	  if (query === undefined) query = null;

	  var parsed = _url2['default'].parse(url);
	  if (query && Object.keys(query).length) {
	    if (!parsed.query) {
	      parsed.query = {};
	    }
	    Object.keys(query).forEach(function (key) {
	      parsed.query[key] = query[key];
	    });
	    url = _url2['default'].format(parsed);
	  }
	  return (0, _libRequest2['default'])('get', url, null, opts);
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _es6Promise = __webpack_require__(3);

	var _superagent = __webpack_require__(4);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _response = __webpack_require__(5);

	var _response2 = _interopRequireDefault(_response);

	exports['default'] = function (method, url, data, opts) {
	  return new _es6Promise.Promise(function (resolve, reject) {
	    var xhr = _superagent2['default'][method](url);
	    if (data) xhr.send(data);
	    if (opts && opts.headers) xhr.set(opts.headers);
	    xhr.end((0, _response2['default'])(resolve, reject, opts));
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("es6-promise");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("superagent");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	exports['default'] = function (resolve, reject, opts) {
	  return function (err, res) {
	    if (err) return reject(err);
	    if (!res.ok) return reject(res);
	    resolve(res);
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("url");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libRequest = __webpack_require__(2);

	var _libRequest2 = _interopRequireDefault(_libRequest);

	exports['default'] = function (url, data, opts) {
	  return (0, _libRequest2['default'])('post', url, data, opts);
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libRequest = __webpack_require__(2);

	var _libRequest2 = _interopRequireDefault(_libRequest);

	exports['default'] = function (url, data, opts) {
	  return (0, _libRequest2['default'])('put', url, data, opts);
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libRequest = __webpack_require__(2);

	var _libRequest2 = _interopRequireDefault(_libRequest);

	exports['default'] = function (url, opts) {
	  return (0, _libRequest2['default'])('del', url, null, opts);
	};

	module.exports = exports['default'];

/***/ }
/******/ ]);