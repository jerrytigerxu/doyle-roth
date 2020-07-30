import React from 'react';

import Layout from '../components/layout';

import machining from '../images/Fabrication/240_Machining.jpeg'
import drilling from '../images/Fabrication/350_Drilling.jpeg'
import tube from '../images/Fabrication/350_Tube_Bundle.jpg'
import shop from '../images/Fabrication/350_Shop_Photo.jpeg'
import tubes from '../images/Fabrication/350_tubes_B.jpg'
import welding from '../images/Fabrication/350_Welding.jpeg'
import last from '../images/Fabrication/350_IMG_5886.jpeg'

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
                        <img src={welding}  />


                      </div>
                    </div>
                  </article>
                </div>



                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Machining, Shearing & Rolling </h1>
                        <img src={machining}  />


                      </div>
                    </div>
                  </article>
                </div>



                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Drilling</h1>
                        <img src={drilling}  />





                      </div>
                    </div>
                  </article>
                </div>


                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Tube Bending</h1>
                        <img src={tube}  />

                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Assembly</h1>
                        <img src={last}  />

                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Inventory</h1>
                        <img src={tubes}  />

                      </div>
                    </div>
                  </article>
                </div>

                <div className="column is-one-third">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h1 className="title is-size-4">Facility</h1>
                        <img src={shop}  />

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
