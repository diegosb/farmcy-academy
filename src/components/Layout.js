import React from 'react'
import { ThemeProvider } from 'styled-components'

import Footer from './Footer'
import theme, { GlobalStyle } from '../theme'
import Headers from './Headers'

const TemplateWrapper = ({ children, noFooter, setTitle, setDescription }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Headers setTitle={setTitle} setDescription={setDescription} />
        <GlobalStyle />
        <div>{children}</div>
        {!noFooter ? <Footer /> : null}
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
