import {STORE_LISTDEVICES} from "./types";

export const storeListRoom = (payload) => {
    return {
        type: STORE_LISTDEVICES,
        payload
    }
}
