import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from './common/Section'
import Heading from './common/Heading'
import bgImage from '../img/BG_ImpactoSocial.png'
import Button from './common/Button'
import media from '../theme/media'

const MemberSection = styled(Section)`
  padding: 60px 0 120px;
  background-position: center;
  background-size: cover;
  background-image: ${({ bgImage }) => `url(${bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
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

const TextInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.25;
  text-align: center;
  margin: 30px auto 150px;
  max-width: 900px;
  p {
    margin-bottom: 30px;
  }
  ${media.xs`
    font-size: 16px;
    margin: 30px auto;
    p {
      margin-bottom: 20px;
    }
  `};
`

const Member = () => (
  <MemberSection bgImage={bgImage} bgColor="lightDark">
    <Heading color="white">Uma decisão de impacto social.</Heading>
    <TextInfo>
      <p>
        Parte da sua mensalidade é destinada para a produção de uma série totalmente gratuita, que tem a missão de levar
        conhecimento e informação sobre alimentação e saúde para todos os brasileiros.
      </p>
      <p>
        Além de melhorar a sua qualidade de vida, você possibilita que muitas outras pessoas também adquiram
        conhecimento para transformar suas vidas.
      </p>
      <p>Até agora, já são mais de 40 mil pessoas impactadas.</p>
    </TextInfo>
    <Heading color="white">Seja um membro e financie essa causa</Heading>
    <Button element={<Link to="/form" />}>INSCREVA-SE AGORA</Button>
  </MemberSection>
)
Member.propTypes = {}
Member.defaultProps = {}

export default Member
