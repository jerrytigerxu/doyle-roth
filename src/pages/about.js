import React from 'react';

import Layout from '../components/layout';

import Img from 'gatsby-image'

import { graphql } from 'gatsby';

const AboutPage = ({ data }) => (
  <Layout>
        <div>
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">

                <div className="column is-full">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">About Us</h1>
                        <p className="subtitle is-size-5">
                        Doyle & Roth Manufacturing Company (D&R) is a small, women owned well-respected engineering, design and fabrication company established in 1932.  Our main activities are in the area of tubular heat exchangers. We fabricate approximately 300-400 shell and tubeheat exchangers and pressure vessels annually for a wide customer base in varying industries.  We are an engineering intensive organization, our engineers function in Sales, Marketing, General Management and hold Executive level positions.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-half">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <Img fixed={data.ny.childImageSharp.fixed} alt="New York office"/>
                        <p className="subtitle is-size-7">Pictured Above: Corporate Headquarters Staff, New York City </p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-half">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <Img fixed={data.penn.childImageSharp.fixed} alt="Pennslyvania office"/>
                        <p className="subtitle is-size-7">Pictured Above: Fabrication Facility Management & Engineering Staff, Eastern Pennsylvania</p>
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


export default AboutPage


export const query = graphql`
  query {
		ny: file(relativePath: {eq: "About Us/730_2017_NY-Website.jpg"}) {
      childImageSharp {
        fixed(width: 650) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    penn: file(relativePath: {eq: "About Us/730_2017_Shop-Website.jpg"}) {
      childImageSharp {
        fixed(width:650) {
          ...GatsbyImageSharpFixed
        }
      }
    }

}

`
