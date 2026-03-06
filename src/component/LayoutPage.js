import React from "react";

import NavBar from "./NavBar"
import Footer from "./Footer"


const layoutPage =({children}) => {
  return (
    <main className="bodyMain">
      <NavBar/>
      
        {children}
      
      
      <Footer/>
    </main>
  )
}

export default layoutPage