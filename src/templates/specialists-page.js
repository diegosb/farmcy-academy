import React from 'react'

import Products from '../components/common/Products'
import mockPhoto from '../img/alexatala.png'
import ReturnHome from '../components/common/ReturnHome'
import ProductsLayout from '../components/common/ProductsLayout'

const images = [
  {
    id: 1,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 2,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 3,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 4,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 5,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 6,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 7,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 8,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
]

const ProductPage = () => {
  return (
    <ProductsLayout>
      <Products
        images={[...images, ...images, ...images]}
        title="Especialistas Farmcy Academy"
        to="/especialista"
      />
      <ReturnHome />
    </ProductsLayout>
  )
}

export default ProductPage

// export const productPageQuery = graphql`
//   query ProductPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image2 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image3 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1075, quality: 72) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `
