import { Link } from 'gatsby'
import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading } from '@chakra-ui/react'

const PostCard = ({ post }) => {
	const img = getImage(post.frontmatter?.image?.childImageSharp)

	return (
		<Box key={post.id} mb={5}>
			<article className='post-list-item' itemScope itemType='https://schema.org/Article'>
				{img && (
					<Box as={GatsbyImage} image={img} alt={post.frontmatter.title} mb={2} borderRadius='md' />
				)}
				<header>
					<Heading as='h2' fontWeight='800' fontSize='2xl' noOfLines={3}>
						<Link to={post.fields.slug} itemProp='url'>
							<span itemProp='headline'>{post.frontmatter.title}</span>
						</Link>
					</Heading>
					{/*<small>{post.frontmatter.date}</small>*/}
				</header>
				{/*<section>*/}
				{/*	<p*/}
				{/*		dangerouslySetInnerHTML={{*/}
				{/*			__html: post.frontmatter.description || post.excerpt,*/}
				{/*		}}*/}
				{/*		itemProp='description'*/}
				{/*	/>*/}
				{/*</section>*/}
			</article>
		</Box>
	)
}

export default PostCard
