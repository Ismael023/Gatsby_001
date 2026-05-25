import React from "react";
import NavBar from "./NavBar"
import Footer from "./footer"

import  "../styles/styles.css";

const Layout =({pageTitle, children}) => {
  return (
    <div className="layout"> 
      <NavBar/>
      <main>
        <h1>{pageTitle} </h1>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
export default Layout;
