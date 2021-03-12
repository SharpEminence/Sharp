let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role:{
    type:String
  },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile" },
  
},
{ collection: "users" });
module.exports = mongoose.model("users", userSchema);
