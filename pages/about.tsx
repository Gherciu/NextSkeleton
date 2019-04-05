import MainLayout from 'layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';
interface IAboutProps {
    text: string;
}
const About = ({ text }: IAboutProps) => {
    return (
        <MainLayout>
            <h1>About page</h1>
            <h2>{text}</h2>
        </MainLayout>
    );
};
About.getInitialProps = async (ctx: any) => {
    return { text: 'About page description' };
};
About.propTypes = {
    text: PropTypes.string.isRequired
};
export default About;