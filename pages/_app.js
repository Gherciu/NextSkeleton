import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import initializeStore from '@store/index'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import NProgress from 'nprogress'
import { appWithTranslation } from '@utils/i18n'
import isProd from '@utils/isProd'
import '@styles/tailwind.css'
import '@styles/antd.less'
import '@styles/global.scss'

class MyApp extends App {
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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initializeStore, {
  debug: !isProd,
  storeKey: '__REDUX_STORE__',
})(appWithTranslation(MyApp))
