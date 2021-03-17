var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AgendaFavouriteSchema = new Schema(
  {
    agenda_id: { type: Schema.Types.ObjectId, ref: "agendas" },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    status: { type: Boolean, default: false },
  },
  { collection: "AgendaFavourite" }
);

var AgendaFavourite = mongoose.model("AgendaFavourite", AgendaFavouriteSchema);

module.exports = AgendaFavourite;
