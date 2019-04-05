import MainLayout from 'layouts/MainLayout';
import PropTypes from 'prop-types';
import React from 'react';

interface IAppProps {
    text: string;
}
const App = ({ text }: IAppProps) => (
    <MainLayout>
        <h1>Main Page</h1>
        <h2>{text}</h2>
    </MainLayout>
);
App.getInitialProps = async (ctx: any) => ({ text: 'Home page description' });
App.propTypes = {
    text: PropTypes.string.isRequired
};
export default App;
