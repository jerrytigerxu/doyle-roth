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
                        <p>
                          All welders are ASME, AWS and API Qualified with the ability to weld Carbon, Low and High Alloy Steels, Nickel, Nickel Alloys, Copper Alloys, Chrome-Moly, Hastelloy, Incoloy, Inconel, Duplex and all grades of Stainless Steel among other specialties.  Our shop has the equipment and expertise in the following welding methods:
                        </p>
                        <h4>Welding Ability</h4>
                          <ul>
                            <li>Gas Metal Arc (GMAW) MIG</li>
                            <li>Gas Tungsten Arc (GTAW) TIG</li>
                            <li>Flux Cored Arc Welding (FCAW) FCA</li>
                            <li>Submerged Arc Welding (SAW)</li>
                            <li>Shielded Metal Arc Welding (SMAW) Stick</li>
                            <li>Weld Overlay</li>
                          </ul>
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
                        <p>
                          Our craftsman have an average of 20 years experience in the precision fabrication of custom body flanges, tubesheets, baffles and miscellaneous components up to 84" in diameter.
                        </p>
                        <p>
                          Cylinders above 24" for Carbon Steel and above 12" for Alloys up to 1 1/4" thickness x 18' in length are rolled in-house.  We have the ability to shear and bend plates up to 1/2" thick.
                        </p>
                        <h4>Machining & Rolling Equipment</h4>
                          <ul>
                            <li>Horizontal Lathes (up to 84")</li>
                            <li>Rollers (up to 1 1/4" thick)</li>
                            <li>300 Ton Capacity Hydraulic Brake and Shear</li>
                            <li>Automatic Manipulators & Positioners</li>
                          </ul>
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
                        <p>
                          Doyle & Roth uses high precision automated machinery, capable of drilling deep holes to an extremely high tolerance.  Tubesheets, baffles and flanges are drilled using our CNC equipment for accuracy and speed.  Our shop engineers program the equipment directly from the fabrication CAD drawings. Qualified machinists then set the piece in place and monitor the drilling process.
                        </p>
                        <h4>Drilling Equipment</h4>
                          <ul>
                            <li>Radial Drills (up to 5' arm, 13' column)</li>
                            <li>Dual Spindle N/C Gun Drill (90"x90"x20" depth)</li>
                            <li>Vertical Boring Mill (up to 84" dia)</li>
                          </ul>

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
                        <p>
                          We have the in-house capability to bend tubes for "U" Bundles.  Our machinery and operators are skilled at bending all tube grades and sizes to a specified radius while taking into consideration reduction in tube wall thickness.
                        </p>
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
                        <p>
                          All components are fabricated and assembled in the same location for improved efficiency.  Our assemblers have experience with all TEMA pressure vessel types including fixed tubesheet, floating tubesheet and U-Tube exchangers
                        </p>
                        <h4>Assembly Space</h4>
                          <ul>
                            <li>70' x 230' Bay with 28' Under Hook</li>
                            <li>70' x 190' Bay with 12' Under Hook</li>
                            <li>40' x 110' Bay with 45' Under Hook</li>
                          </ul>
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
                        <p>
                          We maintain a large quantity of stock material at our fabrication facility.  Purchasing material in bulk provides us with a substantial savings that is passed along to our customers.  Having this material on hand allows us to reduce fabrication time by drawing from our stock.  In emergency situations, we have the ability ship within a week depending on the material and unit size.
                        </p>
                        <p>
                          Our inventory items include Tubes, Plate, SE Heads, Pipe, ANSI Flanges, Ring Forgings, Rods, Couplings and Miscellaneous Components.  These items are stocked in Carbon Steel, Stainless Steel and some specialty Alloys.  Other job specific materials are purchased from our trusted suppliers that we have built relationships with throughout our 80+ year history.
                        </p>
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
                        <p>
                          The Doyle & Roth fabrication facility occupies an area of 360,000 sq. ft. with 120,000 sq. ft. of enclosed shop space.  We have continuously operated from this facility since 1960's.  All of our fabrication equipment and materials as well as office space for plant management and engineering are housed at this location in Simpson, PA.
                        </p>
                        <p>
                          We regularly provide tours of our facility to customers interested in learning about our process and fabrication methods.  
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


export default FabPage
