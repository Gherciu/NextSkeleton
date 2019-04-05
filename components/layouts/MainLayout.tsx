import React from "react";
interface IMainLayoutProps {
    children: any;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            {children}
            <style jsx>{`
                .layout {
                    background: #eaeaea;
                    width: 100vw;
                    min-height: 100vh;
                }
            `}</style>
        </div>
    );
};
export default MainLayout;
