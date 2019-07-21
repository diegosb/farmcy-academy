import React from 'react'
import { ThemeProvider } from 'styled-components'
import '@atlaskit/css-reset'

import Footer from './Footer'
import theme, { GlobalStyle } from '../theme'
import Headers from './Headers'

const TemplateWrapper = ({ children, noFooter }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Headers />
        <GlobalStyle />
        <div>{children}</div>
        {!noFooter ? <Footer /> : null}
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
