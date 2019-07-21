import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import Section from './common/Section'
import media from '../theme/media'

const ModuleSection = styled(Section)`
  padding: 100px 0;
  ${media.xs`
    padding: 40px 0 20px;
  `};
`

const ModuleNumber = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.large};
  }
  ${media.xs`
    height: 60px;
    width: 60px;
    span {
      font-size: 20px;
    }
  `};
`
const ModuleTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.4;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  ${media.xs`
    padding-left: 15px;
    font-size: 20px;
  `};
`
const ModuleDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  line-height: 1.6;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  ${media.xs`
    font-size: ${({ theme }) => theme.font.size.regular};
    padding: 25px 0 40px;
  `};
`
const Line = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${({ lastItem }) => (lastItem === 'last' ? 'none' : 'flex')};
  ::before {
    content: '';
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.colors.darkText};
    display: flex;
    position: absolute;
    top: 0;
    left: 60px;
  }
`

const CourseModules = ({ modules }) => (
  <ModuleSection bgColor="footer">
    {modules.map(({ title, description }, index) => (
      <Fragment key={title}>
        <Row middle="xs" center="xs">
          <Col xs={2} md={2}>
            <ModuleNumber>
              <span>{index + 1}</span>
            </ModuleNumber>
          </Col>
          <Col xs={10} md={8}>
            <ModuleTitle>{title}</ModuleTitle>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={0} md={2}>
            <Line lastItem={index === modules.length - 1 ? 'last' : 'none'} />
          </Col>
          <Col xs={12} md={8}>
            <ModuleDescription>{description}</ModuleDescription>
          </Col>
        </Row>
      </Fragment>
    ))}
  </ModuleSection>
)
CourseModules.propTypes = {
  modules: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default CourseModules
