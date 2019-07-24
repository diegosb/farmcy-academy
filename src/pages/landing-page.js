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

  p {
    font-size: 16px;
    line-height: 1.6;
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

const topo1 = `
<h2>Já está disponível o primeiro episódio da série gratuita "O Que Você Vai Comer Amanhã"!</h2>
<h2><strong>APERTE O PLAY E ASSISTA AGORA!</strong></h2>
`
const bottom1 = `
<h3>Esta é apenas o início da jornada que transformará a forma como você se relaciona com o alimento.</h3>
<h3><strong>Dê o próximo passo para encontrar as respostas para suas maiores dúvidas sobre alimentação!</strong>
`

const topo2 = `
<p>Você acabou de assistir o primeiro episódio da série “O Que Você Vai Comer Amanhã”, mas isso éapenas o início de algo muito maior que estamos construindo para você.</p><p>O fato de você estar aqui, lendo esse texto agora, é sinal que sua busca por conhecimento sobre oassunto está além da média de grande parte dos brasileiros.</p><p>Considere-se um passo a frente, principalmente quando mais da metade da nossa população se encontra na faixa de sobrepeso e obesidade, vivendo rotinas limitadas pelas condições de uma doença que contribui com milhões de mortes anuais no mundo inteiro.</p><p>Seja qual for o seu objetivo, a informação de qualidade é o melhor primeiro passo que você pode dar para iniciar uma mudança na sua própria vida, ou na das pessoas que estão do seu lado.</p><p>E é por isso que queremos te acompanhar nesses próximos passos ecriar a qualidade de vida que você sempre desejou.</p><p>Aprenda o que há de mais atual em saúde e alimentação com especialistas do mundo inteiro.</p><p>Seja qual for a sua dúvida, reunimos as respostas de grandes autoridades no assunto em um só lugar.</p>
`
const bottom2 = `
<p>Você ja experimentou o potencial máximo da sua saúde?</p><p>Quais os pilares da sua vida que precisam estar alinhados para uma saúde próspera e acima da média?</p><p>A mudança que você sempre desejou pra sua vida está a poucos cliques de ser iniciada.</p>
`

const LandingPage = () => {
  const [page, setPage] = useState(1)

  function renderPageOne() {
    return (
      <Fragment>
        <HTMLContent content={topo1} />
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
        <HTMLContent content={bottom1} />
        <Button onClick={() => setPage(2)}>CONTINUE SUA JORNADA</Button>
      </Fragment>
    )
  }

  function renderPageTwo() {
    return (
      <Fragment>
        <HTMLContent content={topo2} />
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
        <HTMLContent content={bottom2} />
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

export default LandingPage
