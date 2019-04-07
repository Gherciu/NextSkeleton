import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ statusCode }) => (
    <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
);
Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
};
Error.propTypes = {
    statusCode: PropTypes.any
};
export default Error;
