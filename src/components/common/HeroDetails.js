import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import media from '../../theme/media'
import Container from './Container'
import Button from './Button'
import Header from './Header'
import { MainHeroText, CTAText } from './typography'

const HeroSection = styled(BackgroundImage)`
  background-color: ${({ theme }) => theme.colors.darkest};
  display: flex;
  min-height: 98vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0 100px;

  ${media.xs`
    min-height: 100vh;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
    ::before {
      background-position-y: 70px !important;
      background-size: 175% !important;
    }
  `};
  ${media.xxs`
    min-height: 120vh;
  `};
  ::after {
    z-index: 0;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(transparent, #000);
  }
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
  // bgImageMobile,
  titleLanding,
  curriculum,
  buttonText,
  callActionSmall,
  callActionBig,
}) => (
  <HeroSection Tag="section" fluid={bgImage.childImageSharp.fluid}>
    <Container css="display: flex; flex-direction: column; justify-content: space-between; z-index: 1">
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
