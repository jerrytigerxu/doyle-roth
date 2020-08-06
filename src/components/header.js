import React from 'react';
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import './style.scss';



const Header = () => {

		const logo = useStaticQuery(graphql`
			{
				pic: file(relativePath: {eq: "doyle-roth-new.png"}) {
		      childImageSharp {
		        fixed(width: 650) {
		          ...GatsbyImageSharpFixed
		        }
		      }
		    }
		}
		`);

		const { pic } = logo

		return (
			<Img fixed={pic.childImageSharp.fixed} />
	);
};

export default Header;
