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
            contentHeaders {
              heading
              headingCourses
              headingSpecialist
              subHeading
              title
            }
            howItWorks {
              boxes {
                atualizacao {
                  description
                  title
                }
                diversidade {
                  description
                  title
                }
                especialistas {
                  description
                  title
                }
                organizacao {
                  description
                  title
                }
                qualidade {
                  description
                  title
                }
                refresh {
                  description
                  title
                }
              }
            }
            banner {
              buttonText
              title
            }
            member {
              buttonText
              description
              title
              titleCTA
              bgImage {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            testimonials {
              buttonText
              description
              title
              testimonialList {
                name
                subtitle
                text
                photo {
                  childImageSharp {
                    fluid(maxWidth: 60, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
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
