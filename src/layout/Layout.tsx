import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
