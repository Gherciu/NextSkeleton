import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import state from 'store/state';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html lang='en'>
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: `window.localStorage.setItem('__REDUX_STATE__', '${JSON.stringify(state)}')` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
