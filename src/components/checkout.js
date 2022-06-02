import React, { useState } from 'react'
import getStripe from '../utils/stripejs'
import { Link } from 'gatsby'

const Checkout = () => {
  return (
    <div>
      <Link className="button" to="/tickets">
        buy tickets
      </Link>
      <div className="ticketInfo">
        <div className="earlyBird">early bird 8€</div>
        presale 10€ <br />
        Door 12€
      </div>
    </div>
  )
}

export default Checkout
