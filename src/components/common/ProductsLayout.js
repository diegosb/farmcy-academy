import React from 'react'
import styled from 'styled-components'

import Layout from '../Layout'
import useIndexPageData from '../../hooks/useIndexPageData'
import Hero from './Hero'
import Section from './Section'
import Banner from './Banner'

const BorderBlack = styled.div`
  background: #000;
  height: 15px;
  width: 100%;
`

const ProductsLayout = ({ children }) => {
  const { hero } = useIndexPageData()
  return (
    <Layout>
      <Hero
        bgImage={hero.imageDesktop}
        bgImageMobile={hero.imageMobile}
        title={hero.heading}
        buttonText={hero.buttonText}
        callActionSmall={hero.callActionSmall}
        callActionBig={hero.callActionBig}
      />
      <Section>{children}</Section>
      <Banner />
      <BorderBlack />
    </Layout>
  )
}

export default ProductsLayout
