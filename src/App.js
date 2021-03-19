import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import ScrollToTop from "../src/component/Scroll";

import Login from "./component/login/Login";
import Countdown from "./component/login/countdown";
import Layout from "./component/layout";
import Footer from "./component/footer";
import Dashboard from "./component/dashBoard/dashboard";
import Mainstage from "./component/mainStage/mainStage";
import Confrence_Carousel from "./component/dashBoard/carousel_Confrence";
import Carousel_Breakout from "./component/dashBoard/carousel_Breakout";
import Profile from "./component/myProfile/profile";
import Example from "./component/example";
import Widget from "./component/widget";
import MeetupLounges from "./component/meetupLounges/meetuplounges";
import Speakers from "./component/speakers/speakers";
import Faq from "./component/FAQ/faq";
import MainStageCarousel from "./component/dashBoard/mainStageCarousel";
import Agenda from "./component/agenda/agenda";
import BreakoutSession from "./component/breakOutSession/breakoutSession";
import Health_Assessments from "./component/health_Assessments/health_Assessments";
import Test from "./component/dashBoard/test";
import BreakOutSessionCarousel from "./component/breakOutSession/breakoutSession_Carousel";
import AdminAgenda from "./component/admin/agenda/admin_Agenda";
import CreateBreakout from "./component/admin/breakoutSession/create_breakout";
import Admin_Layout from "./component/admin/admin_Layout";
import Admin_Login from "./component/admin/admin_Login";
import Admin_Dashboard from "./component/admin/dashBoard.js/dashboard_Admin";
import Admin_Agenda_Show from "./component/admin/agenda/showAgenda";
import Admin_Breakout_Show from "./component/admin/breakoutSession/admin_breakout";
import Admin_Exhibit_Show from "./component/admin/exhibit/showExhibit";
import CreateExhibitor from "./component/admin/exhibit/create_exhibitor";
import ExhibitHall from "./component/ExhibitHall/exhibitHall";
import IlluJoin from "./component/breakOutSession/illu_Join";
import ExhibitHall_Layout from './component/ExhibitHall/exhibitHallLayout'
const Routing = (props) => {
  const history = useHistory();
 
  
  return (
    <Switch>
      <Route exact path="/illu_join">
        <IlluJoin />
      </Route>
      <Route exact path="/exhibit_Hall/:id">
        <ExhibitHall />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
     
      <Route exact path="/exhibit_Hall">
        <ExhibitHall_Layout />
      </Route>
      {/* <Route exact path="/login">
        <Login />
      </Route> */}
      <Route exact path="/admin/agenda_show">
        <Admin_Agenda_Show />
      </Route>
      <Route exact path="/admin/breakout_show">
        <Admin_Breakout_Show />
      </Route>
      <Route exact path="/admin/exhibit_show">
        <Admin_Exhibit_Show />
      </Route>
      <Route exact path="/admin/dashBoard">
        <Admin_Dashboard />
      </Route>
      <Route exact path="/admin/login">
        <Admin_Login />
      </Route>
      <Route exact path="/admin/Layout">
        <Admin_Layout />
      </Route>
      <Route exact path="/admin/agenda_create">
        <AdminAgenda />
      </Route>
      <Route exact path="/admin/breakout_create">
        <CreateBreakout />
      </Route>
      <Route exact path="/admin/exhibit_create">
        <CreateExhibitor />
      </Route>
      <Route exact path="/breakoutsessionCarousel">
        <BreakOutSessionCarousel />
      </Route>
      <Route exact path="/test">
        <Test />
      </Route>
      <Route exact path="/breakoutSession">
        <BreakoutSession />
      </Route>
      <Route exact path="/health_Assessments">
        <Health_Assessments />
      </Route>
      <Route exact path="/Agenda">
        <Agenda />
      </Route>
      <Route exact path="/mainStageCarousel">
        <MainStageCarousel />
      </Route>
      <Route exact path="/FAQ">
        <Faq />
      </Route>
      <Route exact path="/meetup_Lounges">
        <MeetupLounges />
      </Route>
      <Route exact path="/speakers">
        <Speakers />
      </Route>
      <Route exact path="/example">
        <Example />
      </Route>
      <Route exact path="/widget">
        <Widget />
      </Route>
      <Route exact path="/mainstage">
        <Mainstage />
      </Route>

      <Route exact path="/layout">
        <Layout />
      </Route>
      <Route exact path="/footer">
        <Footer />
      </Route>
      <Route exact path="/dashBoard">
        <Dashboard />
      </Route>
      <Route exact path="/carousel_Confrence">
        <Confrence_Carousel />
      </Route>
      <Route exact path="/carousel_Breakout">
        <Carousel_Breakout />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    
    </Switch>
  );
};
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routing />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
