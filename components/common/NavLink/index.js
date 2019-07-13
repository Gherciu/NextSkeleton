/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from '@utils/i18n'
import PropTypes from 'prop-types'

const NavLink = ({ children, href, as, scroll, ...restProps }) => (
  <Link href={href} as={as} scroll={scroll} {...restProps}>
    <a>{children}</a>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  as: PropTypes.string,
  scroll: PropTypes.bool,
}

NavLink.defaultProps = {
  as: null,
  scroll: true,
}

export default NavLink
