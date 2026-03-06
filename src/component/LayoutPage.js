import React from "react";

import NavBar from "./NavBar"
import Footer from "./Footer"


const layoutPage =({children}) => {
  return (
    <body> 
      <NavBar/>
        <main>
          {children}
        </main>
      <Footer/>
    </body>
  )
}

export default layoutPage