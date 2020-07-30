import React from 'react';

import Layout from '../components/layout';

import logo from '../images/Principles/172_Logo_Only_Color.jpg'
import drill from '../images/Principles/231_Drill_TS.png'
import delivery from '../images/Principles/188_1499C.jpg'

const PrinciplesPage = ({ data }) => (
  <Layout>
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Service</h1>

                      <img src={logo} alt="doyleroth-logo" />

                      <p className="subtitle is-size-5">
                      We take a client focused approach to all of our services. Your needs are always at the forefront of our design and manufacturing process. Our engineers will work closely with you to make sure all project requirements are incorporated into the design as efficiently as possible.
                      </p>
                      <p className="subtitle is-size-5">
                      We understand the importance of returning phone calls and emails in a timely manner and staying in constant communication with you from quotation through shipment and beyond.
                      </p>
                    </div>
                  </div>
                </article>
              </div>



              <div className="column is-one-third">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Quality</h1>
                      <img src={drill} alt="drill" />
                      <p className="subtitle is-size-5">
                        Quality begins with efficient plant management and proven procedures.  Our 85 years of experience fabricating shell and tube heat exchangers has been documented in our Quality Manual which governs all aspects of our process from component purchase through final inspection.
                      </p>
                      <p className="subtitle is-size-5">
                        Our commitment to quality is backed by our guarantee on all of our thermal and mechanical heat exchanger designs.
                      </p>
                    </div>
                  </div>
                </article>
              </div>


              <div className="column is-one-third">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Delivery</h1>
                      <img src={delivery} alt="delivery" />
                      <p className="subtitle is-size-5">
                        Doyle & Roth offers complete "in-house" capability for the fabrication of pressure vessels and tubular heat transfer equipment.
                      </p>
                      <p className="subtitle is-size-5">
                        We maintain large inventories of standard tubing, pipe, plate, fitting, flanges, etc., allowing for outstanding delivery performance.
                      </p>
                      <p className="subtitle is-size-5">
                        For the purchase of custom materials, we have developed and maintained strong relationships with pre-qualified vendors and have negotiated rates and expedited delivery times for long lead items.
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


export default PrinciplesPage
