import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from './common/Section'
import { SectionTitle, Heading, Subheading } from './common/typography'
import arrowRight from '../img/icons/arrow-right.svg'
import Products from './common/Products'
import useAllSpecialists from '../hooks/useSpecialists'

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

const Content = ({ heading, headingCourses, headingSpecialist, subHeading, title }) => {
  const specialists = useAllSpecialists()
  return (
    <ContentSection id="#conteudo" bgColor="ice">
      <SectionTitle>{title}</SectionTitle>
      <Heading>{heading}</Heading>
      <Subheading>{subHeading}</Subheading>
      <Products images={specialists} title={headingSpecialist} to="/especialista" />
      <SeeMore>
        <Link to="/especialistas">
          Ver mais <img src={arrowRight} alt="Ver mais" />
        </Link>
      </SeeMore>
      <Products images={specialists} title={headingCourses} max={4} to="/curso" />
      <SeeMore>
        <Link to="/cursos">
          Ver mais <img src={arrowRight} alt="Ver mais" />
        </Link>
      </SeeMore>
    </ContentSection>
  )
}

export default Content
