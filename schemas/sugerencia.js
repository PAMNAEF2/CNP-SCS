const { model, Schema } = require("mongoose");

module.exports = model("sugerencias", new Schema({

    ServidorID: String,
    ServidorNombre: String,
    //Mensaje: { type: String, default: "" },
    CanalID: String,
    CanalNombre: String,
    CanalComandoID: String,
    CanalComandoNombre: String
    
}))