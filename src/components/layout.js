import * as React from 'react'
import { Link } from 'gatsby'
import { Heading, Box, Center } from '@chakra-ui/react'
import { GiScales } from 'react-icons/gi'

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath
	// let header

	// if (isRootPath) {
	// 	header = (
	// 		<h1 className='main-heading'>
	// 			<Link to='/'>{title}</Link>
	// 		</h1>
	// 	)
	// } else {
	// 	header = (
	// 		<Link className='header-link-home' to='/'>
	// 			{title}
	// 		</Link>
	// 	)
	// }

	return (
		<Box className='global-wrapper' data-is-root-path={isRootPath} maxW='1000px' mx='auto'>
			<Box as='header' className='global-header' textAlign='center'>
				<Center flexDir='column' mt='4' mb='4rem' fontSize='2xl'>
					<GiScales size={90} color='#ff7675' />
					<Box
						as={Link}
						to='/'
						display='inline-flex'
						// border='1px dashed'
						// px='20px'
						// py='10px'
						fontWeight='800'
					>
						{title}
					</Box>
				</Center>
			</Box>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href='https://www.gatsbyjs.com'>Gatsby</a>
			</footer>
		</Box>
	)
}

export default Layout
