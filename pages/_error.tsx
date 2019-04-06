import React from 'react';
import { NextFunctionComponent } from 'next';

interface IErrorProps {
    statusCode: any;
}
const Error: NextFunctionComponent<IErrorProps> = ({ statusCode }: IErrorProps) => (
    <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
);
Error.getInitialProps = async ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
};
export default Error;
