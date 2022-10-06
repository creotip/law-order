import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Center, Icon } from '@chakra-ui/react'
import { GiScales } from 'react-icons/gi'

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath

	return (
		<Box className='global-wrapper' data-is-root-path={isRootPath} maxW='1000px' mx='auto'>
			<Box as='header' className='global-header' textAlign='center'>
				<Center flexDir='column' mt='4' mb={['4', '4rem']} fontSize='2xl'>
					<Icon as={GiScales} w={['50px', '80px']} h={['50px', '80px']} color='#ff7675' />
					<Box as={Link} to='/' display='inline-flex' fontWeight='800' fontSize={['lg', '2xl']}>
						{title}
					</Box>
				</Center>
			</Box>
			<Box as='main' px={3}>
				{children}
			</Box>
			<Box as='footer' textAlign='center' my={6}>
				© {new Date().getFullYear()},{` `}
				<a href='https://www.gatsbyjs.com'>מערכת המשפח</a>
			</Box>
		</Box>
	)
}

export default Layout
