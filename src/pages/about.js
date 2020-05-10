import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>I currently teach full full</p>
      <p><Link to="/contact">contavt</Link></p>
    </Layout>
  )
}

export default AboutPage