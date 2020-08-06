import React from 'react';
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import './style.scss';



const Header = ({ data }) => (
	<section className="hero gradientBg ">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<Img fixed={data.file.childImageSharp.fixed} />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<a href="/">
								<h1 className="is-uppercase is-size-1 has-text-white">
									Doyle Roth
								</h1>
							</a>
							<p className="subtitle has-text-white is-size-3">
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;


export const query = graphql`
  query {
		file(absolutePath: {eq: "/home/jeretigerxu/Documents/Hacker Stuff/freelance-projects/doyle-roth/src/images/doyle-roth-new.png"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
}

`
