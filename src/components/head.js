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

	let titleMeta = `${title} | ${defaults.title}`

	if(title === "Home") {
		titleMeta = `${defaults.title}`
	}

	let descriptionMeta = description || defaults.description
	let urlMeta = defaults.siteUrl
	let imageMeta = defaults.image
	
	return (
		<Helmet>
			<title>{titleMeta}</title>
			<meta name="description" content={descriptionMeta} />
			<meta property="og:url" content={urlMeta} />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={titleMeta} />
			<meta property="og:description" content={descriptionMeta} />
			<meta property="og:image" content={imageMeta} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={defaults.twitterUsername} />
			<meta name="twitter:title" content={titleMeta} />
			<meta name="twitter:description" content={descriptionMeta} />
			<meta name="twitter:image" content={imageMeta} />
		</Helmet>
	)
}

export default Head