import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import initializeStore from "../store";
import reducer from "../store/reducers";
import state from "../store/state";

const store = initializeStore(reducer, state);

class MyApp extends App {
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
