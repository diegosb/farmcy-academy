import React from 'react'
import styled from 'styled-components'

import Section from './common/Section'
import { SectionTitle, Heading } from './common/typography'
import Hexagon, { InfoBox, Circle } from './common/Hexagon'
import refresh from '../img/icons/ico_atualizacaoconstante.svg'
import playlist from '../img/icons/ico_playlist.svg'
import especialistas from '../img/icons/ico_respostasdeespecialistas.svg'
import qualidade from '../img/icons/ico_qualidadecinematografica.svg'
import aprendizado from '../img/icons/ico_aprendizadopersonalizado.svg'
import diversidade from '../img/icons/ico_diversidadedepontosdevista.svg'
import media from '../theme/media'

const HowItWorkSection = styled(Section)`
  padding-bottom: 120px;
  h2 {
    margin-bottom: 50px;
    ${media.xs`
      margin-bottom: 20px;
  `};
  }
  ${media.xs`
    padding-bottom: 30px;
  `};
`

const Infos = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    description-align: center;
    margin-bottom: 18px;
    :last-child {
      margin-bottom: 0;
    }
  }
  ${media.xs`
    display: flex;
  `};
`

const data = {
  refresh: {
    icon: refresh,
  },
  organizacao: {
    icon: playlist,
  },
  atualizacao: {
    icon: especialistas,
  },
  qualidade: {
    icon: qualidade,
  },
  diversidade: {
    icon: aprendizado,
  },
  especialistas: {
    icon: diversidade,
  },
}

const HowItWorks = ({ boxes }) => (
  <HowItWorkSection bgColor="lightDark">
    <SectionTitle color="darkText">Como funciona</SectionTitle>
    <Heading color="white">Ao assinar a Farmcy Academy, você receberá instantaneamente:</Heading>
    <Hexagon icons={data} boxes={boxes} />
    <Infos>
      <InfoBox>
        <h5>{boxes.organizacao.title}</h5>
        {boxes.organizacao.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.organizacao.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{boxes.refresh.title}</h5>
        {boxes.refresh.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.refresh.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{boxes.atualizacao.title}</h5>
        {boxes.atualizacao.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.atualizacao.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{boxes.qualidade.title}</h5>
        {boxes.qualidade.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.qualidade.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{boxes.especialistas.title}</h5>
        {boxes.especialistas.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.especialistas.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{boxes.diversidade.title}</h5>
        {boxes.diversidade.description}
      </InfoBox>
      <Circle isMobile>
        <img src={data.diversidade.icon} alt="" />
      </Circle>
    </Infos>
  </HowItWorkSection>
)

export default HowItWorks
