import { graphql, useStaticQuery } from 'gatsby'

const useAllSpecialists = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SpecialistsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "specialist-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                thumbnailDescription
                thumbnailImage {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
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
  return allMarkdownRemark.edges
}

export default useAllSpecialists
