import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MainHeroText from './MainHeroText'
import media from '../../../theme/media'

const CTAHeroText = styled(MainHeroText)`
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
      font-size: 33px;
    }
  `};
`

const CTAText = ({ callActionSmall, callActionBig }) => (
  <CTAHeroText>
    {callActionSmall}
    <span>{callActionBig}</span>
  </CTAHeroText>
)

CTAText.propTypes = {
  callActionSmall: PropTypes.string.isRequired,
  callActionBig: PropTypes.string.isRequired,
}
CTAText.defaultProps = {}

export default CTAText
