const ObjectID = require("mongodb").ObjectID;
const Joi = require("@hapi/joi");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class ExhibitService {
  constructor(ExhibitModel) {
    this.ExhibitModel = ExhibitModel;

    this.createExhibit = this.createExhibit.bind(this);
    this.updateExhibit = this.updateExhibit.bind(this);
    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }
  async createExhibit(req) {
    try {
      const doc = new this.ExhibitModel({
        title: req.body.title,
        content: req.body.content,
        logo: req.body.logo,
        video: req.body.video,
        url: req.body.url,
        flipbook: req.body.flipbook,
      });
      await doc.save();
      this._response = {
        status: " Exhibit Created !!",
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

  async getExhibitById(req) {
    const id = req.params.id;
    const results = await this.ExhibitModel.find({
      _id: ObjectID(id),
    });
    this._response = { status: true, data: results, total: results.length };
    return requestHelper.respondWithJsonBody(200, this._response);
  }
  async getAll() {
    const results = await this.ExhibitModel.find();
    this._response = { status: true, data: results, total: results.length };
    return requestHelper.respondWithJsonBody(200, this._response);
  }
  async updateExhibit(req) {
    try {
      let id = req.params.id;
      let body = req.body;
      let result = await this.ExhibitModel.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: body },
        { new: true }
      );

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

  async deleteExhibit(req) {
    try {
      let id = req.params.id;

      let result = await this.ExhibitModel.deleteOne({ _id: id });
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
  async searchExhibit(req) {
    try {
      const offset = req.query.offset ? parseInt(req.query.offset) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const search = req.query.q || "";
      const regex = new RegExp(search, "i");
      let total = await this.ExhibitModel.find({
        $or: [{ title: regex }, { content: regex }],
      }).countDocuments();

      let filteredAgenda = await this.ExhibitModel.find({
        $or: [{ title: regex }, { content: regex }],
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
module.exports = ExhibitService;
