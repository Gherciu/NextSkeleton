import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import './PageLoader.scss';

interface IPageLoaderProps {
    children: any;
}
const PageLoader: React.FC<IPageLoaderProps> = ({ children }: IPageLoaderProps) => {
    useEffect(() => {
        Router.events.on('routeChangeStart', () => {
            NProgress.start();
        });
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());
    }, []);
    return (<div className='page-loader'>{ children }</div>);
};
PageLoader.propTypes = {
    children: PropTypes.any
};
export default PageLoader;
