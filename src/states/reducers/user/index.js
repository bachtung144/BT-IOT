import {STORE_USER} from "../../actions/user/types";

const myState = {
    user: {},
};

const reducers = (state = myState, { payload, type }) => {
    switch (type) {
        case STORE_USER:
            return {
                ...state,
                user: payload,
            };
        default:
            return state;
    }
};

export default reducers;
