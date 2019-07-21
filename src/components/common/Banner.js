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
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    ${media.xs`
      justify-content: center;
      flex-direction: column;
    `};
  }
  ${media.xs`
      padding: 30px 0;
    `};
`

const Text = styled.h3`
  font-size: 42px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  ${media.xs`
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    width: 85vw;
  `};
`

const Banner = () => (
  <BannerSection bgColor="dark">
    <Text>Tenha acesso ilimitado por 7 dias grátis.</Text>
    <Button element={<Link />} to="/registro">
      EXPERIMENTE AGORA
    </Button>
  </BannerSection>
)

Banner.propTypes = {}
Banner.defaultProps = {}

export default Banner
