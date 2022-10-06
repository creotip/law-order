import * as React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/post-card'
import { Center, Grid } from '@chakra-ui/react'
import { FeaturedPostCard } from '../components/featured-post-card'
import { PostsList } from '../components/posts-list'

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const posts = data.allMarkdownRemark.nodes

	if (posts.length === 0) {
		return (
			<Layout location={location} title={siteTitle}>
				<Bio />
				<p>
					No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
					for the "gatsby-source-filesystem" plugin in gatsby-config.js).
				</p>
			</Layout>
		)
	}

	return (
		<Layout location={location} title={siteTitle}>
			{/* <Bio /> */}

			<Center className='featured-wrap' mb='4rem'>
				<FeaturedPostCard post={[...posts].shift()} />
			</Center>
			{/*<Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>*/}
			{/*	{[...posts].slice(1).map((post) => {*/}
			{/*		const title = post.frontmatter.title || post.fields.slug*/}

			{/*		return <PostCard key={post.id} post={post} />*/}
			{/*	})}*/}
			{/*</Grid>*/}

			<PostsList />
		</Layout>
	)
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='האתר שחושף את השחיתות במערכות שלטון החוק' />

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			nodes {
				id
				excerpt
				fields {
					slug
				}
				frontmatter {
					date(formatString: "MMMM DD, YYYY", locale: "he")
					title
					description
					image {
						childImageSharp {
							gatsbyImageData(width: 640, placeholder: DOMINANT_COLOR)
						}
					}
				}
			}
		}
	}
`
