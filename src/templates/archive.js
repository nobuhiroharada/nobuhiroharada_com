import React from 'react';
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import indexStyles from '../pages/index.module.scss' // Homeと同じSCSS

export const data = graphql`
	query ( $startDate: Date, $endDate: Date ){
		allMarkdownRemark (
			limit: 100
			filter: { frontmatter: { date: { gte: $startDate, lt: $endDate }} }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
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

const ArchivePage = (props) => {

	const archive = props.pageContext.archive;

	return (
		<Layout>
			<div className={indexStyles.content}>
				<h2>Posts archived at "{archive}"</h2>
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
			</div>
			<Sidebar />
		</Layout>
	)
}

export default ArchivePage