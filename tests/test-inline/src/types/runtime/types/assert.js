"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("runtime/tsr-declarations");
var lib_1 = require("ts-runtime/lib");
var _1 = require("./");
exports.validate = lib_1.default.annotate(function (arg) {
    var _argType = lib_1.default.nullable(lib_1.default.ref(_1.Opto));
    lib_1.default.param("arg", _argType).assert(arg);
    return console.log('approved!');
}, lib_1.default.function(lib_1.default.param("arg", lib_1.default.nullable(lib_1.default.ref(_1.Opto))), lib_1.default.return(lib_1.default.any())));
