import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import '../css/index.css'
import SEO from "../components/seo"


const IndexPage = ({data}) => {
  return (
  <>
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12" style={{padding:0}}>
          {
              data.allMarkdownRemark.edges.map(post => (
                <div className="blog-card">
                   <Link to={post.node.frontmatter.path} style={{color:'black',textDecoration:'none'}}>
                      <div key={parseInt(post.node.id)}>
                          <h1>{post.node.frontmatter.title}</h1>
                          <h5>by {post.node.frontmatter.author}</h5>
                          <h5>{post.node.frontmatter.date}</h5>
                       </div>
                    </Link> 
                </div>
              )
            )
          }
        </div>
        </div>
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
