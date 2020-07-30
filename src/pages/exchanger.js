import React from 'react';


import Layout from '../components/layout';



const Exchanger = ({ siteTitle }) => (
  <Layout>
      <div className="container">
        <div className="columns is-multiline">

          <div className="column is-full">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Exchanger Selection</h1>
                  <p className="subtitle is-size-5">
                      At Doyle & Roth, our Engineers and Fabricators are experts in the design and manufacturing of specialty heat transfer equipment.  We can design almost any type of shell and tube exchanger or tank constructed from standard metals or specialty Alloys.
                  </p>
                </div>
                <a href="./images/Type_F_Fixed_Tube_Sheet.pdf" download="Type_F_Fixed_Tube_Sheet.pdf">Type F</a>
                <a href="./images/Type_H_Removable_Bundle_U_Tube.pdf" download="Type_H_Removable_Bundle_U_Tube.pdf">Type H</a>
              </div>
            </article>
          </div>



          </div>

        </div>

    </Layout>
);

export default Exchanger;
