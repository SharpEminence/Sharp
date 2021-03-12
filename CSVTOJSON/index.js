const mongodbClient = require("mongodb").MongoClient;
const fs = require("fs");
const md5 = require("md5");
const dbdata = require('../src/config/db')
const csvtojson = require("csvtojson");

let cachedDb = null;

const uri = process.env.MONGO_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
function connectToDatabase() {
  console.log("Connecting...");

  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    console.log("=> using cached database instance");
    return Promise.resolve(cachedDb);
  }
  return mongodbClient.connect(uri, options).then((client) => {
    cachedDb = client.db("test");
    return cachedDb;
  });
}

module.exports = class DBManager {
  async csv(file) {
    const db = await connectToDatabase();

    try {
      // var file = "data.csv";
      var stream = fs.createReadStream(file);
      await csvtojson()
        .fromStream(stream, { headers: true })
        .subscribe(async (json) => {
          delete json.Actions;
          if (json["Email"]) {
            var cursor = await db
              .collection("users")
              .find({ email: json["Email"] })
              .count();
            console.log("hey", cursor);
            if (cursor == 0)
            // const doc = new this.AgendaModel({
            //   day: req.body.day,
            //   time: req.body.time,
            //   title: req.body.title,
            //   description: req.body.description,
            // });
            // await doc.save();
            // let data ={
            //   email: json["Email"],
            //     password: md5(json["Password"])
            // }
            new db.collection("users").data.save()
            // await doc.save(); 
              // await db.collection("users").insertOne({
              //   email: json["Email"],
              //   password: md5(json["Password"]),
              //   firstname: json["Firstname"],
              //   lastname: json["Lastname"],
              //   profile_img: json["Photo"],
              //   event: json["Event"],
              // }).populate('profile');
              // await db.collection("userProfile").insertOne({
              //   firstname: json["Firstname"],
              //   lastname: json["Lastname"],
              //   profile_img: json["Photo"],
              //   event: json["Event"],
              // })
          }
        });

      console.log("Completed !!");
    } catch (err) {
      console.log(err);
      const message = `Error getting in csv file.`;
      console.log(message);
      throw new Error(message);
    }
  }
};
