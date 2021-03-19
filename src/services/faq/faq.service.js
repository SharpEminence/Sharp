const ObjectID = require("mongodb").ObjectID;
const Joi = require("@hapi/joi");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class FaqService {
  constructor(FaqModel) {
    this.FaqModel = FaqModel;

    this.createFaq = this.createFaq.bind(this);
    this.updateFaq = this.updateFaq.bind(this);

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }
  async createFaq(req) {
    try {
      const doc = new this.FaqModel({

        question: req.body.question,
        description: req.body.description,
      
      });
      await doc.save();
      this._response = {
        status: " Question Added !!",
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

  async getFaq() {
    const results = await this.FaqModel.find();
    this._response = { status: true, data: results, total: results.length };
    return requestHelper.respondWithJsonBody(200, this._response);
  }

  async updateFaq(req) {
    try {
      let id = req.params.id;
      let body = req.body;
      let result = await this.FaqModel.findOneAndUpdate(
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

  async deleteFaq(req) { 
    try {
      let id = req.params.id;

      let result = await this.FaqModel.deleteOne({ _id: id });
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
  async searchFaq(req) {
    try {
      const offset = req.query.offset ? parseInt(req.query.offset) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const search = req.query.q || "";
      const regex = new RegExp(search, "i");
      let total = await this.FaqModel.find({
        $or: [{ question: regex }, { description: regex }],
      }).countDocuments();

      let filteredAgenda = await this.FaqModel.find({
        $or: [{ question: regex },{ description: regex }],
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
module.exports = FaqService;
