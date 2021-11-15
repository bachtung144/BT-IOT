import { combineReducers } from "redux";

import listDevicesReducer from "./listDevices/index";

export default combineReducers({
    listDevices: listDevicesReducer,
});
