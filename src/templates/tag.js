import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import indexStyles from '../pages/index.module.scss' // Homeと同じSCSS

export const data = graphql`
	query ( $tag: String ){
		allMarkdownRemark (
			limit: 100
			filter: { frontmatter: { tags: { in: [$tag] }} }
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

const TagPage = (props) => {

	const tag = props.pageContext.tag;

	return (
		<Layout>
			<div className={indexStyles.content}>
				<h2>Posts tagged as "{tag}"</h2>
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
		</Layout>
	)
}

export default TagPage