import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

// import SEO from "../components/seo"

const NotFoundPage = () => {
	return (
		<Layout>
			<h1>Page not found</h1>
			<p><Link to="/">Head home</Link></p>
		</Layout>
	)
}

export default NotFoundPage
