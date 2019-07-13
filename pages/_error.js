import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ statusCode }) => <p>{statusCode}</p>

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err && err.statusCode
  return { statusCode }
}
Error.propTypes = {
  statusCode: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default Error
