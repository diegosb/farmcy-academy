import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './Container'

const SectionWrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  background: ${({ theme, bgColor }) => theme.colors[bgColor] || theme.colors.white};
`

const Section = ({ children, bgColor, ...props }) => (
  <SectionWrapper bgColor={bgColor} {...props}>
    <Container>{children}</Container>
  </SectionWrapper>
)
Section.propTypes = { children: PropTypes.node.isRequired }

export default Section
