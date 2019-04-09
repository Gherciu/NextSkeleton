import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT } from 'store/actions';

const ReduxCounter = ({ count, dispatch }) => {
    const onCounterClick = () => {
        dispatch(INCREMENT);
    };
    return (
        <div onClick={onCounterClick} className='redux-counter'>
            Click to increment ReduxCounter:{count}
            <style jsx>
                {`
                    .redux-counter{
                        color: rgb(${count * 25},0,0);
                    }
                `}
            </style>
        </div>
    );
};
ReduxCounter.propTypes = {
    count: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
};
export default connect(state => ({ count: state.count }))(ReduxCounter);
