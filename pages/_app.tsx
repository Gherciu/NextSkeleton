import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default MyApp;
