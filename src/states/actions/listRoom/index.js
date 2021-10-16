import {STORE_LISTROOM} from "./types";

export const storeListRoom = (payload) => {
    return {
        type: STORE_LISTROOM,
        payload
    }
}
