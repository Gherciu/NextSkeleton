import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import './NavLink.scss';

interface INavLinkProps {
    children: any;
    href: any;
    className?: string;
}
const NavLink: React.FC<INavLinkProps> = ({ children, href, className }: INavLinkProps) => (
    <Link href={href}>
        <a className={`nav-link ${className || ''}`}>{ children }</a>
    </Link>
);
NavLink.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string
};
export default NavLink;
