"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinkContact = exports.LinkNormal = void 0;
var styled_components_1 = require("styled-components");
var common = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover {\n    color: rgb(18, 190, 255);\n  }\n"], ["\n  &:hover {\n    color: rgb(18, 190, 255);\n  }\n"])));
exports.LinkNormal = styled_components_1["default"].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  text-transform: uppercase;\n  border-bottom: 1px solid transparent;\n\n  &:hover {\n    border-bottom: 1px solid rgb(18, 190, 255);\n  }\n"], ["\n  ", "\n\n  text-transform: uppercase;\n  border-bottom: 1px solid transparent;\n\n  &:hover {\n    border-bottom: 1px solid rgb(18, 190, 255);\n  }\n"])), common);
exports.LinkContact = styled_components_1["default"].a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), common);
var templateObject_1, templateObject_2, templateObject_3;
