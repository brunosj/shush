import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Checkout from '../components/checkout'
import CheckoutOneTicket from '../components/checkout/checkoutOneTicket'
import CheckoutTwoTickets from '../components/checkout/checkoutTwoTickets'
import CheckoutThreeTickets from '../components/checkout/checkoutThreeTickets'
import CheckoutFourTickets from '../components/checkout/checkoutFourTickets'
import CheckoutFiveTickets from '../components/checkout/checkoutFiveTickets'

const IndexPage = () => (
  <Layout>
    <SEO title="tickets" />
    <section>
      <div class="title">
        <h1 class="text_shadows">shush!</h1>
      </div>
      <div class="tickets">
        <h3>select number of tickets</h3>
        <div className="checkout">
          <CheckoutOneTicket />
          <CheckoutTwoTickets />
          <CheckoutThreeTickets />
          <CheckoutFourTickets />
          <CheckoutFiveTickets />
        </div>
        <div className="ticketInfo">
          Presale 8€
          <br />
          Door 12€
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
