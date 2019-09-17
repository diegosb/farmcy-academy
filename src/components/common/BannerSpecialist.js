import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
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

const BannerSpecialist = ({ buttonText, secondaryTitle, title }) => (
  <BannerSection bgColor="darkest">
    <Text>{title}</Text>
    <SubText>{secondaryTitle}</SubText>
    <Button element={<Link to="/registro" />}>{buttonText}</Button>
  </BannerSection>
)

BannerSpecialist.propTypes = {
  buttonText: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BannerSpecialist
