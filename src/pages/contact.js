import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact page</h1>
      <p>
        me envie uma menssagem no twitter.
        <a href="https://twitter.com" target="_blank">
          @Twitter
        </a>
      </p>
    </Layout>
  )
}

export default contactPage
