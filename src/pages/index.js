import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import '../css/index.css'
import SEO from "../components/seo"

import Footer from '../components/footer'

const IndexPage = () => {
  return (
  <>
    <Layout>
      <SEO title="SM" />
      <div className="container">
        <div className="row">
        <div className="col-12">
          <h1 style={{fontSize:'75px',fontWeight:'800'}}>Hi, i am Shoyeb Memon</h1>
        </div>
        </div>
      </div>
      <Footer/>
    </Layout>
    </>
  )
}


export default IndexPage
