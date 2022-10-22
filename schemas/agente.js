const { Schema, model } = requiere("mongoose");

module.export = model("Agentes", new Schema({
    GuildID: String,
    UserID: String,
    UserTag: String,
    Placa: String
}))