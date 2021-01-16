import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Jhonatan , a front-end developer , living in Guarulhos</h2>
      <p>
        Precisa de um desenvolvedor ?<Link to="/contact">Entre em Contato</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
