import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-xl">Fullstack Projects</h1>
    <section className="flex flex-wrap justify-center">
      <Project />
      <Project />
      <Project />
    </section>
    <br />
    <h1 className="text-xl">Client Websites</h1>
    <section className="flex flex-wrap justify-center">
      <Project />
      <Project />
    </section>
  </Layout>
)

export default IndexPage
