"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var head_1 = require("next/head");
require("./styles.css");
function CustomApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement("div", null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Welcome to dreamvolt.com!")),
        React.createElement("main", null,
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = CustomApp;
