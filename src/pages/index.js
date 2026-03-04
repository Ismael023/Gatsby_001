import * as React from "react"
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"

import "../styles/styles.css"
import "../styles/colors.css"


  
const IndexPage = () => {
  return (
    <main className="bodyMain" > {/*style={pageStyles}*/}
     <NavBar/>  

      
        <h1>Pagina principal</h1>
      

      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Inicio</title>
