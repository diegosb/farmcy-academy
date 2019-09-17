import { graphql, useStaticQuery } from 'gatsby'

const useAllCourses = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CoursesQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "course-page" } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                thumbnailDescription
                thumbnailImage {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
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
  return allMarkdownRemark.edges
}

export default useAllCourses
