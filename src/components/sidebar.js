import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

const Sidebar = () => {

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
							archive
						}
					}
				}
			}
		}
	`)
	

	let tagArray = []
	let archiveArray = []

	data.allMarkdownRemark.edges.forEach((edge) => {

		if(edge.node.frontmatter.tags) {
			edge.node.frontmatter.tags.forEach((tag) => {
				tagArray.push(tag)
			})
		}

		if(edge.node.frontmatter.archive) {
			archiveArray.push(edge.node.frontmatter.archive)
		}
	})

	// タグ
	let tagDict = []
	for(let key of tagArray){
		tagDict[key] = tagArray.filter(function(x){return x==key}).length;
	}

	let tagLinks = []
	for(let key in tagDict) {
		tagLinks.push(<Link to={`/tag/${key}`} className={sidebarStyles.tag} key={key}>{key}({tagDict[key]})</Link>)
	}

	// アーカイブ
	let archiveDict = []
	for(let key of archiveArray){
		archiveDict[key] = archiveArray.filter(function(x){return x==key}).length;
	}

	let archiveLinks = []
	for(let key in archiveDict) {
		archiveLinks.push(<Link to={`/archive/${key}`} className={sidebarStyles.tag} key={key}>{key}({archiveDict[key]})</Link>)
	}


	return (
		<div className={sidebarStyles.contents}>
			<h3>Tags</h3>
			<div className={sidebarStyles.content}>
				{tagLinks}
			</div>
			<h3>Archives</h3>
			<div className={sidebarStyles.content}>
				{archiveLinks}
			</div>
		</div>
	)
}

export default Sidebar