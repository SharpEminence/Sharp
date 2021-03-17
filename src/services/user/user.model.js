let mongoose = require("mongoose");

let ProfileSchema = mongoose.Schema({
    firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      profile_img: {
        type: String,
      },
      
      event:{
          type:String
      },
      userdata:{type: mongoose.Schema.Types.ObjectId, ref: "users" }
     
  
    
  
    //   agenda:[
    //     {
    //       type:String
    //     }
    //   ]
  
},{ collection: "userProfile" });
module.exports = mongoose.model("userProfile", ProfileSchema);
