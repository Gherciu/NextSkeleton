import MainLayout from "layouts/MainLayout";
import React from "react";

const App = (props: any) => {
    return (
        <MainLayout>
            <h1>Main Page</h1>
            <h2>{props.text}</h2>
        </MainLayout>
    );
};
App.getInitialProps = async (ctx: any) => {
    return { text: "Home page description" };
};
export default App;
