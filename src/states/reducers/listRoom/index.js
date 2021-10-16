import {STORE_LISTROOM} from "../../actions/listRoom/types";

const myState = {
    listRoom: {},
};

const reducers = (state = myState, { payload, type }) => {
    switch (type) {
        case STORE_LISTROOM:
            console.warn('store history', payload)
            return {
                ...state,
                listRoom: payload,
            };
        default:
            return state;
    }
};

export default reducers;
