import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from 'store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from 'store/initialState';

const initializeStore = (state = initialState) => (
    createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
);

export default initializeStore;
