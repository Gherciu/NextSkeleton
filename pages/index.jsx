import HooksCounter from 'components/HooksCounter/';
import ReduxCounter from 'components/ReduxCounter/';
import MainLayout from 'components/Layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';

const App = ({ text }) => (
    <MainLayout>
        <h1>Main Page</h1>
        <h2>{text}</h2>
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
App.getInitialProps = async () => ({ text: 'Home page description' });
App.propTypes = {
    text: PropTypes.string.isRequired,
};
export default App;
