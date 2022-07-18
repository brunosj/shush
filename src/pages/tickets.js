import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import { Seo } from '../components/seo'
import Checkout from '../components/checkout'
import CheckoutOneTicket from '../components/checkout/checkoutOneTicket'
import CheckoutTwoTickets from '../components/checkout/checkoutTwoTickets'
import CheckoutThreeTickets from '../components/checkout/checkoutThreeTickets'
import CheckoutFourTickets from '../components/checkout/checkoutFourTickets'
import CheckoutFiveTickets from '../components/checkout/checkoutFiveTickets'

const Tickets = () => (
  <Layout>
    <Seo title="tickets" description="get your tickets for our events" />
    <section>
      <Link to="/" className="title-link">
        <div class="title">
          <h1 class="text_shadows">shush!</h1>
        </div>
      </Link>

      <div class="tickets">
        <h2>presale is soldout</h2>
        {/* <div className="checkout">
          <CheckoutOneTicket />
          <CheckoutTwoTickets />
          <CheckoutThreeTickets />
          <CheckoutFourTickets />
          <CheckoutFiveTickets />
        </div> */}
        <div className="ticketInfo">
          <h2>
            <div className="earlyBird">early bird 8€</div>
            <div className="earlyBird">presale 10€</div>
            door 12€
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default Tickets
