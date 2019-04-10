import isServer from 'lib/isServer';

const defaultState = {
    count: 0,
};
const stateFromServer = !isServer && window.localStorage.getItem('__REDUX_STATE__');
const initialState = isServer ? defaultState : JSON.parse(stateFromServer);

export default initialState;
