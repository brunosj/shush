import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Seo } from '../components/seo'

const SecondPage = () => (
  <Layout>
    <Seo title="Payment" />
    <section>
      <Link to="/" className="title-link">
        <div class="title">
          <h1 class="text_shadows">shush!</h1>
        </div>
      </Link>
      <div class="tickets">
        <h2>Thank you! You will receive an email with your tickets</h2>
      </div>
    </section>
  </Layout>
)

export default SecondPage
