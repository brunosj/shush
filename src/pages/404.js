import React from 'react'

import Layout from '../components/layout'
import { Seo } from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Link to="/" className="title-link">
      <div class="title">
        <h1 class="text_shadows">shush!</h1>
      </div>
    </Link>
    <h2>NOT FOUND</h2>
    <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
  </Layout>
)

export default NotFoundPage
