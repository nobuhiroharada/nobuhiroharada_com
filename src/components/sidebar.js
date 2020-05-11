import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

const Sidebar = () => {
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		site {
	// 			siteMetadata {
	// 				author
	// 			}
	// 		}
	// 	}
	// `)

	return (
		<div className={sidebarStyles.content}>
			<h3>Tags</h3>
			<div className={sidebarStyles.tags}>
				<Link 
					to="/tag/php/"
					className={sidebarStyles.tag}>
					php
				</Link>
				<Link 
					to="/tag/javascript/"
					className={sidebarStyles.tag}>
					javascript
				</Link>
			</div>
		</div>
	)
}

export default Sidebar