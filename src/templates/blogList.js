import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Pagination from '../components/pagination'
import indexStyles from '../pages/index.module.scss'

export const data = graphql`
	query ($skip: Int!, $limit: Int!) {
		allMarkdownRemark (
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		){
			edges {
				node {
					frontmatter {
						title
						date
					}
					fields {
						slug
					}
				}
			}
		}
	}
`

const BlogList = (props) => {

	const numPages = props.pageContext.numPages
	const currentPage = props.pageContext.currentPage

	let pagination = []
	for(let i=1; i<=numPages; i++) {
		if(i===currentPage) {
			pagination.push(<Link to={`/blog/${i}`} className={indexStyles.current} key={i}>{i}</Link>)
		} else {
			pagination.push(<Link to={`/blog/${i}`} key={i}>{i}</Link>)
		}
	}

	return (
		<Layout>
			<div className={indexStyles.content}>
				<ul className={indexStyles.posts}>
					{props.data.allMarkdownRemark.edges.map((edge, index) => {
						return (
							<li className={indexStyles.post} key={index}>
								<Link to={`/blog/${edge.node.fields.slug}`}>
									<h2>{edge.node.frontmatter.title}</h2>
									<p>{edge.node.frontmatter.date}</p>
								</Link>
							</li>
						)
					})}
				</ul>
				<Pagination props={props}/>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default BlogList