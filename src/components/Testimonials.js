import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './common/Section'
import Heading from './common/Heading'
import Button from './common/Button'
import media from '../theme/media'
import Subheading from './common/Subheading'

const TestimonialsSection = styled(Section)`
  padding: 60px 0 120px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${media.xs`
      padding: 40px 0;
  `};
`

const Testimonials = () => (
  <TestimonialsSection>
    <Heading>Conheça quem já faz parte da jornada</Heading>
    <Subheading>Faça parte da mudança e transforme sua vida agora.</Subheading>
    <div>Testimonials</div>
    <Button element={<Link to="/form" />}>INSCREVA-SE AGORA</Button>
  </TestimonialsSection>
)

export default Testimonials
