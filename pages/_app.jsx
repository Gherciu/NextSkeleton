import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import PageLoader from 'components/PageLoader/';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
        };
    }

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

export default MyApp;
