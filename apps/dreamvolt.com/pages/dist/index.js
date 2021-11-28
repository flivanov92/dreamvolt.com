"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Index = void 0;
var styled_components_1 = require("styled-components");
var ui_1 = require("@ai/ui");
var StyledPage = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .page {\n  }\n"], ["\n  .page {\n  }\n"])));
function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */
    var linkList = [
        {
            title: 'mynav is cool',
            destination: '/',
            text: 'home122',
            linkType: 'normal',
            color: 'blue'
        },
        {
            title: 'mynav is cool',
            destination: '/contact',
            text: 'everyone',
            linkType: 'normal',
            color: 'grey'
        },
        {
            title: 'mynav is cool',
            destination: '/portocale',
            text: 'education',
            linkType: 'normal',
            color: 'grey'
        },
        {
            title: 'mynav is cool',
            destination: '/kiwi',
            text: 'contact',
            linkType: 'normal',
            color: 'grey'
        },
        {
            title: 'mynav is cool',
            destination: '/grefe',
            text: 'media',
            linkType: 'normal',
            color: 'grey'
        },
    ];
    return (React.createElement(StyledPage, null,
        React.createElement(ui_1.Logo, { imagePath: "dv.jpg", size: "small", title: "salut" }),
        React.createElement(ui_1.TopNav, { linkList: linkList })));
}
exports.Index = Index;
exports["default"] = Index;
var templateObject_1;
