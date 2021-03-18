let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let breakoutSchema = new Schema({
  time: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  profile_img: {
    type: String,
  },
  user_id: { type: Schema.Types.ObjectId, ref: "users" },
}, { collection: "breakout_session" });
module.exports = mongoose.model("breakout_session", breakoutSchema);
