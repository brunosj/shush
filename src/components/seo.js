import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export function Seo({
  title = '',
  description = '',
  pathname = '',
  image = '',
  children = null,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteDescription
          siteImage
        }
      }
    }
  `)

  const {
    siteTitle,
    siteTitleDefault,
    siteUrl,
    siteDescription,
    siteImage,
    hrefLang,
    twitter,
  } = siteMetadata

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    image: image || `${siteUrl}${siteImage}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleDefault}
      titleTemplate={`${siteTitle} - %s`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      {children}
    </Helmet>
  )
}
