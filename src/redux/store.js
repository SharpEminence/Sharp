import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const userFromStorage = localStorage.getItem("USER")
  ? JSON.parse(localStorage.getItem("USER"))
  : [];

const initialState = {
  users: userFromStorage,
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
