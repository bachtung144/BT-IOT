import {STORE_STATUS} from "./types";

export const storeStatus = (payload) => {
    return {
        type: STORE_STATUS,
        payload
    }
}
