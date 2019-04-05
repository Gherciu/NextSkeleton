import actionTypes from 'store/actionTypes';
import state from 'store/state';
export default (count = state.count, action: any) => {
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
