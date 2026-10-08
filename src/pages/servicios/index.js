import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../component/Layout"
// import image from "../../images/logo-SF_02.png"

import * as styles from "./cards.module.css"              
const Servicios = ({data}) => {
  
  //console.log(data)
  const servicesCard = data.services.nodes
  return (
    <Layout pageTitle="Servicios">
      <>
        {/*<h2 className={styles.descript}>Estos son algunos de los servicios que ofrecemos actualmente</h2>*/}
      </>
      <section className={styles.cards}>
        {servicesCard.map((card) => {
          return (
            <div key ={card.frontmatter.id_serv}>
             {/* <img src={thumbs} alt={card.title} ></img>*/}
              <h3>{card.frontmatter.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: card.frontmatter.introduction }} />
              <Link
                key={card.frontmatter.id_serv}
                to={card.frontmatter.slug}
                className={styles.btnCard}
                title={card.frontmatter.title} >
                Leer más
              </Link>
            </div>
          )
          })
        }
      </section>      
    </Layout>
  )
}

// consulta para recuperar info mediante GraphQL
export const query = graphql`
  query services {
    services: allMarkdownRemark(sort: {frontmatter: {id_serv: ASC}}) {
      nodes {
        frontmatter {
          id_serv
          title
          subtitle
          slug
          introduction          
        }
        id
      }
    }
    descript: site {
      siteMetadata {
        descripcion
        siteUrl
      }
    }
  }
`

export default Servicios
export const Head = () => (
  <>
    <title>Servicios</title>
    <meta 
      name="lalalala" 
      content="lalalalaal"
      ></meta>
  </>
  
)


