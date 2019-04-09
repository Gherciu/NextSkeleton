import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'lib/i18n';

const Error = ({ statusCode, t }) => (
    <p>{statusCode
        ? t('error-with-status', { statusCode })
        : t('error-without-status')}
    </p>
);
Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode, namespacesRequired: ['common'] };
};
Error.propTypes = {
    statusCode: PropTypes.any,
    t: PropTypes.func.isRequired,
};
Error.defaultProps = {
    statusCode: null,
};
export default withNamespaces('common')(Error);
