import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
interface IMainLayoutProps {
    children: any;
}
const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className='layout'>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
            <style jsx>{`
                .layout {
                    background: #eaeaea;
                    width: 100vw;
                    min-height: 100vh;
                    ul {
                        display: flex;
                        align-items: center;
                        li {
                            margin: 0px 10px;
                        }
                    }
                }
            `}</style>
        </div>
    );
};
MainLayout.propTypes = {
    children: PropTypes.any
};
export default MainLayout;
