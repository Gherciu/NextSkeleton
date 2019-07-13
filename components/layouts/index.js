import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import faviconUrl from '@static/favicon.ico'
import '@styles/tailwind.css'
import '@styles/antd.less'
import '@styles/global.scss'

const MainLayout = ({ children }) => (
  <>
    <Head>
      <link rel='shortcut icon' href={faviconUrl} type='image/x-icon' />
      <title>{process.env.APP_NAME}</title>
    </Head>
    {children}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default MainLayout
