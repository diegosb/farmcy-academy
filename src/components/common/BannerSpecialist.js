import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Section from './Section'
import Button from './Button'
import media from '../../theme/media'

const BannerSection = styled(Section)`
  padding: 90px 0;
  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 720px;
  }
  ${media.xs`
      padding: 30px 0;
    `};
`

const Text = styled.h3`
  font-size: 42px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${media.xs`
    font-size: 28px;
    margin-bottom: 20px;
    width: 85vw;
  `};
`

const SubText = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkText};
  margin: 30px auto 40px;
  ${media.xs`
    display: none;
  `};
`

const BannerSpecialist = () => (
  <BannerSection bgColor="darkest">
    <Text>Tenha 7 dias grátis de acesso ilimitado a todos os especialistas.</Text>
    <SubText>
      Outras dezenas de especialistas já fazem parte da plataforma Farmcy Academy, e você está a
      poucos cliques de garantir 7 dias de acesso grátis.
    </SubText>
    <Button element={<Link to="/registro" />}>EXPERIMENTE AGORA</Button>
  </BannerSection>
)

export default BannerSpecialist
