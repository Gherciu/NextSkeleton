import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import './RootLayout.scss';

interface IRootLayoutProps {
    children: any;
}
const RootLayout: React.FC<IRootLayoutProps> = ({ children }: IRootLayoutProps) => (
    <div className='root-layout'>
        <Head>
            <title>nextjs+typescript</title>
            <link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
        </Head>
        {children}
    </div>
);
RootLayout.propTypes = {
    children: PropTypes.any,
};
export default RootLayout;
