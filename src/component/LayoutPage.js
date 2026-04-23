import React from "react";
import NavBar from "./NavBar"
import Footer from "./footer"

const layoutPage =({pageTitle, children}) => {
  return (
    <body> 
      <NavBar/>
      <main>
        <h1>{pageTitle} </h1>
        {children}
      </main>
      <Footer/>
    </body>
  )
}
export default layoutPage
