import NavLink from 'components/NavLink';
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'static/logo.svg';
import { i18n, withNamespaces } from 'lib/i18n';
import './Navbar.scss';

const Navbar = ({ t }) => (
    <nav>
        <ul>
            <li>
                <NavLink href='/'>
                    {process.env.APP_NAME}
                </NavLink>
            </li>
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
            <li>
                <button type='button' onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ro' : 'en')}>
                    {t('navbar-change-locale')}
                </button>
            </li>
        </ul>
    </nav>
);
Navbar.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withNamespaces('navbar')(Navbar);
