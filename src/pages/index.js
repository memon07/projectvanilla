import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import '../css/index.css'
import SEO from "../components/seo"


const IndexPage = () => {
  return (
  <>
    <Layout>
      <SEO title="SM" />
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          shoyeb
        </div>
        </div>
      </div>
    </Layout>
    </>
  )
}


export default IndexPage
