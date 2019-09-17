import React from 'react'
import PropTypes from 'prop-types'

function BlogRoll() {
  return <div className="columns is-multiline">Nothing here</div>
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

// eslint-disable-next-line
export default BlogRoll
