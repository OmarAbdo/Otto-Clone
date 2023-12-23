import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
