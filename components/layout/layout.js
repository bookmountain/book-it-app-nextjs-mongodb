import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title = "Book Best Hotels for your Holiday" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
