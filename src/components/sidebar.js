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
			サイドバー工事中
		</div>
	)
}

export default Sidebar