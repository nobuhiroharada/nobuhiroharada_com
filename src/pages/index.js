import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Head from '../components/head'
import Pagination from '../components/pagination'
import indexStyles from './index.module.scss'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark (
				sort: { fields: [frontmatter___date], order: DESC }
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
	`)
	
	const posts = data.allMarkdownRemark.edges
	const postsPerPage = 5
	const numPages = Math.ceil(posts.length / postsPerPage)
	const currentPage = 1

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
			<Head title="Home"/>
			<div className={indexStyles.content}>
				<ul className={indexStyles.posts}>
					{data.allMarkdownRemark.edges.slice(0, postsPerPage).map((edge, index) => {
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
				
				<div className={indexStyles.pagination}>
					{pagination}
				</div>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default IndexPage