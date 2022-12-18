import { combineReducers } from "redux";
import account from "./accountReducer";
import formReducer from "./formReducer";
import deparmentReducer from "./deparmentReducer"
import Account2Reducer from "./Account2Reducer"


const rootReducer = combineReducers({ 
    account,
    formReducer,
    deparmentReducer,
    Account2Reducer
})

export default rootReducer;