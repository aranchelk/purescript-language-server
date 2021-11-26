"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeLensRefresh = void 0;
var node_1 = require("vscode-languageserver/node");
var codeLensRefresh = function (conn) { return function () {
    return conn.sendRequest(node_1.CodeLensRefreshRequest.type);
}; };
exports.codeLensRefresh = codeLensRefresh;