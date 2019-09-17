import { graphql, useStaticQuery } from 'gatsby'

const useAllSpecialists = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SpecialistsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "specialist-page" } } }
        ) {
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

export default useAllSpecialists
