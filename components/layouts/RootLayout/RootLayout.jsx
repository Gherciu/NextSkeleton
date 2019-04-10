import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import './RootLayout.scss';
import favicon from 'static/favicon.ico';

const RootLayout = ({ children }) => (
    <div className='root-layout'>
        <Head>
            <title>{process.env.APP_NAME}</title>
            <link rel='shortcut icon' href={favicon} type='image/x-icon' />
        </Head>
        {children}
    </div>
);
RootLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default RootLayout;
