import React from 'react';


import Layout from '../../components/layout';



const Exchanger = ({ siteTitle }) => (
  <Layout>
      <div className="container">
        <div className="columns is-multiline">

          <div className="column is-full">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Exchanger Selection</h1>
                  <h2 className="title is-size-5">Doyle & Roth Standardized Units:</h2>
                  <p className="subtitle is-size-6">D&R has made preliminary unit sizing easy!</p>
                  </div>
              </div>
            </article>
          </div>



          <div className="column is-one-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h3 className="subtitle is-size-5">
                  Select your configuration below for dimensions tube surface area:
                  </h3>
                  <ol>
                    <li><a href="/exchanger/fixed_four_pass">Fixed Tubesheet - Four Pass</a></li>
                    <li><a href="/exchanger/fixed_one_pass">Fixed Tubesheet - One Pass</a></li>
                    <li><a href="/exchanger/fixed_two_pass">Fixed Tubesheet - Two Pass</a></li>
                    <li><a href="/exchanger/u_four_pass_sq">U Tube - Four Pass (Sq. Pitch)</a></li>
                    <li><a href="/exchanger/u_two_pass_sq">U Tube - Two Pass (Sq. Pitch)</a></li>
                    <li><a href="/exchanger/u_four_pass_tri">U Tube - Four Pass (Tri. Pitch)</a></li>
                    <li><a href="/exchanger/u_two_pass_sq">U Tube - Two Pass (Tri. Pitch)</a></li>
                  </ol>

                </div>
              </div>
            </article>
          </div>

          <div className="column is-one-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h3 className="subtitle is-size-5">
                    Or download our catalogs:
                  </h3>
                  <a href="./images/Type_F_Fixed_Tube_Sheet.pdf" download="Type_F_Fixed_Tube_Sheet.pdf">Type F</a>
                  <a href="./images/Type_H_Removable_Bundle_U_Tube.pdf" download="Type_H_Removable_Bundle_U_Tube.pdf">Type H</a>

                </div>
              </div>
            </article>
          </div>


        </div>
      </div>

    </Layout>
);

export default Exchanger;
