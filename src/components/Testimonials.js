import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './common/Section'
import { Heading, Subheading } from './common/typography'
import Button from './common/Button'
import Testimonial from './common/Testimonial'
import media from '../theme/media'

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

const UsersTestimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;
  width: 100%;
  ${media.xs`
      flex-direction: column;
  `};
`

const Testimonials = ({ buttonText, description, title, testimonialList }) => (
  <TestimonialsSection bgColor="ice">
    <Heading>{title}</Heading>
    <Subheading>{description}</Subheading>
    <UsersTestimonials>
      {testimonialList.map(user => (
        <Testimonial
          key={user.name}
          name={user.name}
          subtitle={user.subtitle}
          text={user.text}
          photo={user.photo}
        />
      ))}
    </UsersTestimonials>
    <Button element={<Link to="/registro" />}>{buttonText}</Button>
  </TestimonialsSection>
)

export default Testimonials
