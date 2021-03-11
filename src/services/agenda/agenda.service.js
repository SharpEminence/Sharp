
const ObjectID = require("mongodb").ObjectID;

const requestHelper = require("../../common/request_helper");


class AgendaService {
  constructor(AgendaModel) {
    this.AgendaModel = AgendaModel;

    this.getAgendas = this.getAgendas.bind(this);
    this.createAgenda = this.createAgenda.bind(this)

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

  async createFavAgenda(req){
try{

}catch{
  
}
  }
async getFavAgenda(req){
  try{
 const id = req.params.id
 const data = await this.AgendaModel.find({_id:ObjectID(id)})
 if(data){
   await this.UserModel.insertOne()
 }
 

  }catch{

  }
}
  async createAgenda(req) {
    try {
      const doc = new this.AgendaModel({
        day: req.body.day,
        time: req.body.time,
        title: req.body.title,
        description: req.body.description,
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
}
module.exports = AgendaService;
