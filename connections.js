"use strict";
exports.__esModule = true;
exports.Connections = void 0;
var mongoose = require("mongoose");
var configPrivate = require("./config.private");
function schemaDefaults(schema) {
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false
    });
}
var Connections = /** @class */ (function () {
    function Connections() {
    }
    Connections.initialize = function () {
        mongoose.Promise = global.Promise;
        mongoose.plugin(schemaDefaults);
        mongoose.connect(configPrivate.hosts.mongoDB_main.host);
        this.main = mongoose.connection;
    };
    return Connections;
}());
exports.Connections = Connections;
