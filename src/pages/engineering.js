import React from 'react';

import Layout from '../components/layout';

import one from '../images/Engineering/214_Fotolia_112503_X.jpg'
import two from '../images/Engineering/224_Tubehsheet_Edited.png'
import three from '../images/Engineering/234_Fotolia_1804440_X.jpg'
import four from '../images/Engineering/730_Overlay_Exchanger.png'

const EngPage = ({ data }) => (
  <Layout>
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-fourth">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Thermal Rating</h1>

                      <img src={one}  alt="thermal"/>
                      <p className="subtitle is-size-5">All Thermal design is performed by our in-house Process Engineers, utilizing Aspen Tech Thermal Rating software and custom developed programming.  We operate with the understanding that correct and thorough input is required for accurate results. Our engineers dictate the design based on experience and knowledge of thermal properties, using the software only as tool.
                      </p>
                      <p className="subtitle is-size-5">We have the capability to design all major industrial shell and tube heat exchanger equipment, including single phase, multi phase, condensers, evaporators and specialty units.  See our <a href="/capability">Capability page</a> for a detailed list of services.
                      </p>
                      <p className="subtitle is-size-5">We can provide complete thermal design, rating or review your calculations to offer value engineering solutions.
                      </p>


                    </div>
                  </div>
                </article>
              </div>



              <div className="column is-one-fourth">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Mechanical Design</h1>
                      <img src={two}  alt="mechanical"/>
                      <p className="subtitle is-size-5">
                        Our engineers are experts in the design and mechanical optimization of heat transfer equipment.  We have a thorough understanding of all applicable codes and design references including ASME, TEMA, API 660, PIP and are well versed in the interpretation of customer specifications.
                      </p>

                      <p className="subtitle is-size-5">
                        Doyle & Roth has always been at the cutting edge of the adoption of the latest  mechanical design software.  At the early stages, we worked hand in hand with developers to provide input with regard to industry standards , calculations and output format.  This has helped to optimize the software still being used today.
                      </p>

                      <p className="subtitle is-size-5">
                        We continue to use the Aspen Mechanical Suite which draws on the long heritage of the B-JAC Teams software to optimize design by recognizing the interaction of key components.  This in conjunction with our in-house custom programmed mechanical software provides us with the ability to minimize material usage, resulting in an efficient, cost effective design of shell and tube heat exchangers.
                      </p>

                    </div>
                  </div>
                </article>
              </div>



              <div className="column is-one-fourth">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Quotation Process</h1>
                      <img src={three}  alt="quotation"/>
                      <p className="subtitle is-size-5">
                        When we receive your request, each unit is checked for consistency with the provided Datasheet or thermally rated if required. Our engineers review all specifications in detail, assuring that all project requirements are adhered to.
                      </p>

                      <p className="subtitle is-size-5">
                        Each Unit is then mechanically designed and independently priced using current material cost.  If specialty material is required, we reach out to our community of vendors to request the market value price of those specific items.
                      </p>

                      <p className="subtitle is-size-5">
                        The bid package, including pricing, customer information, specification notes, mechanical calculations and if required, thermal rating and TEMA Datasheet is reviewed and signed off on by a Senior Executive at Doyle & Roth prior to the submission of our bid.
                      </p>

                      <p className="subtitle is-size-5">
                        Download our simplified TEMA Datasheet, fill out the necessary information and email it back to us. Our engineering team is always available to help guide you through the process.
                      </p>

                      <p className="subtitle is-size-6">

Click here for D&R Simplified TEMA Datasheet




Click here to email us your request
                      </p>
                    </div>
                  </div>
                </article>
              </div>


              <div className="column is-one-fourth">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">3D Rendering Design Capability</h1>
                      <img src={four}  alt="3d"/>
                      <p className="subtitle is-size-5">
                        The design and fabrication of highly complicated shell and tube heat exchangers and pressure vessels are streamlined with the use of 3D design software.  This method reduces both schedule and cost by accurately dimensioning components with challenging geometric features and verifying clearances prior to the start of fabrication.  The customer also benefits from the use of this model when creating piping plans and determining the spacial requirements of their plant.
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


export default EngPage
