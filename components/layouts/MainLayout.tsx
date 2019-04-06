import NavLink from 'components/NavLink';
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'static/logo.svg';
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
                        <NavLink href='/'>
                            <img className='logo' src={logo} alt='logo' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/about'>
                            About
                        </NavLink>
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
