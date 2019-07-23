import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroDetails from '../components/common/HeroDetails'
import BannerSpecialist from '../components/common/BannerSpecialist'
import CourseInfo from '../components/common/CourseInfo'
import CourseModules from '../components/CourseModules'
import useCoursePageData from '../hooks/UseCoursePage'

const Course = ({ data }) => {
  const { frontmatter: course } = data.markdownRemark
  const { callActionSmall, callActionBig, buttonText, buttonTextList, banner } = useCoursePageData()
  console.log(course)
  return (
    <Layout>
      <HeroDetails
        {...course}
        bgImageMobile={course.bgImage}
        callActionSmall={callActionSmall}
        callActionBig={callActionBig}
        buttonText={buttonText}
      />
      <CourseInfo {...course} buttonTextList={buttonTextList} />
      <CourseModules modules={course.modules} />
      <BannerSpecialist {...banner} />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleLanding
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
        #        modules {
        #          title
        #          description
        #        }
      }
    }
  }
`
