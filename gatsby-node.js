const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                html
                id
                frontmatter {
                        title
                        path
                        date
                        author
                    }
                }
            }
        }
    }
    `).then( res => {
        console.log(":::::::",res.data.allMarkdownRemark.edges);
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}