import {STORE_LISTDEVICE} from "../../actions/listDevice/types";

const myState = {
    listDevice: {},
};

const reducers = (state = myState, { payload, type }) => {
    switch (type) {
        case STORE_LISTDEVICE:
            console.warn('store list dev', payload)
            return {
                ...state,
                listDevice: payload,
            };
        default:
            return state;
    }
};

export default reducers;
