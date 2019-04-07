import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import PageLoader from 'components/PageLoader/';
import PropTypes from 'prop-types';

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
MyApp.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.any,
    router: PropTypes.any.isReguired
};
export default MyApp;
