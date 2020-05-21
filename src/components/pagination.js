import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import paginationStyles from './pagination.module.scss'

const Pagination = (data) => {

	const numPages = data.props.pageContext.numPages
	const currentPage = data.props.pageContext.currentPage

	let pagination = []
	for(let i=1; i<=numPages; i++) {
		if(i===currentPage) {
			pagination.push(<Link to={`/blog/${i}`} className={paginationStyles.current} key={i}>{i}</Link>)
		} else {
			pagination.push(<Link to={`/blog/${i}`} key={i}>{i}</Link>)
		}
	}

	return (
		<div className={paginationStyles.pagination}>
			{pagination}
		</div>
	)
}

export default Pagination