import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import ogImage from '../img/og-image.png'

const Headers = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png" />
      <link rel="icon" href="../img/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png" />
      <link rel="manifest" href="../img/site.webmanifest" />
      <link rel="mask-icon" href="../img/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="/" />
      <meta property="og:image" itemProp="image" content={ogImage} />
    </Helmet>
  )
}

export default Headers
