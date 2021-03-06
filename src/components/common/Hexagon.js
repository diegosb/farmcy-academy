import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Col, Row } from 'react-flexbox-grid'
import logo from '../../img/CYLogo.png'
import media from '../../theme/media'

function generatePosition(position) {
  const centerPositionY = '-64px'
  const sidesPositionY = '-50px'
  const alignCenterX = `
    left: 50%;
    transform: translateX(-50%);
  `
  switch (position) {
    case 'tc':
      return `
        bottom: ${centerPositionY};
        ${alignCenterX}
      `
    case 'tr':
      return `
        bottom: ${sidesPositionY};
        left: ${sidesPositionY};
      `
    case 'tl':
      return `
        bottom: ${sidesPositionY};
        right: ${sidesPositionY};
      `
    case 'br':
      return `
        top: ${sidesPositionY};
        left: ${sidesPositionY};
      `
    case 'bl':
      return `
        top: ${sidesPositionY};
        right: ${sidesPositionY};
      `

    default:
      return `
          top: ${centerPositionY};
          ${alignCenterX}
        `
  }
}

const HexagonWrapper = styled.div`
  width: 490px;
  height: 490px;
  position: relative;
  margin: 250px auto 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.xs`
    display: none;
  `};
`

const HexagonDraw = styled.div`
  position: relative;
  width: 490px;
  height: 282.9px;
  background-color: ${({ theme }) => theme.colors.lightDark};
  margin: 171.45px 0;
  border-left: solid 6px ${({ theme }) => theme.colors.darkerGrey};
  border-right: solid 6px ${({ theme }) => theme.colors.darkerGrey};
  :before,
  :after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 346.48px;
    height: 346.48px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 65.7588px;
  }

  :before {
    top: -173.2412px;
    border-top: solid 8.4853px ${({ theme }) => theme.colors.darkerGrey};
    border-right: solid 8.4853px ${({ theme }) => theme.colors.darkerGrey};
  }

  :after {
    bottom: -173.2412px;
    border-bottom: solid 8.4853px ${({ theme }) => theme.colors.darkerGrey};
    border-left: solid 8.4853px ${({ theme }) => theme.colors.darkerGrey};
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  height: calc(100% + 50px);
  position: absolute;
  top: -30px;
  left: 0;
  z-index: 99;
  .row {
    width: 100%;
    position: relative;
    margin: 0 0 225px 0;
    height: 200px;
  }
`

export const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.regular};
  padding: 20px 14px;
  width: 268px;
  height: 130px;
  position: relative;
  line-height: 1.15;
  text-align: left;
  h5 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 15px;
    padding: 0 0 10px;
  }
`

export const Circle = styled.div`
  width: 68.5px;
  height: 68.5px;
  border-radius: 50%;
  border: solid 4px ${({ theme }) => theme.colors.lightDark};
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isMobile, position }) =>
    !isMobile &&
    `
    position: absolute;
    z-index: 99;
    ${generatePosition(position)};
  `};
`

const Logo = styled.img`
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ColLeft = styled(Col)`
  position: absolute;
  left: -290px;
`

const ColRight = styled(Col)`
  position: absolute;
  right: -170px;
`

const TopCenter = styled(Col)`
  position: absolute;
  top: -170px;
  left: 21%;
`

const BottomCenter = styled(Col)`
  position: absolute;
  bottom: -90px;
  left: 20%;
`

const Hexagon = ({ boxes, icons }) => (
  <HexagonWrapper>
    <InfoWrapper>
      <Row center="sm">
        <ColLeft sm={4}>
          <InfoBox>
            <h5>{boxes.organizacao.title}</h5>
            {boxes.organizacao.description}
            <Circle position="tl">
              <img src={icons.organizacao.icon} alt="Icone organização" />
            </Circle>
          </InfoBox>
        </ColLeft>
        <TopCenter sm={4}>
          <InfoBox>
            <h5>{boxes.refresh.title}</h5>
            {boxes.refresh.description}
            <Circle position="tc">
              <img src={icons.refresh.icon} alt="Icone atualização" />
            </Circle>
          </InfoBox>
        </TopCenter>
        <ColRight sm={4}>
          <InfoBox>
            <h5>{boxes.atualizacao.title}</h5>
            {boxes.atualizacao.description}
            <Circle position="tr">
              <img src={icons.atualizacao.icon} alt="Icone especialistas" />
            </Circle>
          </InfoBox>
        </ColRight>
      </Row>
      <Row between="sm">
        <ColLeft sm={4}>
          <InfoBox>
            <h5>{boxes.qualidade.title}</h5>
            {boxes.qualidade.description}
            <Circle position="bl">
              <img src={icons.qualidade.icon} alt="Icone qualidade" />
            </Circle>
          </InfoBox>
        </ColLeft>
        <BottomCenter sm={5}>
          <InfoBox>
            <h5>{boxes.especialistas.title}</h5>
            {boxes.especialistas.description}
            <Circle>
              <img src={icons.especialistas.icon} alt="Icone personalizado" />
            </Circle>
          </InfoBox>
        </BottomCenter>
        <ColRight sm={4}>
          <InfoBox>
            <h5>{boxes.diversidade.title}</h5>
            {boxes.diversidade.description}
            <Circle position="br">
              <img src={icons.diversidade.icon} alt="Icone diversidade " />
            </Circle>
          </InfoBox>
        </ColRight>
      </Row>
    </InfoWrapper>
    <HexagonDraw>
      <Logo src={logo} alt="Logo farmcy academy" />
    </HexagonDraw>
  </HexagonWrapper>
)

Hexagon.propTypes = {
  boxes: PropTypes.shape({}).isRequired,
  icons: PropTypes.shape({}).isRequired,
}

export default Hexagon
