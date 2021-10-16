import { createStore } from "redux";
import reducers from "./reducers";

function configureStore() {
    return {
        ...createStore(reducers),
    };
}

export const store = configureStore();
