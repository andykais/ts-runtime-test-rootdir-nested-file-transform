"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("ts-runtime/lib");
exports.Parent = lib_1.default.type("Parent", lib_1.default.object(lib_1.default.property("one", lib_1.default.nullable(lib_1.default.number())), lib_1.default.property("two", lib_1.default.nullable(lib_1.default.string()))));
