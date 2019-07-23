import React from 'react'

import Products from '../../components/common/Products'
import mockPhoto from '../../img/alexatala.png'
import ReturnHome from '../../components/common/ReturnHome'
import ProductsLayout from '../../components/common/ProductsLayout'

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

const CoursesPage = () => {
  return (
    <ProductsLayout>
      <Products
        images={[...images, ...images, ...images]}
        title="Cursos Farmcy Academy"
        to="/curso"
      />
      <ReturnHome />
    </ProductsLayout>
  )
}

export default CoursesPage
