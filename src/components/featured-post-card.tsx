import { Link } from 'gatsby'
import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading } from '@chakra-ui/react'

export const FeaturedPostCard = ({ post }) => {
	const img = getImage(post.frontmatter?.image?.childImageSharp)

	return (
		<Box key={post.id} mb={5} maxW='640px'>
			<article className='post-list-item' itemScope itemType='http://schema.org/Article'>
				{img && <GatsbyImage image={img} alt={post.frontmatter.title} />}

				<header>
					<Heading as='h2' fontWeight='800'>
						<Link to={post.fields.slug} itemProp='url'>
							<span itemProp='headline'>{post.frontmatter.title}</span>
						</Link>
					</Heading>
					<small>{post.frontmatter.date}</small>
				</header>
				<section>
					<p
						dangerouslySetInnerHTML={{
							__html: post.frontmatter.description || post.excerpt,
						}}
						itemProp='description'
					/>
				</section>
			</article>
		</Box>
	)
}
