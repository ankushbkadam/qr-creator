"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_qr_code_1 = require("react-qr-code");
function App() {
    var DEFAULTS = {
        value: '',
        back: '#fff',
        fore: '#000',
        size: 256
    };
    var _a = react_1.useState(DEFAULTS.value), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(DEFAULTS.back), back = _b[0], setBack = _b[1];
    var _c = react_1.useState(DEFAULTS.fore), fore = _c[0], setFore = _c[1];
    var _d = react_1.useState(DEFAULTS.size), size = _d[0], setSize = _d[1];
    var renderController = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", value: value, onChange: function (e) { return setValue(e.target.value || DEFAULTS.value); }, placeholder: "Value of Qr-code" })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", value: back, onChange: function (e) { return setBack(e.target.value || DEFAULTS.back); }, placeholder: "Background color" })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "text", value: fore, onChange: function (e) { return setFore(e.target.value || DEFAULTS.fore); }, placeholder: "Foreground color" })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("input", { type: "number", min: DEFAULTS.size, value: size, onChange: function (e) { return setSize(parseInt(e.target.value) || DEFAULTS.size); }, placeholder: "Size of Qr-code" }))));
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("center", null,
            renderController(),
            react_1["default"].createElement("br", null),
            value && (react_1["default"].createElement(react_qr_code_1["default"], { value: value, bgColor: back, fgColor: fore, size: size })))));
}
exports["default"] = App;
