import React from 'react'

import Products from '../../components/common/Products'
import ReturnHome from '../../components/common/ReturnHome'
import ProductsLayout from '../../components/common/ProductsLayout'
import useAllSpecialists from '../../hooks/useSpecialists'

const ProductPage = () => {
  const specialists = useAllSpecialists()
  return (
    <ProductsLayout>
      <Products images={specialists} title="Especialistas Farmcy Academy" to="especialista" />
      <ReturnHome />
    </ProductsLayout>
  )
}

export default ProductPage
