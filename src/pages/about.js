import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About page</h1>
      <p>heelo my name is jhonatan</p>
      <p>
        you can reach me here <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
