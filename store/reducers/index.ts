import { combineReducers } from 'redux';
import count from 'store/reducers/count';

const reducer = combineReducers({
    count
});
export default reducer;
