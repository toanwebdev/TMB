import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

interface ILayoutProps {
	children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Header />
			<Menu />
			<Container maxW='1232px'>{children}</Container>
			<Footer />
		</>
	)
}

export default Layout
