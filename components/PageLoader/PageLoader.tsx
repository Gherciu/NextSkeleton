import PropTypes from 'prop-types';
import { PageTransition } from 'next-page-transitions';
import React from 'react';
import './PageLoader.scss';

interface IPageLoaderProps {
    children: any;
}
const PageLoader: React.FC<IPageLoaderProps> = ({ children }: IPageLoaderProps) => (
    <PageTransition timeout={300} classNames='page-loader'>
        { children }
    </PageTransition>
);
PageLoader.propTypes = {
    children: PropTypes.any
};
export default PageLoader;
