import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export default function initializeStore(reducer: any, state: any) {
    return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
