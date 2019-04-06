import App, { Container } from 'next/app';
import { NextContext, NextFunctionComponent } from 'next';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import 'normalize.css';
import 'styles/main.css';

const MyApp = ({ Component, pageProps }: any) => (
    <Container>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </Container>
);
MyApp.getInitialProps = async ({ Component, ctx }: { Component: any; ctx: NextContext }) => ({
    pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
});
export default MyApp;
