import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroDetails from '../components/common/HeroDetails'
import BannerSpecialist from '../components/common/BannerSpecialist'
import CourseInfo from '../components/common/CourseInfo'
import CourseModules from '../components/CourseModules'
import useIndexPageData from '../hooks/useIndexPageData'

const Course = ({ data }) => {
  const { frontmatter: course } = data.markdownRemark
  const { hero, bannerCourse } = useIndexPageData()
  return (
    <Layout>
      <HeroDetails
        {...course}
        bgImageMobile={course.bgImage}
        callActionSmall={hero.callActionSmall}
        callActionBig={hero.callActionBig}
        buttonText={hero.buttonText}
      />
      <CourseInfo {...course} buttonTextList="Acessar agora" />
      <CourseModules modules={course.modules} />
      <BannerSpecialist {...bannerCourse} />
    </Layout>
  )
}

export default Course

export const pageQuery = graphql`
  query CourseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        titleLanding
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
        modules {
          title
          description
        }
      }
    }
  }
`
