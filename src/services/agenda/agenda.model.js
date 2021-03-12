let mongoose = require("mongoose");

let agendaSchema = mongoose.Schema({
  day: {
    type: String,
  },
  time: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  profile_img:{
    type: String,
    default: "boat.png"
  }
  
});
module.exports = mongoose.model("agendas", agendaSchema);
