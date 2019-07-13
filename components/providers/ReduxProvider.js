import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import initializeStore from '@store'

const ReduxProvider = ({ children }) => (
  <Provider store={initializeStore()}>{children}</Provider>
)

ReduxProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default ReduxProvider
