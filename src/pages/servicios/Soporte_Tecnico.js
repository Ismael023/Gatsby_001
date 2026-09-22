import React from "react"
import Layout from "../../component/Layout"
//import "./servicios.css"

const soporteTecnico = () => {
  return( 
    <Layout pageTitle = "Soporte Técnico">
      <h3>¿Tu equipo o programas se bloquean?, ¿Estas perdiendo tiempo al trabajar?</h3>
      <p>Revisamos tu equipo </p>
    </Layout> 
  
  )
}

export default soporteTecnico
export const Head = () => <title>Soporte Técnico</title>


/*
  

    <Layout pageTitle="Proyectos">   
      <section className={styles.cards}>
        {cards.map((card) => {
          return (
            <div key ={card.id}>
              <img src={image} alt={card.title} ></img>
              <h3>{card.title}</h3>
              <p>{card.description} </p>
              <button>Ver más</button>
            </div>
          )
          })
        }
      </section>
    </Layout>





*/