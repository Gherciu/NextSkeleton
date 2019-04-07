import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const ReduxCounter = ({ count, dispatch }) => {
    const onCounterClick = () => {
        dispatch({ type: 'INCREMENT' });
    };
    return (
        <div onClick={onCounterClick} className='redux-counter'>
            Click to increment ReduxCounter:{count}
            <style jsx>
                {`
                    .redux-counter{
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    );
};
ReduxCounter.propTypes = {
    count: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};
export default connect(state => ({ count: state.count }))(ReduxCounter);
