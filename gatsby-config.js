module.exports = {
	siteMetadata: {
		title: `מערכת המשפח`,
		author: {
			name: `אנונימוס`,
			summary: `who lives and works in San Francisco building useful things.`,
		},
		description: `האתר שחושף את השחיתות במערכות שלטון החוק`,
		siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
		social: {
			twitter: `kylemathews`,
		},
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-netlify-cms`,
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `blog`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 640,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.nodes.map((node) => {
								return Object.assign({}, node.frontmatter, {
									description: node.excerpt,
									date: node.frontmatter.date,
									url: site.siteMetadata.siteUrl + node.fields.slug,
									guid: site.siteMetadata.siteUrl + node.fields.slug,
									custom_elements: [{ 'content:encoded': node.html }],
								})
							})
						},
						query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
					  description
					  image {
						childImageSharp {
							gatsbyImageData(width: 640, placeholder: BLURRED)
						}
					}
                    }
                  }
                }
              }
            `,
						output: '/rss.xml',
						title: 'Gatsby Starter Blog RSS Feed',
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/law-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				/**
				 * @property {boolean} [resetCSS=true]
				 * if false, this plugin will not use `<CSSReset />
				 */
				resetCSS: true,
				/**
				 * @property {boolean} [isUsingColorMode=true]
				 * if false, this plugin will not use <ColorModeProvider />
				 */
				isUsingColorMode: true,
				initialColorMode: 'light',
			},
		},
	],
}
