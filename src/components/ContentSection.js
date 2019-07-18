import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../theme/media'

import Section from './common/Section'
import SectionTitle from './common/SectionTitle'
import Heading from './common/Heading'
import Subheading from './common/Subheading'
import PhotoLink from './common/PhotoLink'
import mockPhoto from '../img/alexatala.png'

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
    `} > div {
    margin-bottom: 40px;
  }
`

const images = [
  {
    id: 1,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 2,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 3,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 4,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 5,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 6,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 7,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
  {
    id: 8,
    title: 'Alex Atala',
    subtitle: 'Restaurante D.O.M.',
    imageInfo: {
      image: mockPhoto,
      alt: 'Alex Atala',
    },
  },
]

const ContentSection = () => (
  <Section id="#conteudo">
    <SectionTitle>Conteúdo</SectionTitle>
    <Heading>O conhecimento de grandes autoridades a serviço da sua saúde.</Heading>
    <Subheading>Conteúdos exclusivos e novos especialistas toda semana</Subheading>
    <TypeSection>
      <TypeHeader>Nossos especialistas</TypeHeader>
      <Links>
        {images.map(img => (
          <PhotoLink key={img.id} title={img.title} subtitle={img.subtitle} imageInfo={img.imageInfo} />
        ))}
      </Links>
    </TypeSection>
    <TypeSection>
      <TypeHeader>Nossos cursos</TypeHeader>
      <Links>
        {images.map(img => (
          <PhotoLink key={img.id} title={img.title} subtitle={img.subtitle} imageInfo={img.imageInfo} />
        ))}
      </Links>
    </TypeSection>
  </Section>
)
ContentSection.propTypes = {}
ContentSection.defaultProps = {}

export default ContentSection
