import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content }) => <span dangerouslySetInnerHTML={{ __html: content }} />

const Content = ({ content }) => <span>{content}</span>

Content.propTypes = {
  content: PropTypes.node.isRequired,
}

HTMLContent.propTypes = Content.propTypes

export default Content
