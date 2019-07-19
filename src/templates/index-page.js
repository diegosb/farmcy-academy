import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import Banner from '../components/Banner'
import HowItWorks from '../components/HowItWorks'
import Member from '../components/Member'
import Testimonials from '../components/Testimonials'
import useIndexPageData from '../hooks/useIndexPageData'

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
      <Member />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         hero {
//           heading
//           callActionSmall
//           callActionBig
//           buttonText
//           imageDesktop {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           imageMobile {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
