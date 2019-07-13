import React from 'react'
import PropTypes from 'prop-types'
import ReduxProvider from '@providers/ReduxProvider'

const MainProvider = ({ children, store }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
)

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}

export default MainProvider
