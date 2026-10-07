/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.ramirezdevsolutions.tld`,
    descripcion: `Pagina con detalles de servicios ofertados `,
    copyright:  `Esta pagina cuenta con copyright 2026`
  },
  plugins: [
    // need for image
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //need for markdown
    'gatsby-transformer-remark',
    { //source folder for markdown
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/services/`,
      },
    },
    { //source folder for iamge
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
