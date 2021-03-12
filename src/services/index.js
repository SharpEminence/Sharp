const UserModel = require("./auth/auth.model");
const AgendaModel = require("./agenda/agenda.model")
const ProfileModel = require("./user/user.model")
const AgendaFavouriteModel = require("./agenda/agendaFavourite.model")
const AgendaService = require("./agenda/agenda.service")
const AuthService = require("./auth/auth.service");
const UserService = require("./user/user.service");



module.exports = {
  authService: new AuthService(UserModel,ProfileModel),
  userService: new UserService(UserModel,ProfileModel),
  agendaService: new AgendaService(AgendaModel,AgendaFavouriteModel)
  
};
