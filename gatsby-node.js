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
	const archiveTemplate = path.resolve('src/templates/archive.js');

	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
							archive
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	let tagSet = new Set();

	res.data.allMarkdownRemark.edges.forEach((edge) => {

		// タグ
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

		// アーカイブ
		createPage({
			path: `/archive/${edge.node.frontmatter.archive}/`,
			component: archiveTemplate,
			context: {
				archive: edge.node.frontmatter.archive,
			},
		});

		// ブログ内容
		createPage({
			path: `/blog/${edge.node.fields.slug}`,
			component: blogTemplate,
			context: {
				slug: edge.node.fields.slug
			}
		})
	})

}