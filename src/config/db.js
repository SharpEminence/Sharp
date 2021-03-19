const mongoose = require("mongoose");
const mongodbClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const md5 = require("md5");

let cachedDb = null;

const uri = process.env.MONGO_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = class DBManager {
  async connectToDatabase() {
    // const uri = `mongodb://localhost:27017/mongo`;
    const uri = process.env.MONGO_URL; //localmongoURL
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    };
    mongoose
      .connect(uri, options)
      .then((client) => {
        console.log("Connection Established !!", uri);
      })
      .catch((error) => {
        console.log("Database connection failed !!", error.message);
      });
  }
};
// function connectToDatabase() {
//   console.log("Connecting...");

//   if (cachedDb && cachedDb.serverConfig.isConnected()) {
//     console.log("=> using cached database instance");
//     return Promise.resolve(cachedDb);
//   }
//   return mongodbClient.connect(uri, options).then((client) => {
//     cachedDb = client.db("test");
//     console.log("Connection Established !!");
//     return cachedDb;
//   });
// }

// module.exports = class DBManager {
//   async csvread() {
//     const db = await connectToDatabase();
//     // try {
//     //   var file = "data.csv";
//     //   var stream = fs.createReadStream(file);
//     //   await csvtojson()
//     //     .fromStream(stream, { headers: true })
//     //     .subscribe(async (json) => {
//     //       delete json.Actions;
//     //       if (json["Email"]) {
//     //         var cursor = await db
//     //           .collection("users")
//     //           .find({ email: json["Email"] })
//     //           .count();
//     //         console.log("hey", cursor);
//     //         if (cursor == 0)
//     //           await db.collection("users").insertOne({
//     //             email: json["Email"],
//     //             password: md5(json["Password"]),
//     //             firstname: json["Firstname"],
//     //             lastname:json["Lastname"],
//     //             profile_img:json["Photo"],
//     //             event:json["Event"]
//     //           });
//     //       }
//     //     });

//     //   console.log("Completed !!");
//     // } catch (err) {
//     //   console.log(err);
//     //   const message = `Error getting in csv file.`;
//     //   console.log(message);
//     //   throw new Error(message);
//     // }
//   }
// };
