import isServer from 'lib/isServer';

const defaultState = {
    count: 0,
};
const stateFromServer = !isServer && window.localStorage.getItem('__REDUX_STATE__');
const state = isServer ? defaultState : JSON.parse(`${stateFromServer}`);
export default state;
