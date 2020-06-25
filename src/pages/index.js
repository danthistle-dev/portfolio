import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import data from "../project-data.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="text-center mx-auto py-12 px-2 max-w-lg bg-black bg-opacity-50 sm:bg-transparent">
      <p className="text-base">I'm a fullstack web developer from Australia. I specialize in React.js and building user experiences.</p>
    </section>
    <h1 className="text-xl px-2 bg-black bg-opacity-50 sm:bg-transparent mt-2">Fullstack Projects</h1>
    <section className="flex flex-wrap justify-center">
      <Project
        name={data.websites[2].name}
        tags={data.websites[2].tags}
        link={data.websites[2].link}
        source={data.websites[2].source}
        id={2}
      />
      <Project />
      <Project />
    </section>
    <br />
    <h1 className="text-xl px-2 bg-black bg-opacity-50 sm:bg-transparent">Client Websites</h1>
    <section className="flex flex-wrap justify-center">
      <Project 
        name={data.websites[0].name}
        tags={data.websites[0].tags}
        link={data.websites[0].link}
        source={data.websites[0].source}
        id={0}
      />
      <Project 
        name={data.websites[1].name}
        tags={data.websites[1].tags}
        link={data.websites[1].link}
        source={data.websites[1].source}
        id={1}
      />
    </section>
    
  </Layout>
)

export default IndexPage
