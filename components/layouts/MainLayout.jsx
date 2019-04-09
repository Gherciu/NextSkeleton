import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'components/Navbar';
import RootLayout from './RootLayout';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
    <RootLayout>
        <div className='main-layout'>
            <Navbar />
            {children}
        </div>
    </RootLayout>
);
MainLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default MainLayout;
