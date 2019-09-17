import { graphql, useStaticQuery } from 'gatsby'

const useRegisterPage = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query RegisterPageQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "register-page" } }) {
          frontmatter {
            firstStep {
              title
              buttonText
            }
            secondStep {
              title
              linkYT
              buttonText
            }
            thirdStep {
              title
              text
              buttonText
              buttonTextSecondary
            }
          }
        }
      }
    `,
  )
  return markdownRemark.frontmatter
}

export default useRegisterPage
