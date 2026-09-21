import React from "react"
import Layout from "../../component/Layout"
import image from "../../images/logo-SF_02.png"
import * as styles from "../../styles/portfolio.module.css"

const cards =[
  {ic: 1,img:"image", title:"Soporte-técnico", description:"LULULULULÑUI", urlButton:"/pendiente/"},
  {ic: 2,img:"image", title:"antenimiento a equipo de computo", description:"LULULULULÑUI", urlButton:"/pendiente/"},
  {ic: 3,img:"image", title:"Desarrollo de paginas web", description:"LULULULULÑUI", urlButton:"/pendiente/"},
  {ic: 4,img:"image", title:"Mantenimiento a laptops", description:"LULULULULÑUI", urlButton:"/pendiente/"}
      ];


const Portfolio = () => {
  return (
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
  )
}

export default Portfolio
export const Head = () => <title>Portafolio</title>