import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import initializeStore from 'store/index';
import PageLoader from 'components/PageLoader';
import withRedux from 'next-redux-wrapper';
import { appWithTranslation } from 'lib/i18n';
import isProd from 'lib/isProd';
import 'components/_global.scss';

class MyApp extends App {
    render() {
        const { Component, pageProps, router, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <PageLoader>
                        <Component key={router.route} {...pageProps} />
                    </PageLoader>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initializeStore, { debug: !isProd, storeKey: '__REDUX_STORE__' })(appWithTranslation(MyApp));
