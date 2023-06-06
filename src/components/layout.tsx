import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
    scope?: string;
    children: React.ReactNode;
};

export default ({ scope, children }: LayoutProps) => {
    const attrs = scope ? { 'data-scope': scope } : {};
    return (
        <>
            <Navbar />
            <main {...attrs}>
                { children }
            </main>
            <Footer />
        </>
    );
}