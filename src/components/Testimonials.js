import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Section from './common/Section'
import Heading from './common/Heading'
import Button from './common/Button'
import Subheading from './common/Subheading'
import Testimonial from './common/Testimonial'
import userPhoto from '../img/fulanodetal.jpg'
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

const users = [
  {
    id: 1,
    text: 'Aqui vai um depoimento sobre o produto',
    name: 'Fulano de tal',
    photo: userPhoto,
  },
  {
    id: 2,
    text: 'Aqui vai um depoimento sobre o produto',
    name: 'Fulano de tal',
    photo: userPhoto,
  },
  {
    id: 3,
    text: 'Aqui vai um depoimento sobre o produto',
    name: 'Fulano de tal',
    photo: userPhoto,
  },
]

const Testimonials = () => (
  <TestimonialsSection bgColor="ice">
    <Heading>Conheça quem já faz parte da jornada</Heading>
    <Subheading>Faça parte da mudança e transforme sua vida agora.</Subheading>
    <UsersTestimonials>
      {users.map(user => <Testimonial key={user.id} name={user.name} text={user.text} photo={user.photo} />)}
    </UsersTestimonials>
    <Button element={<Link to="/form" />}>INSCREVA-SE AGORA</Button>
  </TestimonialsSection>
)

export default Testimonials
