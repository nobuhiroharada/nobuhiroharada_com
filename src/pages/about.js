import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" description="About page"/>
			<div className={aboutStyles.content}>
				<h1>About</h1>
				<a href="https://nobuhiroharada.github.io/simple-resume/" rel="noreferrer noopener" target="_blank">オンラインレジュメへ</a>
			</div>
		</Layout>
	)
}

export default AboutPage