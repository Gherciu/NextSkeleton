import Document, { Head, Html, Main, NextScript } from 'next/document';
import state from 'store/state';
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <script dangerouslySetInnerHTML={{ __html: `window.localStorage.setItem('__REDUX_STATE__', '${JSON.stringify(state)}')` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
