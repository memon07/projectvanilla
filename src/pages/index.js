import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({data}) => {
  return (
  <>
    <Layout>
      <SEO title="Home" />
      <div>
          {
              data.allMarkdownRemark.edges.map(post => (
                   <Link to={post.node.frontmatter.path}>
                      <div key={parseInt(post.node.id)}>
                          <h1>{post.node.frontmatter.title}</h1>
                          <h5>by {post.node.frontmatter.author}</h5>
                          <h5>{post.node.frontmatter.date}</h5>
                       </div>
                    </Link> 
              )
            )
          }
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
    </Layout>
    </>
  )
}

export const pageQuery = graphql`
query BlogQuery {
    allMarkdownRemark {
        edges {
            node {
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
`

export default IndexPage
