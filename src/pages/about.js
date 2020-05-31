import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" description="About page"/>
			<div className={aboutStyles.content}>
				<h1>About</h1>
				<a href="https://nobuhiroharada.github.io/simple-resume/" target="_blank">オンラインレジュメへ</a>
			</div>
		</Layout>
	)
}

export default AboutPage