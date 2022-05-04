import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="shush" />
    <section>
      <div class="title">
        <h1>shush!</h1>
      </div>
      <div class="subtitle">
        <div>
          <h2>
            U+S Pankow <br /> <span>11 june 2022</span> <br />
            10pm-late
          </h2>
        </div>
      </div>
      <div className="checkout">
        <Checkout />
      </div>
    </section>
  </Layout>
)

export default IndexPage
