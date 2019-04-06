import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import RootLayout from './RootLayout';
import './MainLayout.scss';

interface IMainLayoutProps {
    children: any;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => (
    <RootLayout>
        <div className='main-layout'>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    </RootLayout>
);
MainLayout.propTypes = {
    children: PropTypes.any,
};
export default MainLayout;
