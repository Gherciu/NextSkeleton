import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import favicon from 'static/favicon.png';
import './RootLayout.scss';


const RootLayout = ({ children }) => (
    <div className='root-layout'>
        <Head>
            <link rel='icon' type='image/png' href={favicon} />
            <title>{process.env.APP_NAME}</title>
        </Head>
        {children}
    </div>
);
RootLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default RootLayout;
