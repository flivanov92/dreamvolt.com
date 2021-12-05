"use strict";
exports.__esModule = true;
var S = require("./top-nav.style");
var link_1 = require("../link");
var TopNav = function (_a) {
    var linkList = _a.linkList;
    return (React.createElement(S.TopNav, null, linkList.map(function (_a, cheie) {
        var color = _a.color, destination = _a.destination, linkType = _a.linkType, title = _a.title, text = _a.text;
        return (React.createElement(link_1["default"], { title: title, destination: destination, key: cheie, linkType: linkType, text: text, color: color }));
    })));
};
TopNav.defaultProps = {
    linkList: []
};
exports["default"] = TopNav;
