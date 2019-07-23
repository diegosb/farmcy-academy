import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'

import media from '../../theme/media'
import Section from './Section'
import Button from './Button'
import { HTMLContent } from '../Content'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const CourseSection = styled(Section)`
  color: ${({ theme }) => theme.colors.text};
  padding: 140px 0;
  ${media.xs`
     padding: 30px 0 50px;
  `};
`

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 70px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding-bottom: 30px;
  ${media.xs`
     padding: 0 0 10px;
     font-size: ${({ theme }) => theme.font.size.medium};
  `};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.4;
  text-align: left;
  max-width: 450px;
  ${media.xs`
     padding: 0 0 30px;
     font-size: ${({ theme }) => theme.font.size.regular};
     line-height: 1.6;
     text-align: center;
  `};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${media.xs`
    max-width: 90vw;
  `};
`

const ListItem = styled.li`
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${media.xs`
     max-width: 80vw;
     margin: 0 auto 30px;
    `};
  img {
    width: 26px;
    height: 26px;
    margin-right: 30px;
    ${media.xs`
      margin-right: 20px;
      width: 20px;
    height: 20px;
    `};
  }
  span {
    font-size: 20px;
    line-height: 1.4;
    font-weight: ${({ theme }) => theme.font.weight.light};
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    ${media.xs`
      font-size: 16px;
    `};
  }
`

const CourseInfo = ({ name, description, details }) => (
  <CourseSection>
    <Row center="xs" start="sm">
      <Col xs={12}>
        <Name>{name}</Name>
      </Col>
    </Row>
    <Row center="xs" start="sm">
      <Col xs={12} md={6}>
        <Description>
          <HTMLContent content={description} />
        </Description>
      </Col>
      <Col xs={12} md={6}>
        <List>
          {details.map(({ icon, text }) => (
            <ListItem key={text}>
              <PreviewCompatibleImage
                imageInfo={{
                  alt: 'Icone detalhes',
                  image: icon,
                }}
              />
              <span>{text}</span>
            </ListItem>
          ))}
        </List>
        <Button element={<Link to="/registro" />}>Acessar agora</Button>
      </Col>
    </Row>
  </CourseSection>
)
CourseInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
}
CourseInfo.defaultProps = {
  name: 'Dr. Walter Willet',
  description:
    'Aqui vai um texto não muito grande vendendo o conteúdo que está na plataforma e que a pessoa vai poder acessar assim que assinar.',
}

export default CourseInfo
