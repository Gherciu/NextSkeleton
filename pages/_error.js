import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from '@utils/i18n'

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t('common-error-with-status', { statusCode })
      : t('common-error-without-status')}
  </p>
)
Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err && err.statusCode
  return { statusCode, namespacesRequired: ['common'] }
}
Error.propTypes = {
  statusCode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  t: PropTypes.func.isRequired,
}
Error.defaultProps = {
  statusCode: null,
}
export default withNamespaces('common')(Error)
