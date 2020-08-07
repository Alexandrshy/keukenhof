// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../dist/index.js":[function(require,module,exports) {
var define;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Keukenhof = {});
}(this, function (e) {
  "use strict";

  var t = "data-keukenhof-open",
      s = "data-keukenhof-close",
      i = "disable",
      o = "enable",
      n = "isOpen",
      l = "isOpening",
      r = "isClosing",
      a = "Esc",
      d = "Escape",
      c = "Tab",
      h = ["a[href]", "area[href]", "button:not([disabled]):not([aria-hidden])", "input:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", '[tabindex]:not([tabindex^="-"])'],
      u = function () {
    var e = /*#__PURE__*/function () {
      function e(_ref) {
        var _ref$selector = _ref.selector,
            _e = _ref$selector === void 0 ? "" : _ref$selector,
            _ref$triggers = _ref.triggers,
            i = _ref$triggers === void 0 ? [] : _ref$triggers,
            _ref$openAttribute = _ref.openAttribute,
            o = _ref$openAttribute === void 0 ? t : _ref$openAttribute,
            _ref$closeAttribute = _ref.closeAttribute,
            l = _ref$closeAttribute === void 0 ? s : _ref$closeAttribute,
            _ref$openClass = _ref.openClass,
            r = _ref$openClass === void 0 ? n : _ref$openClass,
            _ref$hasAnimation = _ref.hasAnimation,
            a = _ref$hasAnimation === void 0 ? !1 : _ref$hasAnimation,
            _ref$isAssignFocus = _ref.isAssignFocus,
            d = _ref$isAssignFocus === void 0 ? !0 : _ref$isAssignFocus,
            _ref$isFocusInside = _ref.isFocusInside,
            c = _ref$isFocusInside === void 0 ? !0 : _ref$isFocusInside,
            _ref$scrollBehavior = _ref.scrollBehavior,
            h = _ref$scrollBehavior === void 0 ? {} : _ref$scrollBehavior,
            _ref$onOpen = _ref.onOpen,
            u = _ref$onOpen === void 0 ? function () {} : _ref$onOpen,
            _ref$onClose = _ref.onClose,
            v = _ref$onClose === void 0 ? function () {} : _ref$onClose,
            _ref$beforeOpen = _ref.beforeOpen,
            m = _ref$beforeOpen === void 0 ? function () {
          return !0;
        } : _ref$beforeOpen,
            _ref$beforeClose = _ref.beforeClose,
            f = _ref$beforeClose === void 0 ? function () {
          return !0;
        } : _ref$beforeClose;

        _classCallCheck(this, e);

        this.$modal = document.querySelector(_e), this.onOpen = u, this.onClose = v, this.beforeOpen = m, this.beforeClose = f, this.openAttribute = o, this.closeAttribute = l, this.openClass = r, this.hasAnimation = a, this.isAssignFocus = d, this.isFocusInside = c, this.scrollBehavior = Object.assign({
          isDisabled: !0,
          container: "body",
          defaultValue: ""
        }, h), this.registerNodes(i), this.onClick = this.onClick.bind(this), this.onKeyup = this.onKeyup.bind(this), this.onKeydown = this.onKeydown.bind(this);
      }

      _createClass(e, [{
        key: "registerNodes",
        value: function registerNodes(e) {
          var _this = this;

          e.filter(Boolean).forEach(function (e) {
            return e.addEventListener("click", function (e) {
              return _this.open(e);
            });
          });
        }
      }, {
        key: "open",
        value: function open(e) {
          var t;
          this.beforeOpen(e) && (this.setAriaHidden(!1), null === (t = this.$modal) || void 0 === t || t.classList.add(this.openClass), this.changeScrollBehavior(i), this.addEventListeners(), this.preparationOpeningModal(e));
        }
      }, {
        key: "preparationOpeningModal",
        value: function preparationOpeningModal(e) {
          var _this2 = this;

          var t, s;

          if (this.hasAnimation) {
            null === (t = this.$modal) || void 0 === t || t.classList.add(l);

            var _i = function _i() {
              var t, s;
              _this2.isAssignFocus && _this2.setFocus(), null === (t = _this2.$modal) || void 0 === t || t.classList.remove(l), _this2.onOpen(e), null === (s = _this2.$modal) || void 0 === s || s.removeEventListener("animationend", _i);
            };

            null === (s = this.$modal) || void 0 === s || s.addEventListener("animationend", _i);
          } else this.isAssignFocus && this.setFocus(), this.onOpen(e);
        }
      }, {
        key: "close",
        value: function close(e) {
          this.beforeClose(e) && (this.setAriaHidden(!0), this.changeScrollBehavior(o), this.removeEventListeners(), this.preparationClosingModal(e));
        }
      }, {
        key: "preparationClosingModal",
        value: function preparationClosingModal(e) {
          var _this3 = this;

          var t, s, i;

          if (this.hasAnimation) {
            null === (t = this.$modal) || void 0 === t || t.classList.add(r);

            var _i2 = function _i2() {
              var t, s, o;
              null === (t = _this3.$modal) || void 0 === t || t.classList.remove(r), null === (s = _this3.$modal) || void 0 === s || s.classList.remove(_this3.openClass), _this3.onClose(e), null === (o = _this3.$modal) || void 0 === o || o.removeEventListener("animationend", _i2);
            };

            null === (s = this.$modal) || void 0 === s || s.addEventListener("animationend", _i2);
          } else null === (i = this.$modal) || void 0 === i || i.classList.remove(this.openClass), this.onClose(e);
        }
      }, {
        key: "closeBySelector",
        value: function closeBySelector(e) {
          var t = document.querySelector(e);
          t && (this.$modal = t, this.close());
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          e.target.closest("[".concat(this.closeAttribute, "]")) && this.close(e);
        }
      }, {
        key: "onKeyup",
        value: function onKeyup(e) {
          e.key !== d && e.key !== a || this.close(e);
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(e) {
          e.key === c && this.controlFocus(e);
        }
      }, {
        key: "addEventListeners",
        value: function addEventListeners() {
          var e, t;
          null === (e = this.$modal) || void 0 === e || e.addEventListener("touchstart", this.onClick), null === (t = this.$modal) || void 0 === t || t.addEventListener("click", this.onClick), document.addEventListener("keyup", this.onKeyup), this.isFocusInside && document.addEventListener("keydown", this.onKeydown);
        }
      }, {
        key: "removeEventListeners",
        value: function removeEventListeners() {
          var e, t;
          null === (e = this.$modal) || void 0 === e || e.removeEventListener("touchstart", this.onClick), null === (t = this.$modal) || void 0 === t || t.removeEventListener("click", this.onClick), document.removeEventListener("keyup", this.onKeyup), this.isFocusInside && document.removeEventListener("keydown", this.onKeydown);
        }
      }, {
        key: "changeScrollBehavior",
        value: function changeScrollBehavior(e) {
          if (!this.scrollBehavior.isDisabled) return;
          var t = document.querySelector(this.scrollBehavior.container);
          t && (e === o ? t.style.overflow = this.scrollBehavior.defaultValue : e === i && (t.style.overflow = "hidden"));
        }
      }, {
        key: "setAriaHidden",
        value: function setAriaHidden(e) {
          var t;
          null === (t = this.$modal) || void 0 === t || t.setAttribute("aria-hidden", String(e));
        }
      }, {
        key: "getFocusNodesList",
        value: function getFocusNodesList() {
          if (!this.$modal) return [];
          var e = this.$modal.querySelectorAll(h.join(", "));
          return Array.from(e);
        }
      }, {
        key: "setFocus",
        value: function setFocus() {
          var _this4 = this;

          var e = this.getFocusNodesList();
          if (!e.length) return;
          var t = e.filter(function (e) {
            return !e.hasAttribute(_this4.closeAttribute);
          });
          (t.length ? t[0] : e[0]).focus();
        }
      }, {
        key: "controlFocus",
        value: function controlFocus(e) {
          var t;
          var s = this.getFocusNodesList();
          if (!s.length) return;
          var i = s.filter(function (_ref2) {
            var e = _ref2.offsetParent;
            return null !== e;
          });

          if (null === (t = this.$modal) || void 0 === t ? void 0 : t.contains(document.activeElement)) {
            var _t = i.indexOf(document.activeElement),
                _s = i.length;

            e.shiftKey && 0 === _t && (i[_s - 1].focus(), e.preventDefault()), !e.shiftKey && _s && _t === _s - 1 && (i[0].focus(), e.preventDefault());
          } else i[0].focus();
        }
      }]);

      return e;
    }();

    var u;
    return {
      init: function init(s) {
        var i = Object.assign({
          openAttribute: t
        }, s),
            o = document.querySelectorAll("[".concat(i.openAttribute, "]")),
            n = function (e, t) {
          return e.reduce(function (e, s) {
            var i = s.getAttribute(t);
            return i ? (e[i] || (e[i] = []), e[i].push(s), e) : e;
          }, {});
        }(Array.from(o), i.openAttribute);

        for (var _t2 in n) {
          var _s2 = n[_t2];
          i.selector = _t2, i.triggers = _toConsumableArray(_s2), u = new e(i);
        }
      },
      open: function open(t, s) {
        var i = s || {};
        u = new e(Object.assign(Object.assign({}, i), {
          selector: t
        })), u.open();
      },
      close: function close(e) {
        u && (e ? u.closeBySelector(e) : u.close());
      }
    };
  }();

  window.Keukenhof = u, e.Keukenhof = u, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52351" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../dist/index.js"], null)
//# sourceMappingURL=/dist.2e89932f.js.map