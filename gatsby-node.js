/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve(__dirname, 'src/templates/module-page-template.js'),
    context: {
      modules: [
        { _type: 'module-one' },
        { _type: 'module-two' },
        { _type: 'module-one' },
        { _type: 'module-one' }
      ]
    }
  })

  createPage({
    path: '/another-page',
    component: path.resolve(__dirname, 'src/templates/module-page-template.js'),
    context: {
      modules: [
        { _type: 'module-two' },
        { _type: 'module-two' },
        { _type: 'module-two' },
        { _type: 'module-one' },
        { _type: 'module-two' }
      ]
    }
  })
}
