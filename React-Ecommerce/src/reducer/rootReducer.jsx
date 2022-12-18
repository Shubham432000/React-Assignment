import { combineReducers } from "redux";
import  accountReducer  from "./accountReducer";
import cardReducers from "./cardReducers"

const rootReducer = combineReducers({
  accountReducer,
  cardReducers
});

export default rootReducer;
