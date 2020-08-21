import React from 'react';

import Layout from '../components/layout';

import Img from 'gatsby-image'

import { graphql } from 'gatsby';


export const query = graphql`
  query {
		intro: file(relativePath: {eq: "529_Full_Exchanger_Edited_with_Text.png"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
}

`

const IndexPage = ({ data }) => (
  <Layout>
        <div>
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-one-half">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Why Choose a Doyle & Roth Heat Exchanger?</h1>
                        <p className="subtitle is-size-5">
                          We are experts in the design & fabrication of shell and tube heat exchangers and pressure vessels.  Our engineers have the capability to provide complete Thermal design and Mechanical optimization.  At Doyle & Roth, we take pride in providing superior customer service while maintaining competitive pricing and exceptional quality.
                        </p>
                        <h4>
                        Fabricating Heat Transfer Equipment for over 85 Years
                        </h4>
                        <Img fixed={data.intro.childImageSharp.fixed} alt="intro"/>
                      </div>
                    </div>
                  </article>
                </div>



                <div className="column is-one-half">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">News</h1>
                        <p className="subtitle is-size-5">
                          <a class="twitter-timeline" href="https://twitter.com/DoyleRothMfg?ref_src=twsrc%5Etfw">Tweets by DoyleRothMfg</a> <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </p>
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


export default IndexPage
