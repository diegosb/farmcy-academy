import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/common/Hero'
import ContentSection from '../components/ContentSection'
import Banner from '../components/common/Banner'
import HowItWorks from '../components/HowItWorks'
import Member from '../components/Member'
import Testimonials from '../components/Testimonials'
import useIndexPageData from '../hooks/useIndexPageData'
import bgImage from '../img/BG_ImpactoSocial.png'

const description = `
        <p>
        Parte da sua mensalidade é destinada para a produção de uma série totalmente gratuita, que
        tem a missão de levar conhecimento e informação sobre alimentação e saúde para todos os
        brasileiros.
      </p>
      <p>
        Além de melhorar a sua qualidade de vida, você possibilita que muitas outras pessoas também
        adquiram conhecimento para transformar suas vidas.
      </p>
      <p>Até agora, já são mais de 40 mil pessoas impactadas.</p>
`

const memberData = {
  title: 'Uma decisão de impacto social.',
  description,
  buttonText: 'Inscreva-se Agora',
  textAboveButton: 'Seja um membro e financie essa causa',
  bgImage,
}

const IndexPage = () => {
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
      <ContentSection />
      <HowItWorks />
      <Banner />
      <Member {...memberData} />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
