import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
import MainLayout from 'layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';

interface IAboutProps {
    text: string;
}
const About = ({ text }: IAboutProps) => (
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
    text: PropTypes.string.isRequired
};
export default About;
