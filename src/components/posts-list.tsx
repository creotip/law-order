import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@chakra-ui/react'
import PostCard from './post-card'

export const PostsList = () => {
	const data = useStaticQuery(graphql`
		query {
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
								gatsbyImageData(width: 310, placeholder: DOMINANT_COLOR, quality: 70)
							}
						}
					}
				}
			}
		}
	`)

	const posts = data.allMarkdownRemark.nodes.slice(1)

	return (
		<Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
			{posts.map((post) => {
				const title = post.frontmatter.title || post.fields.slug

				return <PostCard key={post.id} post={post} />
			})}
		</Grid>
	)
}
