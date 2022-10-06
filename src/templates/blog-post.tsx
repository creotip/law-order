import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Box, Divider, Heading } from '@chakra-ui/react'

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
	const siteTitle = site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<Box
				as='article'
				maxW='800px'
				mx='auto'
				className='blog-post'
				itemScope
				itemType='https://schema.org/Article'
			>
				<header>
					<Heading as='h1' itemProp='headline' textAlign='center' mb={2}>
						{post.frontmatter.title}
					</Heading>
					<Box textAlign='center' mb={4}>
						{post.frontmatter.date} | המערכת
					</Box>
				</header>
				<Box
					as='section'
					mb={6}
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp='articleBody'
				/>
				<Divider />
			</Box>
			<nav className='blog-post-nav'>
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel='prev'>
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel='next'>
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</Layout>
	)
}

export const Head = ({ data: { markdownRemark: post } }) => {
	return (
		<Seo
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		/>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
		previous: markdownRemark(id: { eq: $previousPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
		next: markdownRemark(id: { eq: $nextPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
`
