import React from 'react'
import { Link } from '@utils/i18n'
import PropTypes from 'prop-types'

const NavLink = ({ children, href, ...restProps }) => (
  <Link href={href}>
    <a href={href} {...restProps}>
      {children}
    </a>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
}

export default NavLink
