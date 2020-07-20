import React from 'react';


import './style.scss';



const Header = ({ siteTitle }) => (
	<section className="hero gradientBg ">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					{/*<figure className="is-left">
						<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo" />
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
							<img src={bulmaLogo} alt="bulma-logo" />
						</span>
					</figure>*/}
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
