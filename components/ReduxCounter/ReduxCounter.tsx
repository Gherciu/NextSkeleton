import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

interface IReduxCounter {
    count: number;
    dispatch: any;
}
const ReduxCounter: React.FC<IReduxCounter> = ({ count, dispatch }: IReduxCounter) => {
    const onCounterClick = () => {
        dispatch({ type: 'INCREMENT' });
    };
    return <div onClick={onCounterClick}>Click to increment ReduxCounter:{count}</div>;
};
ReduxCounter.propTypes = {
    count: PropTypes.number.isRequired,
};
export default connect((state: { count: any }) => ({ count: state.count }))(ReduxCounter);
