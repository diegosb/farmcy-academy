import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from './common/Section'
import { Heading } from './common/typography'
import Button from './common/Button'
import media from '../theme/media'
import { HTMLContent } from './Content'

const MemberSection = styled(Section)`
  padding: 60px 0 120px;
  background-position: center;
  background-size: cover;
  background-image: ${({ bgImage }) =>
    `url(${bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
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
  color: ${({ theme }) => theme.colors.darkText};
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
    p {
      margin-bottom: 20px;
    }
  `};
`

const Member = ({ bgImage, title, description, buttonText, textAboveButton }) => (
  <MemberSection bgImage={bgImage} bgColor="lightDark">
    <Heading color="white">{title}</Heading>
    <TextInfo>
      <HTMLContent content={description} />
    </TextInfo>
    <Heading color="white">{textAboveButton}</Heading>
    <Button element={<Link to="/registro" />}>{buttonText}</Button>
  </MemberSection>
)

export default Member
