import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
import MainLayout from 'components/Layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';

const About = ({ text }) => (
    <MainLayout>
        <h1>About page</h1>
        <h2>{text}</h2>
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
About.getInitialProps = async () => ({ text: 'About page description' });
About.propTypes = {
    text: PropTypes.string.isRequired,
};
export default About;
