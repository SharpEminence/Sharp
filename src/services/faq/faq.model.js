let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let faqSchema = new Schema({
  question: {
    type: String,
  },
  description: {
    type: String,
  },

});
module.exports = mongoose.model("faq", faqSchema);
