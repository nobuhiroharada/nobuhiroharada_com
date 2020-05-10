import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>工事中</p>
      <p><Link to="/">TOPに戻る</Link></p>
    </Layout>
  )
}

export default AboutPage