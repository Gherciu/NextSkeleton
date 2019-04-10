import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
import MainLayout from 'components/Layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'lib/i18n';

const About = ({ text, t }) => (
    <MainLayout>
        <h1>{t('common-h1')}</h1>
        <h2>{text}</h2>
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
About.getInitialProps = async () => ({ text: 'About page description', namespacesRequired: ['common', 'navbar'] });
About.propTypes = {
    text: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};
export default withNamespaces('common')(About);
