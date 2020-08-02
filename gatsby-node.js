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
	const blogPostTemplate = path.resolve('./src/templates/blogPost.js')
	const tagTemplate = path.resolve('src/templates/tag.js');
	const archiveTemplate = path.resolve('src/templates/archive.js');

	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
							year: date(formatString: "YYYY")
							month: date(formatString: "MM")
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	const posts = res.data.allMarkdownRemark.edges

	// ブログリスト ページネーション
	const postsPerPage = 5
	const numPages = Math.ceil(posts.length / postsPerPage)
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog/1` : `/blog/${i + 1}`,
			component: path.resolve("./src/templates/blogList.js"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})

	let tagSet = new Set();
	let years = new Set();
	let yearMonths = new Set();

	posts.forEach((post) => {

		// タグ
		if (post.node.frontmatter.tags) {
			post.node.frontmatter.tags.forEach((tag) => {
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

		const { year, month } = post.node.frontmatter;

		// 年、年月をまとめる
		years.add(year);
		yearMonths.add(`${year}/${month}`);

		// ブログ内容
		createPage({
			path: `/blog/${post.node.fields.slug}`,
			component: blogPostTemplate,
			context: {
				slug: post.node.fields.slug
			}
		})
	})

	// アーカイブ(年別ページ)
	years.forEach(year => {
		createPage({
			path: `archive/${year}/`,
			component: archiveTemplate,
			context: {
				archive: year,
				startDate: `${year}-01-01T00:00:00.000Z`,
				endDate: `${year}-12-31T23:59:59.999Z`
			}
		});
	});

	// アーカイブ(月別ページ)
	yearMonths.forEach(yearMonth => {
		const [year, month] = yearMonth.split('/')
		const startDate = `${year}-${month}-01T00:00:00.000Z`;
		const newStartDate = new Date(startDate);
		// 月末日を取得
		const endDate = new Date(
		new Date(newStartDate.setMonth(newStartDate.getMonth() + 1)).getTime() -
			1
		).toISOString();

		const archive = year + '-' +month
		createPage({
			path: `archive/${year}/${month}/`,
			component: archiveTemplate,
			context: {
				archive: archive,
				startDate: startDate,
				endDate: endDate
			}
		});
	});

}