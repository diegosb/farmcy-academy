import React from 'react'
import styled from 'styled-components'
import check from '../img/icons/check.svg'
import media from '../theme/media'

const StepsWrapper = styled.div`
  width: 130%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 50px -15%;
  position: relative;
  ${media.xs`
    width: 100%
    margin: 20px auto 50px;
  `};
  ::before {
    position: absolute;
    content: '';
    left: 0;
    height: 1px;
    width: 100%;
    background: ${({ theme, activeStep }) =>
      activeStep > 1 ? theme.colors.primary : theme.colors.darkText};
  }
  ::after {
    position: absolute;
    right: 0;
    content: '';
    height: 1px;
    width: 0%;
    background: ${({ theme, activeStep }) =>
      activeStep > 2 ? theme.colors.primary : theme.colors.darkText};
  }
`

const Step = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: ${({ theme, activeStep, step }) => {
    if (activeStep > step) {
      return theme.colors.primary
    }
    return theme.colors.darkest
  }};
  border: 1px solid
    ${({ theme, activeStep, step }) =>
      step === activeStep || activeStep > step ? theme.colors.primary : theme.colors.darkText}};

  img {
    display: ${({ activeStep, step }) => {
      if (activeStep > step) {
        return 'flex'
      }
      return 'none'
    }};
  }
`

const Steps = ({ step }) => (
  <StepsWrapper activeStep={step} step={1}>
    <Step activeStep={step} step={1}>
      <img src={check} alt="Check" />
    </Step>
    <Step activeStep={step} step={2}>
      <img src={check} alt="Check" />
    </Step>
  </StepsWrapper>
)

export default Steps
