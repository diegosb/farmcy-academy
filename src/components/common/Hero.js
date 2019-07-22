import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'

import Container from './Container'
import Button from './Button'
import Header from './Header'
import arrow from '../../img/arrow-down.svg'
import media from '../../theme/media'
import { MainHeroText, CTAText } from './typography'

const HeroSection = styled.section`
  display: flex;
  min-height: 98vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkest};
  position: relative;
  overflow: hidden;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  background-image: ${({ bgImage }) =>
    `url(${bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
  ${media.xs`
    text-align: center;
    min-height: 100vh;
    padding-top: 20px;
    background-position-y: 20%;
    padding-bottom: 80px;
    background-size: 140%;
    background-image: ${({ bgImageMobile }) =>
      `url(${bgImageMobile.childImageSharp
        ? bgImageMobile.childImageSharp.fluid.src
        : bgImageMobile})`};  
      > div > .row {
        flex-grow: 1;
        align-items: flex-end;
      }
  `};
  ${media.xxs`
    min-height: 130vh;
  `};
  h1 {
    margin-bottom: 40px;
  }
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

const Hero = ({ bgImage, bgImageMobile, title, buttonText, callActionSmall, callActionBig }) => {
  return (
    <HeroSection bgImage={bgImage} bgImageMobile={bgImageMobile}>
      <Container css="display: flex; flex-direction: column; justify-content: space-between">
        <Header withLogin />
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12} sm={7}>
                <MainHeroText>{title}</MainHeroText>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={5}>
                <CTAText callActionSmall={callActionSmall} callActionBig={callActionBig} />
              </Col>
            </Row>
            <Button element={<Link to="registro" />}>{buttonText}</Button>
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
