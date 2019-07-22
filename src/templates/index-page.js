import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/common/Hero'
import ContentSection from '../components/ContentSection'
import Banner from '../components/common/Banner'
import HowItWorks from '../components/HowItWorks'
import Member from '../components/Member'
import Testimonials from '../components/Testimonials'
import useIndexPageData from '../hooks/useIndexPageData'

const IndexPage = () => {
  const { hero, banner, contentHeaders, howItWorks, member } = useIndexPageData()
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
      <ContentSection {...contentHeaders} />
      <HowItWorks {...howItWorks} />
      <Banner {...banner} />
      <Member {...member} />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
