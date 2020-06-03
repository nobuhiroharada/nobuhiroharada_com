import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, description }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
					image
					twitterUsername
				}
			}
		}
	`)

	const defaults = data.site.siteMetadata;

	let pageTitle = `${title} | ${defaults.title}`
	let pageDescription = description || defaults.description
	let pageUrl = defaults.siteUrl
	let pageImage = `${defaults.siteUrl}${defaults.image}`

	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:image" content={pageImage} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={defaults.twitterUsername} />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={pageImage} />
		</Helmet>
	)
}

export default Head