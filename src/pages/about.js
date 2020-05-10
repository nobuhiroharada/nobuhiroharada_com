import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About"/>
			<div className={aboutStyles.content}>
				<h1>About</h1>
				<p>工事中</p>
				<p><Link to="/">TOPに戻る</Link></p>
			</div>
		</Layout>
	)
}

export default AboutPage