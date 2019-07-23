import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroDetails from '../components/common/HeroDetails'
import BannerSpecialist from '../components/common/BannerSpecialist'
import CourseInfo from '../components/common/CourseInfo'

const Specialist = ({ data }) => {
  const { frontmatter: specialist } = data.markdownRemark
  return (
    <Layout>
      <HeroDetails {...specialist} bgImageMobile={specialist.bgImage} />
      <CourseInfo {...specialist} />
      <BannerSpecialist />
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
        title
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        curriculum
        callActionSmall
        callActionBig
        buttonText
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
