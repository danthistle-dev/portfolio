import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = id => {
  const data = useStaticQuery(graphql`
    query {
      divybeImage: file(relativePath: { eq: "divybe.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yslscImage: file(relativePath: { eq: "yslsc.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avaKaydoImage: file(relativePath: { eq: "avakaydo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      osrsImage: file(relativePath: { eq: "osrs.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      voyakImage: file(relativePath: { eq: "voyak.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jspadImage: file(relativePath: { eq: "JSPad.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (id.id === 0) {
    return (
      <Img
        className="w-full"
        fluid={data.yslscImage.childImageSharp.fluid}
        alt="Yeppoon SLSC website screen"
      />
    )
  } else if (id.id === 1) {
    return (
      <Img
        className="w-full"
        fluid={data.avaKaydoImage.childImageSharp.fluid}
        alt="Ava Kaydo website screen"
      />
    )
  } else if (id.id === 2) {
    return (
      <Img
        className="w-full"
        fluid={data.divybeImage.childImageSharp.fluid}
        alt="Divybe logo"
      />
    )
  } else if (id.id === 3) {
    return (
      <Img
        className="w-full"
        fluid={data.voyakImage.childImageSharp.fluid}
        alt="Voyak logo"
      />
    )
  } else if (id.id === 4) {
    return (
      <Img
        className="w-full"
        fluid={data.osrsImage.childImageSharp.fluid}
        alt="OSRS Item Icons website screen"
      />
    )
  } else if (id.id === 6) {
    return (
      <Img
        className="w-full"
        fluid={data.jspadImage.childImageSharp.fluid}
        alt="JSPad logo"
      />
    )
  } else
    return (
      <img
        className="w-full"
        width="400"
        height="300"
        src="https://via.placeholder.com/400x300"
        alt="placeholder"
      />
    )
}

export default Image
