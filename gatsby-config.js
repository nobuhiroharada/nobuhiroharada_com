/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'nobuhiroharada.com',
		author: 'Nobuhiro Harada',
		description: 'nobuhiroharada\'s site',
		siteUrl: 'https://nobuhiroharada.com',
		image: '/sns-share.png',
		twitterUsername: "@nobuhiro_harada"
	},
	pathPrefix: '/nobuhiroharada_com',
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						},
					},
					{
						resolve: `gatsby-remark-prismjs`
					},
					{
						resolve: "gatsby-remark-external-links",
							options: {
							target: "_blank",
							rel: "nofollow"
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-131270136-1",
				head: true
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "nobuhiroharada.com",
				short_name: "nobuhara",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#000000",
				display: "standalone",
				icon: "src/images/icon.png",
				crossOrigin: `use-credentials`,
			},
		},
		'gatsby-plugin-offline',
	],
}
