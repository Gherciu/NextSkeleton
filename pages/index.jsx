import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
import MainLayout from 'components/Layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ text }) => (
    <MainLayout>
        <h1>Main Page</h1>
        <h2>{text}</h2>
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
Index.getInitialProps = async () => ({ text: 'Home page description', namespacesRequired: [] });
Index.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Index;
