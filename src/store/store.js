import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import users from "./reducers/usersReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(users, composeEnhancers(applyMiddleware(thunk)));

export default store;
