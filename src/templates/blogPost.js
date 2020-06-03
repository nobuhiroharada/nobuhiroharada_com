import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogPostStyles from './blogPost.module.scss'

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

const BlogPost = (props) => {

	const frontmatter = props.data.markdownRemark.frontmatter

	return (
		<Layout>
			<Head title="Blog" description={frontmatter.title}/>
			<div className={blogPostStyles.content}>
				<h1>{frontmatter.title}</h1>
				<div className={blogPostStyles.tags}>
					{frontmatter.tags && frontmatter.tags.map(tag => (
						<Link 
							to={`/tag/${tag}`}
							key={tag}
							className={blogPostStyles.tag}>
							{tag}
						</Link>
					))}
				</div>
				<p className={blogPostStyles.date}>{frontmatter.date}</p>
				<br />
				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
			</div>
		</Layout>
	)
}

export default BlogPost