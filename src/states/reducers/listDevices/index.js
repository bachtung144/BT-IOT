import {STORE_LISTDEVICES} from "../../actions/listDevices/types";

const myState = {
    listDevices: {},
};

const reducers = (state = myState, { payload, type }) => {
    switch (type) {
        case STORE_LISTDEVICES:
            console.warn('store history', payload)
            return {
                ...state,
                listDevices: payload,
            };
        default:
            return state;
    }
};

export default reducers;
