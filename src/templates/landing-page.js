import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

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
    :last-child {
      margin-top: 50px;
    }
    :focus {
      outline: none;
    }
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

const LandingPage = ({ data }) => {
  const { frontmatter: landing } = data.markdownRemark
  const [page, setPage] = useState(1)
  const {
    buttonLink,
    buttonPg01,
    buttonPg02,
    descriptionPage,
    textAbovePg1,
    textAbovePg2,
    textBelowPg01,
    textBelowPg02,
    titlePage,
    youtubePg01,
    youtubePg02,
    bgImage,
  } = landing

  function renderPageOne() {
    return (
      <Fragment>
        <HTMLContent content={textAbovePg1} />
        <VideoSection>
          <iframe
            width="560"
            height="315"
            title="Youtube Urban Farmcy"
            src={`https://www.youtube.com/embed/${youtubePg01}?controls=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoSection>
        <HTMLContent content={textBelowPg01} />
        <Button
          onClick={() => {
            setPage(2)
            window.scrollTo(0, 0)
          }}
        >
          {buttonPg01}
        </Button>
      </Fragment>
    )
  }

  function renderPageTwo() {
    return (
      <Fragment>
        <HTMLContent content={textAbovePg2} />
        <VideoSection>
          <iframe
            width="560"
            height="315"
            title="Youtube Urban Farmcy"
            src={`https://www.youtube.com/embed/${youtubePg02}?controls=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoSection>
        <HTMLContent content={textBelowPg02} />
        <Button element="a" href={buttonLink}>
          {buttonPg02}
        </Button>
      </Fragment>
    )
  }

  return (
    <Layout noFooter setDescription={descriptionPage} setTitle={titlePage}>
      <LandingSection bgImage={bgImage}>
        <Container>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          {page === 1 ? renderPageOne() : renderPageTwo()}
        </Container>
      </LandingSection>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        titlePage
        descriptionPage
        textAbovePg1
        youtubePg01
        textBelowPg01
        buttonPg01
        textAbovePg2
        youtubePg02
        textBelowPg02
        buttonPg02
        buttonLink
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
