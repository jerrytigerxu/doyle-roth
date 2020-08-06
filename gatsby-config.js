const path = require(`path`)

module.exports = {
	siteMetadata: {
		title: 'Doyle & Roth',
		author: 'Jere Xu',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'This is the website for the company Doyle & Roth',
		keywords: `doyle, roth, manufacturing`,
		twitter: 'https://twitter.com',
		github: `https://github.com`,
		medium: 'https://medium.com',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`,
		address: '39 Broadway Suite 710, New York NY 10006',
		phone: '212-269-7840',
		fax: '212-248-4780',
		email: 'info@doyleroth.com'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Palanquin Dark',
					}
				],
			}
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'inventory',
				path: `${__dirname}/src/images/Inventory`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/logo.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
