import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import media from '../../theme/media'

const TestomonialBox = styled.div`
  width: 369px;
  height: 227px;
  padding: 25px;
  margin-bottom: 25px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ${media.xs`
    width: 95vw;
    min-height: 227px;
    height: auto;
  `};
`

const Text = styled.p`
  font-size: 15px;
  flex: 1 1 auto;
  width: 100%;
  letter-spacing: 0.3px;
  text-align: left;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const UserPhoto = styled(PreviewCompatibleImage)`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
`

const Username = styled.div`
  h5 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    letter-spacing: 0.4px;
  }
  small {
    font-size: 15px;
    letter-spacing: 0.3px;
  }
`

const Testimonial = ({ text, name, photo }) => (
  <TestomonialBox>
    <Text>{text}</Text>
    <UserInfo>
      <UserPhoto imageInfo={{ image: photo, alt: 'Foto usuário' }} />
      <Username>
        <h5>{name}</h5>
        <small>Membro da Farmcy Academy</small>
      </Username>
    </UserInfo>
  </TestomonialBox>
)
Testimonial.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}

export default Testimonial
