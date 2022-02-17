import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Nav/Navigation";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <section className="container mx-auto px-4 mb-6">{children}</section>
      <Footer />
    </>
  );
}

export default Layout;
