import React, { useState } from 'react'
import getStripe from '../utils/stripejs'
import { Link } from 'gatsby'

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

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <button disabled={loading} className="button">
        <Link to="/tickets">buy tickets</Link>
      </button>
      <div className="ticketInfo">
        Presale 8€
        <br />
        Door 12€
      </div>
    </div>
  )
}

export default Checkout
