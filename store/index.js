import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from 'store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import initialState from 'store/initialState';

const initializeStore = (state = initialState) => {
    const composeEnhancers = composeWithDevTools({
        // options like actionSanitizer, stateSanitizer
    });
    return createStore(reducer, state, composeEnhancers(applyMiddleware(thunkMiddleware)));
};

export default initializeStore;
