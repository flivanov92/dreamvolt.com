"use strict";
exports.__esModule = true;
var S = require("./link.style");
var Link = function (_a) {
    var title = _a.title, children = _a.children, destination = _a.destination, linkType = _a.linkType, color = _a.color, text = _a.text;
    switch (linkType) {
        case 'normal':
            return (React.createElement(S.LinkNormal, { linkType: linkType, destination: destination, title: title }, text));
        default:
            return (React.createElement(S.LinkNormal, { linkType: linkType, destination: destination, title: title }, text));
    }
};
Link.defaultProps = {
    title: 'dreamvolt',
    destination: '#',
    linkType: 'normal',
    text: 'dreamvolt',
    color: 'blue'
};
exports["default"] = Link;
