let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let exhibitSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  logo: {
    type: String,
  },
  video: {
    type: Array,
  },
  url: {
    type: Array,
  },
  flipbook: {
    type: Array,
  },
});
module.exports = mongoose.model("exhibitHall", exhibitSchema);
