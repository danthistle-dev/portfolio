import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import data from "../project-data.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="text-center mx-auto py-12 px-2 max-w-lg bg-black bg-opacity-50 sm:bg-transparent">
      <p className="text-base">
        I'm a fullstack web developer from Australia. I specialize in React.js
        and building user experiences.
      </p>
    </section>
    {/* <h1 className="text-xl px-2 bg-black bg-opacity-50 sm:bg-transparent mt-2">
      Projects
    </h1> */}
    <section className="flex flex-wrap justify-center">
      <Project
        name={data.websites[6].name}
        tags={data.websites[6].tags}
        link={data.websites[6].link}
        source={data.websites[6].source}
        description={data.websites[6].description}
        id={6}
      />
      <Project
        name={data.websites[3].name}
        tags={data.websites[3].tags}
        link={data.websites[3].link}
        source={data.websites[3].source}
        description={data.websites[3].description}
        id={3}
      />
      {/* <Project
        name={data.websites[4].name}
        tags={data.websites[4].tags}
        link={data.websites[4].link}
        source={data.websites[4].source}
        description={data.websites[4].description}
        id={4}
      /> */}
      <Project
        name={data.websites[5].name}
        tags={data.websites[5].tags}
        link={data.websites[5].link}
        source={data.websites[5].source}
        description={data.websites[5].description}
        id={4}
      />
    </section>
    <br />
    {/* <h1 className="text-xl px-2 bg-black bg-opacity-50 sm:bg-transparent">
      Client Websites
    </h1>
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
    </section> */}
  </Layout>
)

export default IndexPage
