import React, { Fragment, useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Section from '../../components/common/Section'
import Button from '../../components/common/Button'
import Layout from '../../components/Layout'
import Steps from '../../components/Steps'
import logo from '../../img/logo.png'
import media from '../../theme/media'

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
  text-align: center;
  margin-bottom: 35px;
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

const RegisterForm = () => {
  const [step, setStep] = useState(1)
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
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
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
        <RegisterButton type="submit">Continuar</RegisterButton>
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
          src="https://www.youtube.com/embed/l4h7NQO-gz4?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <RegisterButton onClick={() => setStep(3)}>Continuar</RegisterButton>
      </VideoSection>
    )
  }

  function renderSuccess() {
    return (
      <Fragment>
        <Description>
          Sua assinatura mensal será ativada automaticamente após esse período com a cobrança de
          R$57,00. Caso não queira se tornar um membro da Farmcy Academy, antes do fim dos 7 dias
          grátis faça sua solicitação em nosso site e seu cancelamento será realizado
          automaticamente.
        </Description>
        <RegisterButton
          element="a"
          href="https://pay.hotmart.com/N14071437L?off=dicdq4lw&checkoutMode=10&bid=1562718927033"
        >
          OBTER 7 DIAS GRÁTIS
        </RegisterButton>
      </Fragment>
    )
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
                <Title>
                  {step === 3 ? 'Falta pouco para liberar os seus 7 dias grátis' : 'Crie sua conta'}
                </Title>
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
