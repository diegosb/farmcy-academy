import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Container from '../components/common/Container'
import Layout from '../components/Layout'
import Button from '../components/common/Button'
import logo from '../img/logo.png'
import { HTMLContent } from '../components/Content'
import media from '../theme/media'

const Logo = styled.img`
  margin-bottom: 50px;
`

const LandingSection = styled.section`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ bgImage }) =>
    `url(${bgImage && bgImage.childImageSharp ? bgImage.childImageSharp.fluid.src : bgImage})`};
  background-color: #000;
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0;
  overflow-y: auto;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.lightText};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  span,
  small {
    text-align: center;
    color: ${({ theme }) => theme.colors.lightText};
    max-width: 650px;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    > strong {
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  button,
  a {
    > span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
    margin-top: 50px;
  }
`

const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  iframe {
    margin: 50px 0;
    ${media.xs`
      width: 100vw;
      height: auto;
    `};
  }
`

const topo = `
<h2>Já está disponível o primeiro episódio da série gratuita "O Que Você Vai Comer Amanhã"!</h2>
<h2><strong>APERTE O PLAY E ASSISTA AGORA!</strong></h2>
`
const bottom = `
<h3>Esta é apenas o início da jornada que transformará a forma como você se relaciona com o alimento.</h3>
<h3><strong>Dê o próximo passo para encontrar as respostas para suas maiores dúvidas sobre alimentação!</strong></h3>
`

const LandingPage = () => {
  const [page, setPage] = useState(1)

  function renderPageOne() {
    return (
      <Fragment>
        <HTMLContent content={topo} />
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
        </VideoSection>
        <HTMLContent content={bottom} />
        <Button onClick={() => setPage(2)}>CONTINUE SUA JORNADA</Button>
      </Fragment>
    )
  }

  function renderPageTwo() {
    return (
      <Fragment>
        <HTMLContent content={topo} />
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
        </VideoSection>
        <HTMLContent content={bottom} />
        <Button element="a" href="/">
          CONTINUE SUA JORNADA
        </Button>
      </Fragment>
    )
  }

  return (
    <Layout noFooter>
      <LandingSection bgImage={null}>
        <Container>
          <Logo src={logo} alt="Logo" />
          {page === 1 ? renderPageOne() : renderPageTwo()}
        </Container>
      </LandingSection>
    </Layout>
  )
}
LandingPage.propTypes = {}
LandingPage.defaultProps = {}

export default LandingPage
