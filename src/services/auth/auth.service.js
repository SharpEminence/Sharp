const Joi = require("joi");
const md5 = require("md5");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class AuthService {
  constructor(UserModel) {
    this.UserModel = UserModel;

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
      const user = await this.UserModel.findOne({ email }).populate('profile');
      if (user) {
          console.log(user,password)
        if (user["password"] === password) {
          let userData = {
            _id: user._id,
            email: user["email"],
            password: user["password"]
           
          };

          let token = utils.createJWT(userData);
          this._response = {
            status: true,
            message: "Login success",
            data: {
              token,
              user
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
}
module.exports = AuthService;
