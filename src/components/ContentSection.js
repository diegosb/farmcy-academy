import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from './common/Section'
import SectionTitle from './common/SectionTitle'
import Heading from './common/Heading'
import Subheading from './common/Subheading'
import mockPhoto from '../img/alexatala.png'
import arrowRight from '../img/icons/arrow-right.svg'
import Products from './common/Products'

const ContentSection = styled(Section)`
  padding-bottom: 80px;
`

const SeeMore = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  a {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.light};
    color: ${({ theme }) => theme.colors.lightText};
    img {
      margin-left: 8px;
    }
    :focus,
    :active,
    :hover {
      color: ${({ theme }) => theme.colors.lightText};
      text-decoration: none;
      outline: none;
    }
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

const Content = () => (
  <ContentSection id="#conteudo" bgColor="ice">
    <SectionTitle>Conteúdo</SectionTitle>
    <Heading>O conhecimento de grandes autoridades a serviço da sua saúde.</Heading>
    <Subheading>Conteúdos exclusivos e novos especialistas toda semana</Subheading>
    <Products images={images} title="Nossos especialistas" />
    <SeeMore>
      <Link to="/especialistas">
        Ver mais <img src={arrowRight} alt="Ver mais" />
      </Link>
    </SeeMore>
    <Products images={images} title="Nossos cursos" max={4} />
    <SeeMore>
      <Link to="/cursos">
        Ver mais <img src={arrowRight} alt="Ver mais" />
      </Link>
    </SeeMore>
  </ContentSection>
)

export default Content
