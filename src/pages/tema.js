import React from 'react';
import Layout from '../components/layout';

import sheet from '../images/tema_worksheet.png';

const TemaPage = ({ data }) => (
  <Layout>
  <div>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">

          <div className="column is-full">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">TEMA Datasheet</h1>
                  <p className="subtitle is-size-5">
                  Doyle & Roth has simplified the Quotation process by modifying the TEMA Datasheet to indicate the minimum information required for thermal and/or mechanical design in a user friendly format.
                  </p>

                  <p>
                  <a href="./images/TEMA_DATASHEET.doc" download="TEMA_DATASHEET.doc">Download TEMA Datasheet and Follow Instructions for Quotation:</a>
                  </p>
                </div>
              </div>
            </article>
          </div>


          <div className="column is-one-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <a href="./images/TEMA_DATASHEET.doc" download="TEMA_DATASHEET.doc"><img src={sheet} /></a>
                </div>

              </div>
            </article>
          </div>

          <div className="column is-one-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p className="subtitle is-size-6">Upon completing the TEMA Datasheet, email to Info@doyleroth.com.</p>
                  <p className="subtitle is-size-6">We will review your requirements and provide a quotation as soon as possible.  Do not hesitate to contact one of our engineers by email or at 212-269-7840.</p>
                  <h5>Form Key</h5>
                  <p className="subtitle is-size-6">(A) Information required to thermally rate and quote a heat exchanger </p>
                  <p className="subtitle is-size-6">(B) Thermal properties required if fluid is not in our data bank.A VLE curve is also required if the fluid is changing state.    </p>
                  <p className="subtitle is-size-6">(C) Required for mechanical quotation of predesigned equipment.  All  available construction related information below line 30.</p>
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


export default TemaPage
