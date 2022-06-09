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
                location to be shared on 11 june on{' '}
                <a
                  href="https://t.me/+boQVv-B5kY42NzI6"
                  target="_blank"
                  rel="noreferrer"
                  className="telegramLink"
                >
                  telegram
                </a>{' '}
                and{' '}
                <a
                  href="https://www.instagram.com/shush.dance/"
                  target="_blank"
                  rel="noreferrer"
                  className="telegramLink"
                >
                  instagram
                </a>
                <br />
                <a
                  href="mailto:hello@shush.dance"
                  target="_blank"
                  rel="noreferrer"
                  className="telegramLink"
                >
                  get in touch
                </a>{' '}
                for any questions
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
