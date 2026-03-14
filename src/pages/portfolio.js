
import React from "react"
import Layout from "../component/LayoutPage"
import image from "../images/logo-SF_02.png"
import * as styles from "../styles/portfolio.module.css"


const cards =[
  {ic: 1,img:"image", title:"Proyecto 1", description:"LALALALALALA", urlButton:"/pendiente/"},
  {ic: 2,img:"image", title:"Proyecto 2", description:"LALALALALALA", urlButton:"/pendiente/"},
  {ic: 3,img:"image", title:"Proyecto 3", description:"LALALALALALA", urlButton:"/pendiente/"},
  {ic: 4,img:"image", title:"Proyecto 4", description:"LALALALALALA", urlButton:"/pendiente/"}
      ];


const Portfolio = () => {
  return (
    <Layout>      
      <h2>Portafolio</h2>
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