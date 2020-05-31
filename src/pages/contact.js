import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" description="Contact page"/>
			<div className={contactStyles.content}>
				<h1>Contact</h1>
				
				Twitter: <a href="https://twitter.com/nobuhiro_harada" target="_blank">@nobuhiro_harada</a>
			</div>
		</Layout>
	)
}

export default ContactPage