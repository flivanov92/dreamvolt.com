"use strict";
exports.__esModule = true;
var TopNav = function (_a) {
    var linkList = _a.linkList;
    return (React.createElement("div", null, linkList.map(function (_a, cheie) {
        var color = _a.color, destination = _a.destination, linkType = _a.linkType, title = _a.title, text = _a.text;
        return (React.createElement("a", { title: title, href: destination, key: cheie }, text));
    })));
};
TopNav.defaultProps = {
    linkList: []
};
exports["default"] = TopNav;
