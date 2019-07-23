import { graphql, useStaticQuery } from 'gatsby'

const useCoursePageData = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query CoursesPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "courses-page" } }) {
          frontmatter {
            callActionSmall
            callActionBig
            buttonText
            buttonTextList
            banner {
              buttonText
              secondaryTitle
              title
            }
          }
        }
      }
    `,
  )

  return markdownRemark.frontmatter
}

export default useCoursePageData
