import { graphql, useStaticQuery } from 'gatsby'

const useIndexPageData = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            hero {
              heading
              callActionSmall
              callActionBig
              buttonText
              imageDesktop {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              imageMobile {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  return markdownRemark.frontmatter
}

export default useIndexPageData
