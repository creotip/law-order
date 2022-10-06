import { Link } from 'gatsby'
import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading, Text } from '@chakra-ui/react'

export const FeaturedPostCard = ({ post }) => {
	const img = getImage(post.frontmatter?.image?.childImageSharp)

	return (
		<Box key={post.id} mb={5} maxW='640px'>
			<article className='post-list-item' itemScope itemType='https://schema.org/Article'>
				{img && (
					<Box
						as={GatsbyImage}
						image={img}
						alt={post.frontmatter.title}
						mb={4}
						borderRadius='md'
						isolation='isolate'
					/>
				)}

				<Box as='header' mb={4}>
					<Heading as='h2' fontWeight='800'>
						<Link to={post.fields.slug} itemProp='url'>
							<span itemProp='headline'>{post.frontmatter.title}</span>
						</Link>
					</Heading>
				</Box>

				<Text
					mb={2}
					dangerouslySetInnerHTML={{
						__html: post.frontmatter.description || post.excerpt,
					}}
					itemProp='description'
				/>

				<Box>
					<small>{post.frontmatter.date}</small> | המערכת
				</Box>
			</article>
		</Box>
	)
}
