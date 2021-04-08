import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


  export const query=graphql`
     query {
    file(relativePath: { eq: "images/HeroSectionGirl.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `
 

export default Image
