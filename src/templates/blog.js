import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

export const query = graphql`
	query ( $slug: String! ) {
		markdownRemark ( fields: { slug: { eq: $slug } } ) {
			frontmatter {
				title
				tags
				date
			}
			html
		}
	}
`

const Blog = (props) => {

	const frontmatter = props.data.markdownRemark.frontmatter

	return (
		<Layout>
			<Head title="Blog" description={frontmatter.title}/>
			<div className={blogStyles.content}>
				<h1>{frontmatter.title}</h1>
				<p className={blogStyles.date}>{frontmatter.date}</p>
				<br />
				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
				<div className={blogStyles.tags}>
					{frontmatter.tags && frontmatter.tags.map(tag => (
						<Link 
							to={`/tag/${tag}`}
							key={tag}
							className={blogStyles.tag}>
							{tag}
						</Link>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Blog