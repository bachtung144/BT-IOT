import {STORE_LISTDEVICE} from "./types";

export const storeListDevice = (payload) => {
    return {
        type: STORE_LISTDEVICE,
        payload
    }
}
