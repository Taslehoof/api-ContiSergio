"use strict";
exports.__esModule = true;
exports.pasajes = exports.PasajeSchema = void 0;
var mongoose = require("mongoose");
exports.PasajeSchema = new mongoose.Schema({
    nombre: { type: String },
    aerolinea: { type: String },
    puerta: { type: String },
    hora: { type: String }
});
exports.pasajes = mongoose.model("Pasajes", exports.PasajeSchema, "pasajes");
