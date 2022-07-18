import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Checkout from '../components/checkout'
import { Seo } from '../components/seo'
import Flyer from '../images/shush_event2.jpg'
import FlyerMobile from '../images/shush_event2_mobile.jpg'

const IndexPage = () => (
  <Layout>
    <Seo title="shush!" description="next event on 23 july 2022 in Berlin" />

    <div>
      <img src={Flyer} className="flyer" />
      <img src={FlyerMobile} className="flyerMobile" />
    </div>
    <section>
      <Link to="/" className="title-link">
        <div class="title">
          <h1 class="text_shadows">shush!</h1>
        </div>
      </Link>
      <div class="subtitle">
        {/* <p className="nextEvent">next event announced soon</p> */}
        <div className="line-up">
          <div>
            <h2>
              alexander nut<span className="label"> (eglo)</span>
            </h2>
            <h2>d'monk</h2>
            <h2>emeline</h2>
            <h2>harvey dweller (live)</h2>
            <h2>ken okuda</h2>
            <h2>
              orlando rosé <span className="label"> (pinewax)</span>
            </h2>
          </div>
          <div className="eventInfo">
            {' '}
            <div className="eventDetails">
              U+S Pankow <br /> <span className="date">11 june 2022</span>
              <br />
              10pm till late
            </div>
            <div className="">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
