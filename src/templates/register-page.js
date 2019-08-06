import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from '../components/common/Section'
import Button from '../components/common/Button'
import Layout from '../components/Layout'
import Steps from '../components/Steps'
import logo from '../img/logo.png'
import media from '../theme/media'
import useRegisterPage from '../hooks/useRegisterPage'

function encode(data) {
  const formData = new FormData()

  Object.keys(data).forEach((d, key) => {
    formData.append(key, d)
  })

  return formData
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const Register = styled(Section)`
  height: 100vh;
`

const Logo = styled.img`
  width: 190px;
  height: auto;
  ${media.xs`
    width: 120px;
  `};
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  ${media.xs`
    font-size: 22px;
    max-width: 240px;
    margin: 0 auto 20px;
  `};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.regular};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 35px;
  max-width: 400px;
  line-height: 1.6;
`

const EmailError = styled.span`
  font-size: ${({ theme }) => theme.font.size.regular};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: #ab3e3e;
  ${media.xs`
    font-size: ${({ theme }) => theme.font.size.regular};
  `};
`

const Form = styled.form`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Label = styled.label``
const Input = styled.input`
  background: transparent;
  text-align: center;
  display: block;
  width: 300px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkText};
  color: ${({ theme }) => theme.colors.ice};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  padding: 12px 24px;
  margin-bottom: 35px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 16px;
  }
  ${media.xs`
    width: 230px;
    font-size: 15px;
  `};
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #000 inset !important;
  }

  :-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.ice} !important;
  }

  :active,
  :focus {
    outline: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.darkText};
  }
`

const RegisterButton = styled(Button)`
  width: 480px;
  padding: 14px;
  margin-bottom: 25px;
  span {
    font-size: 16px;
  }
`
const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  iframe {
    margin-bottom: 50px;
    ${media.xs`
      width: 100vw;
      height: auto;
    `};
  }
`

const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const RegisterForm = () => {
  const { firstStep, secondStep, thirdStep } = useRegisterPage()
  const [step, setStep] = useState(3)
  const [formFields, setFormField] = useState({
    nome: '',
    email: '',
    celular: '',
  })
  const [isEmailValid, setIsEmailValid] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    let isFormValid = true
    const isEmail = validateEmail(formFields.email)
    setIsEmailValid(isEmail)
    if (!isEmail) {
      return
    }

    if (
      Object.values(formFields).forEach(value => {
        if (!value) {
          isFormValid = false
        }
      })
    )
      if (!isFormValid) {
        return
      }
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formFields,
      }),
    })
      .then(() => setStep(2))
      .catch(error => console.error(error))
  }

  function handleFieldChange(target) {
    setFormField(fields => ({
      ...fields,
      [target.name]: target.value,
    }))
  }

  function renderForm() {
    return (
      <Form
        name="Formulario Novo - FarmcyAcademy"
        method="post"
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="nome" hidden>
          Nome
        </Label>
        <Input
          placeholder="Nome"
          type="text"
          name="nome"
          value={formFields.nome}
          onChange={({ target }) => handleFieldChange(target)}
          required
        />
        <Label htmlFor="email" hidden>
          Email
        </Label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formFields.email}
          onChange={({ target }) => handleFieldChange(target)}
          required
        />
        <Label htmlFor="celular" hidden>
          Celular
        </Label>
        <Input
          placeholder="Celular"
          type="text"
          name="celular"
          value={formFields.celular}
          onChange={({ target }) => handleFieldChange(target)}
          required
        />
        <RegisterButton type="submit">{firstStep.buttonText}</RegisterButton>
      </Form>
    )
  }

  function renderVideo() {
    return (
      <VideoSection>
        <iframe
          width="560"
          height="315"
          title="Youtube Urban Farmcy"
          src={`https://www.youtube.com/embed/${secondStep.linkYT}?controls=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <RegisterButton onClick={() => setStep(3)}>{secondStep.buttonText}</RegisterButton>
      </VideoSection>
    )
  }

  function renderSuccess() {
    return (
      <Success>
        <Description>{thirdStep.text}</Description>
        <RegisterButton
          element="a"
          href="https://pay.hotmart.com/N14071437L?off=dicdq4lw&checkoutMode=10&bid=1562718927033"
        >
          {thirdStep.buttonText}
        </RegisterButton>
        <RegisterButton
          element="a"
          type="secondary"
          href="https://pay.hotmart.com/N14071437L?off=kbvq445x&checkoutMode=10"
        >
          {thirdStep.buttonTextSecondary}
        </RegisterButton>
      </Success>
    )
  }

  function renderTitle() {
    switch (step) {
      case 1:
        return firstStep.title
      case 2:
        return secondStep.title
      default:
        return thirdStep.title
    }
  }

  const steps = {
    1: renderForm(),
    2: renderVideo(),
    3: renderSuccess(),
  }
  return (
    <Layout noFooter>
      <Register bgColor="darkest">
        <Row center="xs">
          <Col xs={12} md={4}>
            <Row center="xs">
              <Col xs={12}>
                <Link to="/">
                  <Logo src={logo} alt="Logo" />
                </Link>
              </Col>
            </Row>
            <Row center="xs" middle="xs">
              <Col xs={12}>
                <Steps step={step} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Title>{renderTitle()}</Title>
              </Col>
            </Row>
            {!isEmailValid ? (
              <Row>
                <Col xs={12}>
                  <EmailError>*Endereço de email inválido.</EmailError>
                </Col>
              </Row>
            ) : null}

            <Row center="xs">
              <Col xs={12}>{steps[step]}</Col>
            </Row>
          </Col>
        </Row>
      </Register>
    </Layout>
  )
}

export default RegisterForm
