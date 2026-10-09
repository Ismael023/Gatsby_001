
import React from "react";
import Layout from "../component/Layout";

const About = () =>{
  return(
    <Layout pageTitle="Sobre mí">
      
      <h2>Soluciones tecnológicas con atención personalizada</h2>
      <h3>Soluciones Integrales </h3>
      <div>
        <p>  Soy desarrollador de software y técnico en tecnologías de la información, enfocado en ayudar a personas, emprendedores y pequeños negocios a resolver problemas y aprovechar mejor la tecnología.</p>
        <p>  Mi experiencia abarca soporte técnico, mantenimiento de equipos, configuración de redes y desarrollo de soluciones web y de software.</p>
        <p>  Busco que cada servicio tenga un objetivo claro: resolver una necesidad real de manera práctica y adecuada a las condiciones de cada cliente.</p>
      </div>
      
      <div>
        <h3> Áreas de experiencia</h3>
        <ul>
          <li>  Soporte técnico</li>
          <li>  Mantenimiento de equipos</li>
          <li>  Redes e infraestructura</li>
          <li>  Desarrollo web</li>
          <li>  Desarrollo de software</li>
        </ul>
      </div>

    </Layout>
  )
}

export default About
export const Head = () => <title>Acerca de Mi</title>
