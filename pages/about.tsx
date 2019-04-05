import MainLayout from "layouts/MainLayout";
import React from "react";

const About = (props: any) => {
    return (
        <MainLayout>
            <h1>About page</h1>
            <h2>{props.text}</h2>
        </MainLayout>
    );
};
About.getInitialProps = async (ctx: any) => {
    return { text: "About page description" };
};
export default About;
