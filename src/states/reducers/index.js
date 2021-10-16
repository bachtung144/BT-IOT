import { combineReducers } from "redux";

import listRoomReducer from "./listRoom/index";

export default combineReducers({
    listRoom: listRoomReducer,
});
