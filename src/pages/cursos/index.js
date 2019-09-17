import React from 'react'

import Products from '../../components/common/Products'
import ReturnHome from '../../components/common/ReturnHome'
import ProductsLayout from '../../components/common/ProductsLayout'
import useAllCourse from '../../hooks/useCourses'

const CoursesPage = () => {
  const courses = useAllCourse()
  return (
    <ProductsLayout>
      <Products images={courses} title="Cursos Farmcy Academy" to="cursos" />
      <ReturnHome />
    </ProductsLayout>
  )
}

export default CoursesPage
