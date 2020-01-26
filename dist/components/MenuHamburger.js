"use strict";

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MenuWrapper;

var _react = _interopRequireWildcard(require("react"));

var _menuHamburger = _interopRequireDefault(require("menu-hamburger"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (_typeof(obj) !== "object" && typeof obj !== "function")
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function MenuWrapper(props) {
    var _props$config = props.config,
        config = _props$config === void 0 ? {} : _props$config,
        menuRef = props.menuRef;
    var menuNode = (0, _react.useRef)(null);
    (0, _react.useEffect)(function() {
        if (menuNode.current) {
            var menu = _menuHamburger.default.initialize({
                rootElement: menuNode.current,
                ...config
            });

            if (!menuRef) return;
            menuRef(menu);
        }
    }, []);
    return _react.default.createElement("div", {
        ref: menuNode
    });
}
