import React from 'react';
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component';

import Layout from '../components/layout';


import '../components/style.scss';

const InvPage = ({ data }) => {



    const elements = data.allFile.edges.map(function(image) {
      return  (
          <Img className="gallery-class"
            fixed={image.node.childImageSharp.fixed} alt="photo"
          />
      );
    });

    return (
      <Layout>
      <div>
        <section className="section">
          <div className="container">
              <div className="column is-full">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Inventory</h1>
                      <p className="subtitle is-size-5">
                      More text to put in here.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
          </div>
        </section>
      </div>
        <Masonry
          className={'gallery-class'}
        >
          {elements}
        </Masonry>
      </Layout>
    );
}


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
