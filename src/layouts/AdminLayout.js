import React, { useState } from "react";
import Header from "../component/common/header";
import Footer from "../component/common/footer";

const AdminLayout = ({ children }) => {
  const [isShowTheme, setShowTheme] = useState(false);
  const themeSet = (themeSet) => {
    setShowTheme(themeSet);
  };
  return (
    <>
      <div className={`theme-section ${isShowTheme ? "dark" : "light"}`}>
        <Header themeSet={themeSet} />
        <section className="mid-section">
          <div className="full-height">{children}</div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
