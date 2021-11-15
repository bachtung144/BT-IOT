import { combineReducers } from "redux";

import listDeviceReducer from "./listDevice/index";
import userReducer from "./user/index";

export default combineReducers({
    listDevice: listDeviceReducer,
    user: userReducer
});
