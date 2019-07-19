import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import Container from './common/Container'
import Button from './common/Button'
import Header from './common/Header'
import arrow from '../img/arrow-down.svg'
import media from '../theme/media'

const HeroSection = styled.section`
  display: flex;
  min-height: 98vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  padding-top: 50px;
  background-image: ${({ bgImage }) => `url(${bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
  ${media.xs`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 60px;
    background-image: ${({ bgImageMobile }) =>
      `url(${bgImageMobile.childImageSharp ? bgImageMobile.childImageSharp.fluid.src : bgImageMobile})`};  
      > div > .row {
        flex-grow: 1;
        align-items: flex-end;
      }
  `};
`

export const MainText = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
  margin-bottom: 60px;
  ${media.xs`
      font-size: ${({ theme }) => theme.font.size.large};
      margin-bottom: 30px;
  `};
`

const Bottom = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background: #fff;
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: -20px;
    display: flex;
    justify-content: center;
    transform: rotate(45deg);
    cursor: pointer;
    img {
      transform: rotate(-45deg);
      margin-bottom: 15px;
      margin-right: 15px;
    }
  }
`

const CTAText = styled(MainText)`
  font-size: ${({ theme }) => theme.font.size.medium};
  margin-top: 8vh;
  margin-bottom: 20px;
  span {
    display: block;
    font-size: ${({ theme }) => theme.font.size.xxlarge};
  }
  ${media.xs`
    font-size: 17px;
    text-align: center;
    span {
      font-size: ${({ theme }) => theme.font.size.large};
    }
  `};
`

const Hero = ({ bgImage, bgImageMobile, title, buttonText, callActionSmall, callActionBig }) => {
  return (
    <HeroSection bgImage={bgImage} bgImageMobile={bgImageMobile}>
      <Container css="display: flex; flex-direction: column; justify-content: space-between">
        <Header withLogin />
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12} sm={7}>
                <MainText>{title}</MainText>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={5}>
                <CTAText>
                  {callActionSmall}
                  <span>{callActionBig}</span>
                </CTAText>
              </Col>
            </Row>
            <Button to="/form">{buttonText}</Button>
          </Col>
        </Row>
        <Bottom>
          <a href="#conteudo">
            <img src={arrow} alt="Mais conteúdo" />
          </a>
        </Bottom>
      </Container>
    </HeroSection>
  )
}

Hero.propTypes = {
  bgImage: PropTypes.shape({}),
  bgImageMobile: PropTypes.shape({}),
  title: PropTypes.string,
  buttonText: PropTypes.string,
  callActionSmall: PropTypes.string,
  callActionBig: PropTypes.string,
}

Hero.defaultProps = {
  bgImage: {},
  bgImageMobile: {},
  title: '',
  buttonText: '',
  callActionSmall: '',
  callActionBig: '',
}

export default Hero
