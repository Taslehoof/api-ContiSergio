import * as mongoose from "mongoose";

export const PasajeSchema = new mongoose.Schema({
    nombre:{type:String},
    aerolinea:{type:String},
    puerta:{type:String},
    hora:{type: String}
});

export let pasajes = mongoose.model("Pasaje",PasajeSchema,"pasajes");