import React from 'react';
import Img from 'gatsby-image'
import Layout from '../components/layout';

const CapPage = ({ data }) => {

  const services = ['Lethal', 'Cryogenic', 'Agricultural', 'Refining', 'Food Grade', 'Power Utility', 'Pharmaceutical', 'Chemical'];
  const serviceList = services.map((item) =>
    <li>{item}</li>
  );

  const expertise = ['Vaporizers', 'Kettle Reboilers', 'Hydrogen Coolers', 'Thermosyphon Reboilers', 'Falling Film Evaporators', 'Knockback Condenser', 'Condensers', 'High Pressure', 'Custom Units', 'Bayonet Exchanger', 'Feedwater Heaters', 'Freezer Condenser'];
  const expertiseList = expertise.map((item) =>
    <li>{item}</li>
  );

  return (
      <Layout>
          <div>
            <section className="section">
              <div className="container">
                <div className="columns is-multiline">

                  <div className="column is-full">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Capability</h1>
                          <p className="subtitle is-size-5">
                              At Doyle & Roth, our Engineers and Fabricators are experts in the design and manufacturing of specialty heat transfer equipment.  We can design almost any type of shell and tube exchanger or tank constructed from standard metals or specialty Alloys.
                          </p>


                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="column is-one-half">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p className="subtitle is-size-5">We have designed units for services including:</p>
                          <ul>{serviceList}</ul>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="column is-one-half">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p className="subtitle is-size-5">We have expertise in the design of specialty shell and tube heat exchangers including:</p>
                          <ul>{expertiseList}</ul>
                        </div>
                      </div>
                    </article>
                  </div>



                  </div>

                </div>

                {data.allFile.edges.map(image => (
                  <Img
                    fixed={image.node.childImageSharp.fixed} alt="stuff"
                  />
                ))}

              </section>
          </div>
      </Layout>
    )
}


export default CapPage



export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "Capability"}}) {
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
