import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";
import { sidebarReducer } from "./sidebarReducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;