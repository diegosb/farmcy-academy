import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import media from '../../theme/media'
import Container from './Container'
import Button from './Button'
import Header from './Header'
import { MainHeroText, CTAText } from './typography'

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkest};
  display: flex;
  min-height: 98vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 50px 0 100px;
  background-image: ${({ bgImage }) =>
    `url(${bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
  ${media.xs`
    min-height: 100vh;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
    background-size: 150%;
    background-image: ${({ bgImageMobile }) =>
      `url(${bgImageMobile.childImageSharp
        ? bgImageMobile.childImageSharp.fluid.src
        : bgImageMobile})`};  
  `};
  ${media.xxs`
    min-height: 120vh;
  `};
`

const Description = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.8;
  text-align: left;
  max-width: 670px;
  ${media.xs`
    font-size: ${({ theme }) => theme.font.size.small};
    text-align: center;
    max-width: 90vw;
    padding-bottom: 20px;
  `};
`

const HeroDetails = ({
  bgImage,
  bgImageMobile,
  titleLanding,
  curriculum,
  buttonText,
  callActionSmall,
  callActionBig,
}) => (
  <HeroSection bgImage={bgImage} bgImageMobile={bgImageMobile}>
    <Container css="display: flex; flex-direction: column; justify-content: space-between">
      <Header withLogin />
      <Row bottom="xs">
        <Col md={6}>
          <MainHeroText>{titleLanding}</MainHeroText>
          <Description>{curriculum}</Description>
        </Col>
        <Col md={6}>
          <Row center="xs" end="sm">
            <Col xs={12}>
              <CTAText callActionSmall={callActionSmall} callActionBig={callActionBig} />
            </Col>
            <Button element={<Link to="/registro" />}>{buttonText}</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  </HeroSection>
)
HeroDetails.propTypes = {
  bgImage: PropTypes.shape({}).isRequired,
  bgImageMobile: PropTypes.shape({}).isRequired,
  titleLanding: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  callActionSmall: PropTypes.string.isRequired,
  callActionBig: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default HeroDetails
