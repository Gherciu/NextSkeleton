import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import faviconUrl from 'static/favicon.ico';
import './RootLayout.scss';


const RootLayout = ({ children }) => (
    <div className='root-layout'>
        <Head>
            <link rel='shortcut icon' href={faviconUrl} type='image/x-icon' />
            <title>{process.env.APP_NAME}</title>
        </Head>
        {children}
    </div>
);
RootLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default RootLayout;
