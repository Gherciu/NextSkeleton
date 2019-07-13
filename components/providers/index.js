import React from 'react'
import PropTypes from 'prop-types'
import ReduxProvider from '@providers/ReduxProvider'

const MainProvider = ({ element }) => <ReduxProvider>{element}</ReduxProvider>

MainProvider.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default MainProvider
