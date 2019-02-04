"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("ts-runtime/lib");
var __1 = require("../");
exports.Opto = lib_1.default.type("Opto", lib_1.default.object(lib_1.default.property("greeting", lib_1.default.nullable(lib_1.default.string()))));
var O = lib_1.default.type("O", lib_1.default.object(lib_1.default.property("field", lib_1.default.nullable(lib_1.default.boolean()))));
exports.Generic = lib_1.default.type("Generic", function (Generic) {
    var T = Generic.typeParameter("T", lib_1.default.nullable(lib_1.default.ref(O)));
    return lib_1.default.object(lib_1.default.property("oFields", lib_1.default.nullable(T)));
});
exports.FlatOpto = lib_1.default.type("FlatOpto", lib_1.default.nullable(lib_1.default.intersection(lib_1.default.nullable(lib_1.default.ref(__1.Parent)), lib_1.default.nullable(lib_1.default.ref(exports.Opto)))));
