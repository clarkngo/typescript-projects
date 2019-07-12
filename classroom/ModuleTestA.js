"use strict";
exports.__esModule = true;
// export a variable
exports.addressBook = {
    kevin: '1213 N. Wall st.',
    arthur: '2321 S. Wall st.'
};
var getInfo = function (name) { return [name, exports.addressBook[name]]; };
// export a function as default
exports["default"] = getInfo;
