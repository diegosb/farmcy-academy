import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, ...props }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (image && image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />
  }

  if (childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />
  }

  if (image && image.relativePath) {
    return <img src={`/img/${image.relativePath}`} alt={alt} />
  }

  if (image && typeof image === 'string') return <img src={image} alt={alt} {...props} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
