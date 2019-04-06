import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

interface IMainLayoutProps {
    children: any;
}
const MainLayout = ({ children }: IMainLayoutProps) => (
    <div className='layout'>
        <Head>
            <title>nextjs+typescript</title>
            <link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
        </Head>
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
        {children}
        <style jsx>
            {`
                .layout {
                    background: #eaeaea;
                    padding: 20px;
                    ul {
                        display: flex;
                        align-items: center;
                        li {
                            margin: 0px 10px;
                        }
                    }
                }
            `}
        </style>
    </div>
);
MainLayout.propTypes = {
    children: PropTypes.any,
};
export default MainLayout;
