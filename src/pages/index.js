import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"
import data from "../project-data.json"

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
      <Project 
        name={data.websites[0].name}
        tags={data.websites[0].tags}
        link={data.websites[0].link}
        source={data.websites[0].source}
      />
      <Project 
        name={data.websites[1].name}
        tags={data.websites[1].tags}
        link={data.websites[1].link}
        source={data.websites[1].source}
      />
    </section>
  </Layout>
)

export default IndexPage
