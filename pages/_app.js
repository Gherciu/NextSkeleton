import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import NProgress from 'nprogress'
import initializeStore from '@store/index'
import { appWithTranslation } from '@utils/i18n'
import isProduction from '@utils/isProduction'
import MainProvider from '@providers'
import '@styles/tailwind.css'
import '@styles/antd.less'
import '@styles/global.scss'

class MainApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <MainProvider store={store}>
          <Component {...pageProps} />
        </MainProvider>
      </Container>
    )
  }
}

export default withRedux(initializeStore, {
  debug: !isProduction,
  storeKey: '__REDUX_STORE__',
})(appWithTranslation(MainApp))
