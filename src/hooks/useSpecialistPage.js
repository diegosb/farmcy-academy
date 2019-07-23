import { graphql, useStaticQuery } from 'gatsby'

const useSpecialistPageData = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query SpecialistsPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "specialists-page" } }) {
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

export default useSpecialistPageData
