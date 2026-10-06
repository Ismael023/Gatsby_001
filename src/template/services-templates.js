import React from "react"
import Layout from "../component/Layout"
import { graphql, Link } from "gatsby"
import * as styles from "./services.module.css"
import image from "../images/logo-SF_02.png"

const ServiceTemplate = ({data}) => {
  const { html } = data.markdownRemark 
  const {title,subtitle, introduction } = data.markdownRemark.frontmatter

  return( 
    <Layout pageTitle = {title}>
      <div className={styles.boxCenter}>
        <img className={styles.logoHome} src={image} alt="logo" ></img>
     
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
        <h3 dangerouslySetInnerHTML={{ __html: introduction }}></h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div className={styles.boxCenter}>
        <Link 
          className= {styles.btn}       
          to="/contact"        
          title ="Contacto" >
          Contacto
        </Link>
      </div>
    </Layout> 
  )
  
}

export default ServiceTemplate
export const query = graphql`
  query detailServices($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        subtitle
        introduction        
      }
    }
  }
`
export const Head = ({data}) => (
  <title> { data.markdownRemark.frontmatter.title } </title>
)