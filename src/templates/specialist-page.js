import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroDetails from '../components/common/HeroDetails'
import BannerSpecialist from '../components/common/BannerSpecialist'
import CourseInfo from '../components/common/CourseInfo'
import useIndexPageData from '../hooks/useIndexPageData'

const Specialist = ({ data }) => {
  const { frontmatter: specialist } = data.markdownRemark
  const { hero, bannerSpecialist } = useIndexPageData()
  return (
    <Layout>
      <HeroDetails
        {...specialist}
        bgImageMobile={specialist.bgImage}
        title={hero.heading}
        buttonText={hero.buttonText}
        callActionSmall={hero.callActionSmall}
        callActionBig={hero.callActionBig}
      />
      <CourseInfo {...specialist} buttonTextList="Acessar agora" />
      <BannerSpecialist {...bannerSpecialist} />
    </Layout>
  )
}
Specialist.propTypes = {}
Specialist.defaultProps = {}

export default Specialist

export const pageQuery = graphql`
  query SpecialistByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        titleLanding
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleLanding
        curriculum
        description
        details {
          text
          icon {
            relativePath
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
