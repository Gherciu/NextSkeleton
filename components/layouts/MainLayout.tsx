import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import scss from './MainLayout.scss';

interface IMainLayoutProps {
    children: any;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => (
    <div className={scss.MainLayout}>
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
    </div>
);
MainLayout.propTypes = {
    children: PropTypes.any,
};
export default MainLayout;
