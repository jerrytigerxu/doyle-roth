import React from 'react';
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout';

const InvPage = ({ data }) => (

      <Layout>
        <h1>Inventory page</h1>

        {data.allFile.edges.map(image => (
          <Img
            fixed={image.node.childImageSharp.fixed}
          />
        ))}
      </Layout>




)


export default InvPage



export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "Inventory"}}) {
    edges {
      node {
        id
        absolutePath
        relativeDirectory
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}

`
