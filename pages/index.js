import PropTypes from 'prop-types'
import React from 'react'
import LandingLayout from '@layouts/LandingLayout'
import { withNamespaces } from '@utils/i18n'

const Index = ({ t }) => <LandingLayout>{t('common-hello')}</LandingLayout>

Index.getInitialProps = async () => ({
  // translations-namespaces required in components used in this page
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

// translations-namespaces required in this component
export default withNamespaces('common')(Index)
