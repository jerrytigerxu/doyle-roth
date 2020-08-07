import React from 'react';

import Layout from '../components/layout';

import Img from 'gatsby-image'

import { graphql } from 'gatsby';

export const query = graphql`
  query {
		machining: file(relativePath: {eq: "Fabrication/240_Machining.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    drilling: file(relativePath: {eq: "Fabrication/350_Drilling.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tube: file(relativePath: {eq: "Fabrication/350_Tube_Bundle.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    shop: file(relativePath: {eq: "Fabrication/350_Shop_Photo.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tubes: file(relativePath: {eq: "Fabrication/350_tubes_B.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    welding: file(relativePath: {eq: "Fabrication/350_Welding.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    last: file(relativePath: {eq: "Fabrication/350_IMG_5886.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
}

`

const FabPage = ({ data }) => (
  <Layout>
        <div>
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Welding</h1>
                        <Img fixed={data.welding.childImageSharp.fixed} alt="weld"/>
                      </div>
                    </div>
                  </article>
                </div>



                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Machining, Shearing & Rolling </h1>
                        <Img fixed={data.machining.childImageSharp.fixed} alt="machine"/>
                      </div>
                    </div>
                  </article>
                </div>



                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Drilling</h1>
                        <Img fixed={data.drilling.childImageSharp.fixed} alt="drill"/>
                      </div>
                    </div>
                  </article>
                </div>


                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Tube Bending</h1>
                        <Img fixed={data.tube.childImageSharp.fixed} alt="tube"/>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Assembly</h1>
                        <Img fixed={data.last.childImageSharp.fixed} alt="assembly"/>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Inventory</h1>
                        <Img fixed={data.tubes.childImageSharp.fixed} alt="inventory"/>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Facility</h1>
                        <Img fixed={data.shop.childImageSharp.fixed} alt="facility"/>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
  </Layout>
)


export default FabPage
