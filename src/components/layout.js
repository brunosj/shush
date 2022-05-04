import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import '@stripe/stripe-js'
import '../styles/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          {children}
          <footer className="footer">
            <div className="telegramChannel">
              <h5>
                Join our{' '}
                <a
                  href="https://t.me/+boQVv-B5kY42NzI6"
                  target="_blank"
                  rel="noreferrer"
                  className="telegramLink"
                >
                  Telegram channel
                </a>{' '}
                for more info
              </h5>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
