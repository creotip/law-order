/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

// import * as React from 'react'
// import { ColorModeScript } from '@chakra-ui/react'
// import { WrapRootElement } from './src/@chakra-ui/gatsby-plugin/provider'
// import theme from './src/@chakra-ui/gatsby-plugin/theme'

// export const onRenderBody = ({ setPreBodyComponents }) => {
// 	setPreBodyComponents([
// 		<ColorModeScript initialColorMode={theme.config.initialColorMode} key='chakra-ui-no-flash' />,
// 	])
// }

// export const wrapRootElement = ({ element }, pluginOptions) => {
// 	return <WrapRootElement element={element} {...pluginOptions} />
// }

exports.onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: 'he', dir: 'rtl' })
}
