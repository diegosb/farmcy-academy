import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PhotoLink from './PhotoLink'
import media from '../../theme/media'
import useAllSpecialists from '../../hooks/useSpecialists'
import useAllCourses from '../../hooks/useCourses'

const TypeHeader = styled.h4`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 35px;
  text-align: left;
  line-height: 1.5;
  margin-bottom: 30px;
  ${media.xs`
    font-size: ${({ theme }) => theme.font.size.medium};
    text-align: center;
  `};
`

const TypeSection = styled.div`
  margin: 60px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${media.xs`
      justify-content: center;
    `} > a {
    margin-bottom: 30px;
    margin-right: 2%;
    :nth-of-type(4) {
      margin-right: 0;
    }
  }
`

const Products = ({ max, title, to }) => {
  const images = to === 'cursos' ? useAllCourses() : useAllSpecialists()
  return (
    <TypeSection>
      <TypeHeader>{title}</TypeHeader>
      <Links>
        {images.map((img, index) => {
          const { node } = img
          const { frontmatter } = node
          if (max) {
            return index + 1 <= max ? (
              <PhotoLink
                key={node.id}
                title={frontmatter.title}
                subtitle={frontmatter.thumbnailDescription}
                imageInfo={{
                  image: frontmatter.thumbnailImage,
                  alt: frontmatter.name,
                }}
                to={node.fields.slug}
              />
            ) : null
          }
          return (
            <PhotoLink
              key={node.id}
              title={frontmatter.title}
              subtitle={frontmatter.thumbnailDescription}
              imageInfo={{
                image: frontmatter.thumbnailImage,
                alt: frontmatter.name,
              }}
              to={node.fields.slug}
            />
          )
        })}
      </Links>
    </TypeSection>
  )
}

Products.propTypes = {
  max: PropTypes.number,
  title: PropTypes.string.isRequired,
}

Products.defaultProps = {
  max: 0,
}

export default Products
