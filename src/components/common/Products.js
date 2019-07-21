import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PhotoLink from './PhotoLink'
import media from '../../theme/media'

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
  justify-content: space-between;
  ${media.xs`
      justify-content: center;
    `} > a {
    margin-bottom: 30px;
  }
`

const Products = ({ images, max, title, to }) => (
  <TypeSection>
    <TypeHeader>{title}</TypeHeader>
    <Links>
      {images.map((img, index) => {
        if (max) {
          return index + 1 <= max ? (
            <PhotoLink
              key={img.id}
              title={img.title}
              subtitle={img.subtitle}
              imageInfo={img.imageInfo}
              to={to}
            />
          ) : null
        }
        return (
          <PhotoLink
            key={img.id}
            title={img.title}
            subtitle={img.subtitle}
            imageInfo={img.imageInfo}
            to={to}
          />
        )
      })}
    </Links>
  </TypeSection>
)

Products.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  max: PropTypes.number,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

Products.defaultProps = {
  max: 0,
}

export default Products
