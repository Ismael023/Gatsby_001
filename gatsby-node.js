const path = require('path')

exports.createPages = async ({ graphql, actions})  =>{
  const { data } = await graphql(`
    query nameServices {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/servicios/' + node.frontmatter.slug,
      component: path.resolve('./src/template/services-templates.js'),
      context: {slug: node.frontmatter.slug}
    })
  })

}

