import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import indexStyles from './blog.module.scss'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
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
	`)

	return (
		<Layout>
			<ul className={indexStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge, index) => {
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
		</Layout>
	)
}

export default IndexPage