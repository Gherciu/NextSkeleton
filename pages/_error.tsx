import React from 'react';

interface IErrorProps {
    statusCode: any;
}
class Error extends React.Component<IErrorProps, {}> {
    static getInitialProps({ res, err }: { res: any; err: any }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;
        return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
    }
}

export default Error;
