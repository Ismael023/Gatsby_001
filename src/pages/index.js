import * as React from "react"
import Layout from "../component/LayoutPage"
import * as styles  from "../styles/home.module.css"
import { useState, useEffect } from "react"
import image from "../images/logo-SF_02.png"


const servicio = ["Negocio", "Hogar", "Empresa"];
  
const IndexPage = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % servicio.length);
    }, 3000);
    return () => clearInterval(intervalo); // Limpieza al desmontar
  }, []);

  return (
    <Layout>
      <section className={styles.header} >
        <h1>ISMAEL RAMÍREZ DÍAZ</h1>
        <div>
        <img className={styles.logoHome} src={image} alt="logo" ></img>
        <h3>Soluciones Integrales <br></br>para tu{" "} 
          <span key={indice} className={styles.rotative}>{servicio[indice]}
          </span> 
        </h3>

        </div>
        
        <p>Consultor con mas de <span>15</span> años de experiencia en el sector de la informatica y el soporte tecnico.</p>
    
      </section>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Inicio</title>
