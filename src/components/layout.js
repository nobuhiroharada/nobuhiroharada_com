import React from 'react'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
	return (
		<div className={layoutStyles.container}>
			<Header />
			<div className={layoutStyles.content}>
				{props.children}
				<Sidebar />
			</div>
			<Footer />
		</div>
	)
}

export default Layout