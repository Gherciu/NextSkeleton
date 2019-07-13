import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const ReduxProvider = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
)

ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}

export default ReduxProvider
