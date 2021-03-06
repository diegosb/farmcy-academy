import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Container from './common/Container'
import { Heading } from './common/typography'
import Button from './common/Button'
import media from '../theme/media'
import { HTMLContent } from './Content'

const MemberSection = styled(BackgroundImage)`
  padding: 60px 0 120px;
  background-position: center;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.lightDark};
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${media.xs`
      padding: 40px 0;
  `};
`

const TextInfo = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.25;
  text-align: center;
  margin: 30px auto 150px;
  max-width: 900px;
  p {
    margin-bottom: 30px;
  }
  ${media.xs`
    font-size: 16px;
    margin: 30px auto;
    line-height: 1.4;
    p {
      margin-bottom: 20px;
    }
  `};
`

const Member = ({ bgImage, title, description, buttonText, titleCTA }) => (
  <MemberSection Tag="section" fluid={bgImage.childImageSharp.fluid}>
    <Container>
      <Heading color="white">{title}</Heading>
      <TextInfo>
        <HTMLContent content={description} />
      </TextInfo>
      <Heading color="white">{titleCTA}</Heading>
      <Button element={<Link to="/registro" />} disabled>
        {buttonText}
      </Button>
    </Container>
  </MemberSection>
)

export default Member
