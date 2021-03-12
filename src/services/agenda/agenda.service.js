const ObjectID = require("mongodb").ObjectID;
const Joi = require("@hapi/joi");

const requestHelper = require("../../common/request_helper");
const utils = require("../../common/utils");

class AgendaService {
  constructor(AgendaModel, AgendaFavouriteModel) {
    this.AgendaModel = AgendaModel;
    this.AgendaFavouriteModel = AgendaFavouriteModel;
    this.updateAgenda = this.updateAgenda.bind(this);
    this.getAgendas = this.getAgendas.bind(this);
    this.createAgenda = this.createAgenda.bind(this);
    this.deleteAgenda = this.deleteAgenda.bind(this);

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }

  async getAgendas() {
    const results = await this.AgendaModel.find();
    this._response = { status: true, data: results };
    return requestHelper.respondWithJsonBody(200, this._response);
  }

  async updateAgenda(req) {
    try {
      let id = req.params.id;
      let body = req.body;

      let result = await this.AgendaModel.findOneAndUpdate(
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

  async deleteAgenda(req) {
    try {
      let id = req.params.id;
      let body = req.body;

      let result = await this.AgendaModel.deleteOne({ _id: id });
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
  async createAgenda(req) {
    try {
      const doc = new this.AgendaModel({
        day: req.body.day,
        time: req.body.time,
        title: req.body.title,
        description: req.body.description,
        profile_img: req.body.profile_img,
      });
      await doc.save();
      this._response = {
        status: true,
        message: "agenda Created !!",
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

  //Favourite Agendas

  async addFavouriteAgenda(req) {
    try {
      const body = req.body;
      const schema = Joi.object().keys({
        agenda_id: Joi.string().required(),
        user_id: Joi.string().required(),
        status: Joi.number().required(),
      });
      await utils.validate(body, schema);

      let findFavourite = await this.AgendaFavouriteModel.findOne({
        agenda_id: body.agenda_id,
        user_id: body.user_id,
      }).exec();
      console.log("helloooooooooooooooooooo" + findFavourite);
      if (findFavourite) {
        await this.AgendaFavouriteModel.findByIdAndUpdate(
          { _id: findFavourite._id },
          { status: body.status }
        );
        this._response = {
          status: true,
          message:
            body.status == 1
              ? "Agenda added as favorite."
              : "Agenda removed from favorite.",
        };

        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        const AddFavourite = new this.AgendaFavouriteModel({
          agenda_id: body.agenda_id,
          user_id: body.user_id,
          status: body.status,
        });
        await AddFavourite.save();
        this._response = {
          status: true,
          message: "Agenda added to favourites",
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

  async getAgendaById(req) {
    try {
      const id = req.params.id;
      const body = req.body;

      let findFavourite = await this.AgendaFavouriteModel.find({
        user_id: id,
        status: 1,
      });

      console.log("hjddffdfd", findFavourite);
      if (findFavourite.length) {
        // const values = Object.values(findFavourite)
        // // console.log('hj',findFavourite)
        let data = await this.AgendaModel.find({
          _id: findFavourite.map((d) => {
            return d.agenda_id;
          }),
        });
        this._response = {
          status: true,
          message: "data fetched succesfully",
          data: data,
        };

        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        this._response = {
          status: true,
          message: "No Agendas Right Now",
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

  async searchAgenda(req) {
    try {
      console.log("req", req.query.q);
      const offset = req.query.offset ? parseInt(req.query.offset) : 20;
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const search = req.query.q || "";
      const regex = new RegExp(search, "i");
      let total = await this.AgendaModel.find({
        $or: [{ title: regex }, { day: regex }, { time: regex }],
      }).countDocuments();

      let filteredAgenda = await this.AgendaModel.find({
        $or: [{ title: regex }, { day: regex }, { time: regex }],
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
module.exports = AgendaService;
