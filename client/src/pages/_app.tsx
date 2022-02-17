import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { useApollo } from '../lib/apolloClient'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Globals.scss'
import 'boxicons/css/boxicons.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<ChakraProvider resetCSS>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</ChakraProvider>
		</ApolloProvider>
	)
}

export default MyApp
