import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	let titleTag = `${title} | ${data.site.siteMetadata.title}`

	if(title === "Home") {
		titleTag = `${data.site.siteMetadata.title}`
	}

	return (
		<Helmet title={titleTag}/>
	)
}

export default Head