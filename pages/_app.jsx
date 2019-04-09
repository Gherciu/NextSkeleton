import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import PageLoader from 'components/PageLoader';
import { appWithTranslation } from 'lib/i18n';
import 'resources/scss/_global.scss';

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;
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

export default appWithTranslation(MyApp);
