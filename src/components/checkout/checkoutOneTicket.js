import React, { useState } from 'react'
import getStripe from '../../utils/stripejs'

const buttonStyles = {
  fontSize: '1.2rem',
  textAlign: 'center',
  color: '#000',
  padding: '12px 60px',
  backgroundColor: '#00f5d4',
  borderRadius: '6px',
  border: '#00f5d4',
  letterSpacing: '',
  cursor: 'pointer',
  textTransform: 'lowercase',
  fontWeight: 'bold',
}

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}

const CheckoutOneTicket = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async (event) => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: process.env.GATSBY_BUTTON_PRICE_ID, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <button disabled={loading} className="button" onClick={redirectToCheckout}>
      1
    </button>
  )
}

export default CheckoutOneTicket
