const ObjectID = require("mongodb").ObjectID;
const Joi = require("@hapi/joi");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class BreakoutService {
  constructor(BreakoutModel, UserModel) {
    this.BreakoutModel = BreakoutModel;
    this.UserModel = UserModel;

    this.createBreakout = this.createBreakout.bind(this);
    this.updateBreakout = this.updateBreakout.bind(this);

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }
  async createBreakout(req) {
    try {
      const doc = new this.BreakoutModel({
        time: req.body.time,
        title: req.body.title,
        description: req.body.description,
        profile_img: req.body.profile_img,
      });
      await doc.save();
      this._response = {
        status: " Session Created !!",
        doc,
      };
      return requestHelper.respondWithJsonBody(200, this._response);
    } catch (err) {
      this._response = { message: err.message };
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }

  async getBreakout() {
    const results = await this.BreakoutModel.find().sort('time');
    this._response = { status: true, data: results, total: results.length };
    return requestHelper.respondWithJsonBody(200, this._response);
  }

  async updateBreakout(req) {
    try {
      let id = req.params.id;
      let body = req.body;
      let result = await this.BreakoutModel.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: body },
        { new: true }
      );
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

  async deleteBreakout(req) { 
    try {
      let id = req.params.id;

      let result = await this.BreakoutModel.deleteOne({ _id: id });
      if (result) {
        this._response = {
          status: true,
          message: "Deleted successfully",
          data: result,
        };
        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        this._response = {
          status: true,
          message: "error while Deleting",
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
  async searchSession(req) {
    try {
      const offset = req.query.offset ? parseInt(req.query.offset) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const search = req.query.q || "";
      const regex = new RegExp(search, "i");
      let total = await this.BreakoutModel.find({
        $or: [{ title: regex }, { time: regex }],
      }).countDocuments();

      let filteredAgenda = await this.BreakoutModel.find({
        $or: [{ title: regex },{ time: regex }],
      })
        .skip((page - 1) * offset)
        .limit(offset);
      if (filteredAgenda) {
        this._response = { status: true, total, page, data: filteredAgenda };
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
}
module.exports = BreakoutService;
