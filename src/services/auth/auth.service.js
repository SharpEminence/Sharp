const Joi = require("@hapi/joi");
const md5 = require("md5");
const csvtojson = require("csvtojson");
const fs = require("fs");
const ObjectID = require("mongodb").ObjectID;

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");
const { isValidObjectId } = require("mongoose");

class AuthService {
  constructor(UserModel, ProfileModel) {
    this.UserModel = UserModel;
    this.ProfileModel = ProfileModel;

    this.login = this.login.bind(this);

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }

  /*Login*/
  async login(body) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      });
      await utils.validate(body, schema);
      let email = body.email;
      let password = md5(body.password);
      this._response = {
        status: false,
        message: "Invalid username or password",
      };
     
      const user = await this.UserModel.findOne({ email }).populate("profile");
      if (user) {
        console.log(user, password);
        if (user["password"] === password) {
          let userData = {
            _id: user._id,
            email: user["email"],
            password: user["password"],
          };

          let token = utils.createJWT(userData);
          this._response = {
            status: true,
            message: "Login success",
            data: {
              token,
              user,
            },
          };

          return requestHelper.respondWithJsonBody(200, this._response);
        } else {
          this._response = {
            status: false,
            message: "Username or password is incorrect",
            data: [],
          };
        }
      } else {
        if (!user) {
          this._response = {
            status: false,
            message: "Username or password is incorrect",
            data: [],
          };
        } else {
          this._response = {
            status: false,
            active: false,
            message: "User is not there need to create",
            data: [],
          };
        }
      }
      return requestHelper.respondWithJsonBody(200, this._response);
    } catch (err) {
      this._response.message = err.message;
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }

  //Login admin
  async Adminlogin(body) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      });
      await utils.validate(body, schema);
      let email = body.email;
      let password = md5(body.password);
      this._response = {
        status: false,
        message: "Invalid username or password",
      };
      const user = await this.UserModel.findOne({ email }).populate("profile");
      if (user) {
        console.log(user, password);
        if (user["password"] === password && user["role"] === 'admin') {
          console.log('yyyyyyy')
          let userData = {
            _id: user._id,
            email: user["email"],
            password: user["password"],
          };

          let token = utils.createJWT(userData);
          this._response = {
            status: true,
            message: "Login success",
            data: {
              token,
              user,
            },
          };

          return requestHelper.respondWithJsonBody(200, this._response);
        } else {
          this._response = {
            status: false,
            message: "Username or password is incorrect",
            data: [],
          };
        }
      } else {
        if (!user) {
          this._response = {
            status: false,
            message: "Username or password is incorrect",
            data: [],
          };
        } else {
          this._response = {
            status: false,
            active: false,
            message: "User is not there need to create",
            data: [],
          };
        }
      }
      return requestHelper.respondWithJsonBody(200, this._response);
    } catch (err) {
      this._response.message = err.message;
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }

  async Entercsv(file) {
    try {
      var stream = fs.createReadStream(file);
      await csvtojson()
        .fromStream(stream, { headers: true })
        .subscribe(async (json) => {
          delete json.Actions;
          if (json["Email"]) {
            var cursor = await this.UserModel.find({
              email: json["Email"],
            }).count();
            console.log("hey", cursor);

            const pro = new this.ProfileModel({
              firstname: json["Firstname"],
              lastname: json["Lastname"],
              profile_img: json["Photo"],
              event: json["Event"],
            });

            if (cursor == 0) {
              let dt = await pro.save();
              console.log("dt", dt);
              if (dt) {
                const doc = new this.UserModel({
                  email: json["Email"],
                  password: md5(json["Password"]),
                  profile: ObjectID(dt._id),
                });
                await doc.save();
              }
            }
          }
        });
      this._response = {
        status: true,
        message: "succesfull",
        // data: {
        //   token,
        //   user,
        // },
      };
      console.log("Completed !!");
      return requestHelper.respondWithJsonBody(200, this._response);
    } catch (err) {
      this._response.message = err.message;
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }

  async logout(body){

  }
}
module.exports = AuthService;
