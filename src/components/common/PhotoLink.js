import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import arrow from '../../img/icons/next.svg'

const Box = styled.div`
  width: 270px;
  height: 180px;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.colors.darkText};
  background-color: ${({ theme }) => theme.colors.white};
  object-fit: contain;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  }
`

const Image = styled(PreviewCompatibleImage)`
  height: 100%;
  width: auto;
`

const Text = styled.div`
  position: absolute;
  left: 15px;
  bottom: 12px;
`

const Title = styled.h5`
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.xsmall};
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`

const NextIcon = styled.img`
  position: absolute;
  bottom: 15px;
  right: 15px;
`

const PhotoLink = ({ imageInfo, title, subtitle }) => (
  <Box>
    <Image imageInfo={imageInfo} />
    <Text>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Text>
    <NextIcon src={arrow} alt="Ver detalhes" />
  </Box>
)

PhotoLink.propTypes = {
  imageInfo: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default PhotoLink
