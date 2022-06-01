import {STORE_STATUS} from "../../actions/user/types";

const myState = {
    signedIn: false,
};

const reducers = (state = myState, { payload, type }) => {
    switch (type) {
        case STORE_STATUS:
            return {
                ...state,
                signedIn: payload,
            };
        default:
            return state;
    }
};

export default reducers;
