import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

const Sidebar = (props) => {

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
						}
					}
				}
			}
		}
	`)
	
	let tagArray = []
	const tagEdges = data.allMarkdownRemark.edges
	tagEdges.forEach((edge) => {
		if(edge.node.frontmatter.tags) {
			edge.node.frontmatter.tags.forEach((tag) => {
				tagArray.push(tag)
			})
		}
	})

	let tagDict = []
	for(let key of tagArray){
		tagDict[key] = tagArray.filter(function(x){return x==key}).length;
	}

	let tagLinks = []
	for(let key in tagDict) {
		tagLinks.push(<Link to={`/tag/${key}`} className={sidebarStyles.tag}>{key}({tagDict[key]})</Link>)
	}

	return (
		<div className={sidebarStyles.content}>
			<h3>Tags</h3>
			<div className={sidebarStyles.tags}>
				{tagLinks}
			</div>
		</div>
	)
}

export default Sidebar