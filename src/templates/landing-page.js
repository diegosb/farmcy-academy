import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import YouTube from 'react-youtube'
import BackgroundImage from 'gatsby-background-image'

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
  background-color: ${({ bgColor }) => bgColor || '#000'};
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0;
  overflow-y: auto;
  overflow-x: hidden;
  color: ${({ theme, letterColor }) => letterColor || theme.colors.lightText};
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
    color: ${({ theme, letterColor }) => letterColor || theme.colors.lightText};
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
    margin-top: 40px;
    > span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.font.weight.bold};
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
    buttonSecondaryPg02,
    buttonSecondaryLink,
    descriptionPage,
    textAbovePg1,
    textAbovePg2,
    textBelowPg01,
    textBelowPg02,
    titlePage,
    youtubePg01,
    youtubePg02,
    bgImage,
    bgColor,
    letterColor,
  } = landing

  function renderPageOne() {
    const opts = {
      height: '315',
      width: '560',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        rel: 0,
        showinfo: 0,
      },
    }

    function onEventChange() {
      // console.log(e)
    }

    return (
      <Fragment>
        <HTMLContent content={textAbovePg1} />
        {youtubePg01 ? (
          <VideoSection>
            <YouTube
              videoId={youtubePg01}
              opts={opts}
              onPause={onEventChange}
              onEnd={onEventChange}
              onError={onEventChange}
              onStateChange={onEventChange}
            />
          </VideoSection>
        ) : null}
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
        {youtubePg02 ? (
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
        ) : null}
        <HTMLContent content={textBelowPg02} />
        <Button element="a" href={buttonLink}>
          {buttonPg02}
        </Button>
        {buttonSecondaryPg02 && buttonSecondaryLink ? (
          <Button element="a" href={buttonSecondaryLink} type="secondary">
            {buttonSecondaryPg02}
          </Button>
        ) : null}
      </Fragment>
    )
  }

  return (
    <Layout noFooter setDescription={descriptionPage} setTitle={titlePage}>
      {bgImage ? (
        <LandingSection
          as={BackgroundImage}
          Tag="section"
          fluid={bgImage ? bgImage.childImageSharp.fluid : null}
          bgColor={bgColor}
          letterColor={letterColor}
        >
          <Container>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
            {page === 1 ? renderPageOne() : renderPageTwo()}
          </Container>
        </LandingSection>
      ) : (
        <LandingSection bgColor={bgColor} letterColor={letterColor}>
          <Container>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
            {page === 1 ? renderPageOne() : renderPageTwo()}
          </Container>
        </LandingSection>
      )}
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
        buttonSecondaryPg02
        buttonSecondaryLink
        bgColor
        letterColor
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
