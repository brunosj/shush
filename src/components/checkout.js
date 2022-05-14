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
        Presale 8€
        <br />
        Door 12€
      </div>
    </div>
  )
}

export default Checkout
