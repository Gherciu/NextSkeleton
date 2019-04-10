import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunkMiddleware from 'redux-thunk';
import reducer from 'store/reducers';
import initialState from 'store/initialState';
import isServer from 'lib/isServer';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});
const initializeStore = state => (
    createStore(reducer, state, composeEnhancers(applyMiddleware(thunkMiddleware)))
);
const getOrCreateStore = () => {
    if (isServer) {
        return initializeStore(initialState);
    }
    if (!window.__REDUX_STORE__) {
        window.__REDUX_STORE__ = initializeStore(initialState);
    }
    return window.__REDUX_STORE__;
};
const store = getOrCreateStore();
export default store;
