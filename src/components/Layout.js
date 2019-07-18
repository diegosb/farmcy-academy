import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import '@atlaskit/css-reset'

import Footer from './Footer'
import theme, { GlobalStyle } from '../theme'

import useSiteMetadata from './SiteMetadata'
import Favicon from './Favicon'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <Favicon />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.png" />
        </Helmet>
        <GlobalStyle />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
