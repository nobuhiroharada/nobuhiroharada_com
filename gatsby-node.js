const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	
	if(node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md')
		
		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogTemplate = path.resolve('./src/templates/blog.js')
	const tagTemplate = path.resolve('src/templates/tag.js');
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	const tagSet = new Set();

	res.data.allMarkdownRemark.edges.forEach((edge) => {

		if (edge.node.frontmatter.tags) {
			edge.node.frontmatter.tags.forEach((tag) => {
				tagSet.add(tag);
			});
		}

		const tagList = Array.from(tagSet);
		tagList.forEach((tag) => {
			createPage({
				path: `/tag/${tag}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			});
		});

		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		})
	})

}