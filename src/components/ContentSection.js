import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from './common/Section'
import { SectionTitle, Heading, Subheading } from './common/typography'
import mockPhoto from '../img/ativo-9.png'
import mockPhoto2 from '../img/ativo-69.png'
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

const imagesSpecialist = [
  {
    id: 1,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 2,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 3,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 4,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 5,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 6,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 7,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
  {
    id: 8,
    title: 'Walter Willet',
    subtitle: 'Descrição especialista',
    imageInfo: {
      image: mockPhoto,
      alt: 'Walter Willet',
    },
  },
]

const imagesCourses = [
  {
    id: 1,
    title: 'Curso 01',
    subtitle: 'Descrição curso',
    imageInfo: {
      image: mockPhoto2,
      alt: 'Curso 01',
    },
  },
  {
    id: 2,
    title: 'Curso 02',
    subtitle: 'Descrição curso',
    imageInfo: {
      image: mockPhoto2,
      alt: 'Curso 02',
    },
  },
  {
    id: 3,
    title: 'Curso 03',
    subtitle: 'Descrição curso',
    imageInfo: {
      image: mockPhoto2,
      alt: 'Curso 03',
    },
  },
  {
    id: 4,
    title: 'Curso 04',
    subtitle: 'Descrição curso',
    imageInfo: {
      image: mockPhoto2,
      alt: 'Curso 04',
    },
  },
]

const Content = () => (
  <ContentSection id="#conteudo" bgColor="ice">
    <SectionTitle>Conteúdo</SectionTitle>
    <Heading>O conhecimento de grandes autoridades a serviço da sua saúde.</Heading>
    <Subheading>Conteúdos exclusivos e novos especialistas toda semana</Subheading>
    <Products images={imagesSpecialist} title="Nossos especialistas" to="/especialista" />
    <SeeMore>
      <Link to="/especialistas">
        Ver mais <img src={arrowRight} alt="Ver mais" />
      </Link>
    </SeeMore>
    <Products images={imagesCourses} title="Nossos cursos" max={4} to="/curso" />
    <SeeMore>
      <Link to="/cursos">
        Ver mais <img src={arrowRight} alt="Ver mais" />
      </Link>
    </SeeMore>
  </ContentSection>
)

export default Content
