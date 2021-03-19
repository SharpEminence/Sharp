const UserModel = require("./auth/auth.model");
const AgendaModel = require("./agenda/agenda.model")
const ProfileModel = require("./user/user.model")
const AgendaFavouriteModel = require("./agenda/agendaFavourite.model")
const BreakoutModel = require("./breakoutSession/breakout.model")
const ExhibitModel = require("./exhibit/exhibit.model")
const FaqModel = require("./faq/faq.model")
const AgendaService = require("./agenda/agenda.service")
const AuthService = require("./auth/auth.service");
const UserService = require("./user/user.service");
const BreakoutService =  require("./breakoutSession/breakout.service")
const ExhibitService = require("./exhibit/exhibit.service")
const FaqService = require("./faq/faq.service")



module.exports = {
  authService: new AuthService(UserModel,ProfileModel),
  userService: new UserService(UserModel,ProfileModel),
  agendaService: new AgendaService(AgendaModel,AgendaFavouriteModel),
  breakoutService: new BreakoutService(BreakoutModel,UserModel),
  exhibitService: new ExhibitService(ExhibitModel),
  faqService: new FaqService(FaqModel)
  
};
