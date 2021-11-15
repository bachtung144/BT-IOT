import {STORE_USER} from "./types";

export const storeUser = (payload) => {
    return {
        type: STORE_USER,
        payload
    }
}
