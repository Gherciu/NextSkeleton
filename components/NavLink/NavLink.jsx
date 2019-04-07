import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import './NavLink.scss';

const NavLink = ({ children, href, className }) => (
    <Link href={href}>
        <a className={`nav-link ${className}`}>{ children }</a>
    </Link>
);
NavLink.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired
};
NavLink.defaultProps = {
    className: ''
};
export default NavLink;
