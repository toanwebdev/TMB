import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { useApollo } from '../lib/apolloClient'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Globals.scss'
import 'boxicons/css/boxicons.min.css'

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<ChakraProvider resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	)
}

export default MyApp
