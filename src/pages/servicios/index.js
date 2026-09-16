import React from "react"
import { Link } from "gatsby"

import Layout from "../../component/Layout"
import image from "../../images/logo-SF_02.png"

import * as styles from "./cards.module.css"

const cards =[
  {ic: 1,img:"image", title:"Soporte técnico", 
    description:"Resolver problemas de equipos de cómputo", 
    href:"/servicios/Soporte_Tecnico/"},
  {ic: 2,img:"image", title:"Mantenimiento a equipo de computo", 
    description:"Garantizar el funcionamiento optimo de equipos de escritorio", 
    href:"/pendiente/"},
  {ic: 3,img:"image", title:"Desarrollo de paginas web", 
    description:"Impulsado tu presencia en la web con paginas personalziadas", 
    href:"/pendiente/"},
  {ic: 4,img:"image", title:"Mantenimiento a laptops", 
    description:"Garantizar el funcionamiento optimo de los equipos portatiles", 
    href:"/pendiente/"}
      ];


const Servicios = () => {
  return (
    <Layout pageTitle="Servicios">
      <>
        <p className={styles.descript}>Estos son algunos de los servicios que ofrecemos actualmente</p>
      </>
      <section className={styles.cards}>
        {cards.map((card) => {
          return (
            <div key ={card.id}>
              <img src={image} alt={card.title} ></img>
              <h3>{card.title}</h3>
              <p>{card.description} </p>
              <Link
                key={card.id}
                to={card.href}
                className={styles.btnCard}
                title={card.title} >
                Leer Más
              </Link>
            </div>
          )
          })
        }
      </section>
    </Layout>
  )
}

export default Servicios
export const Head = () => <title>Servicios</title>

/*
  {links.map( (link) => { 
    return (
      <Link 
        key={link.id}
        to={link.href}
        className="link-menu"  
        title={link.title}
      >
        {link.name}
  </Link>
*/