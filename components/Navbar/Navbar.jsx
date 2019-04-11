import NavLink from 'components/common/NavLink';
import PropTypes from 'prop-types';
import React from 'react';
import { i18n, withNamespaces } from 'lib/i18n';
import logoUrl, { ReactComponent as LogoIcon } from 'static/logo.svg';
import './Navbar.scss';

const Navbar = ({ t }) => (
    <nav>
        <ul>
            <div className='left'>
                <li>
                    <NavLink href='/'>
                        <LogoIcon className='logo' />
                    </NavLink>
                </li>
                <li>
                    <NavLink href='/' className='brand-name'>
                        {process.env.APP_NAME}
                    </NavLink>
                </li>
                <li>
                    <NavLink href='/'>
                        <img className='logo' src={logoUrl} alt='logo' />
                    </NavLink>
                </li>
            </div>
            <div className='right'>
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
            </div>
        </ul>
    </nav>
);
Navbar.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withNamespaces('navbar')(Navbar);
