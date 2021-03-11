const requestHelper = require("../../common/request_helper");

const ObjectID = require("mongodb").ObjectID;
class UserService {
  constructor(UserModel, ProfileModel) {
    this.UserModel = UserModel;
    this.ProfileModel = ProfileModel;
    this.getProfile = this.getProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    this._reponse = {
      status: true,
      message: "Server error! Please try again later",
    };
  }

  /*Get user profile */
  async getProfile(req) {
    console.log("req", req.params);
    try {
      let result = await this.UserModel.find({
        _id: ObjectID(req.params.id),
      }).populate("profile");
      console.log("res", result);
      if (result) {
        const user = {
          email: result[0].email,
          profile: result[0].profile,
        };
        this._response = { status: true, data: user };
        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        this._response = {
          status: false,
          message: "No data found!",
          data: null,
        };
        return requestHelper.respondWithJsonBody(200, this._response);
      }
    } catch (err) {
      this._response = { message: err.message };
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }

  /*Update user profile */
  async updateProfile(req) {
    try {
      let id = req.params.id;
      let body = req.body;

      let result = await this.ProfileModel.findOneAndUpdate(
        { userdata: ObjectID(id) },
        { $set: body },
        { new: true }
      ).populate("userdata");
      console.log("res", result);
      if (result) {
        this._response = {
          status: true,
          message: "updated successfully",
          data: result,
        };
        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        this._response = {
          status: true,
          message: "error while updating",
          data: null,
        };
        return requestHelper.respondWithJsonBody(200, this._response);
      }
    } catch (err) {
      this._response = { message: err.message };
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }
}
module.exports = UserService;
