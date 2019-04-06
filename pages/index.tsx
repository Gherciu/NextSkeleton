import HooksCounter from 'components/HooksCounter';
import ReduxCounter from 'components/ReduxCounter';
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
        <HooksCounter />
        <br />
        <ReduxCounter />
    </MainLayout>
);
App.getInitialProps = async () => ({ text: 'Home page description' });
App.propTypes = {
    text: PropTypes.string.isRequired
};
export default App;
