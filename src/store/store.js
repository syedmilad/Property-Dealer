import { compose, createStore } from "redux";

import balanceReducer from "../reducers/balanceReducer";
import { sidebarReducer } from "../reducers/sidebarReducer";

const store = createStore(
  sidebarReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
