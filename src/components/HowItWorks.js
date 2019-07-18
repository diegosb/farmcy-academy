import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import Section from './common/Section'
import SectionTitle from './common/SectionTitle'
import Heading from './common/Heading'
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
    text-align: center;
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
  atualizacao: {
    title: 'Atualização constante',
    text:
      'A cada semana, um novo conteúdo para você estudar, aprender e se inspirar. Já são mais de 100 horas de conteúdo gravado.',
    icon: refresh,
  },
  organizacao: {
    title: 'Organização do aprendizado',
    text: 'Conteúdo estruturado e organizado com indicadores que facilitam o estudo e a navegação.',
    icon: playlist,
  },
  especialistas: {
    title: 'Respostas de especialistas',
    text: 'Seja qual for a sua dúvida, reunimos as respostas de grandes autoridades no assunto em um só lugar.',
    icon: especialistas,
  },
  qualidade: {
    title: 'Qualidade cinematográfica',
    text: 'Produções em alta qualidade trazem prazer e inspiração para o aprendizado',
    icon: qualidade,
  },
  personalizado: {
    title: 'Aprendizado personalizado',
    text: 'Conhecimento na palma da sua mão. Estude no seu ritmo, do seu jeito, quando e onde quiser.',
    icon: aprendizado,
  },
  diversidade: {
    title: 'Diversidade de pontos de vista',
    text:
      'Informação sem restrição, conhecimento de sobra para que você faça suas melhores escolhas, de acordo com os seus valores.',
    icon: diversidade,
  },
}

const HowItWorks = () => (
  <HowItWorkSection bgColor="lightDark">
    <SectionTitle color="darkText">Como funciona</SectionTitle>
    <Heading color="white">Ao assinar a Farmcy Academy, você receberá instantaneamente:</Heading>
    <Hexagon data={data} />
    <Infos>
      <InfoBox>
        <h5>{data.organizacao.title}</h5>
        {data.organizacao.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.organizacao.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{data.atualizacao.title}</h5>
        {data.atualizacao.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.atualizacao.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{data.especialistas.title}</h5>
        {data.especialistas.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.especialistas.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{data.qualidade.title}</h5>
        {data.qualidade.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.qualidade.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{data.diversidade.title}</h5>
        {data.diversidade.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.diversidade.icon} alt="" />
      </Circle>
      <InfoBox>
        <h5>{data.personalizado.title}</h5>
        {data.personalizado.text}
      </InfoBox>
      <Circle isMobile>
        <img src={data.personalizado.icon} alt="" />
      </Circle>
    </Infos>
  </HowItWorkSection>
)

export default HowItWorks
