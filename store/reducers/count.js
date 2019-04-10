import actionTypes from 'store/actionTypes';
import initialState from 'store/initialState';

export default (count = initialState.count, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: {
            return count + 1;
        }
        case actionTypes.DECREMENT: {
            return count - 1;
        }
        default:
            return count;
    }
};
