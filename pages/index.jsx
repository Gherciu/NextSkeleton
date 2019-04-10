import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
import MainLayout from 'components/Layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'lib/i18n';

const Index = ({ text, t }) => (
    <MainLayout>
        <h1>{t('common-h1')}</h1>
        <h2>{text}</h2>
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
Index.getInitialProps = async () => ({ text: 'Home page description', namespacesRequired: ['common', 'navbar'] });
Index.propTypes = {
    text: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};
export default withNamespaces('common')(Index);
