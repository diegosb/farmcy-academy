import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from './common/Container'
import media from '../theme/media'

import logo from '../img/logo.png'
import facebook from '../img/icons/ico_facebook.svg'
import instagram from '../img/icons/ico_instagram.svg'
import mail from '../img/icons/ico_mail.svg'
import youtube from '../img/icons/ico_youtube.svg'

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.footer};
  ${media.xs`
     padding: 20px 0;
  `};
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  a:focus {
    outline: none;
  }
`

const Logo = styled.img`
  width: 255px;
  height: auto;
  ${media.xs`
      display: none;
  `};
`

const A = styled.a`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 1.2;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.footer};
  
  :active,
  :focus,
  :hover {
    color: ${({ theme }) => theme.colors.footer}
    opacity: 0.85;
    text-decoration: none;
    outline: none;
  }

  ${media.xs`
  font-size: ${({ theme }) => theme.font.size.xsmall};
    `};
`

const SocialLinks = styled.div`
  a {
    margin-left: 25px;
  }
  ${media.xs`
      display: none;
  `};
`

const OnlyMobile = styled(Container)`
  > div {
    display: none;
    margin: 0 auto;
    ${media.xs`
      display: flex;
      align-items: center;
      flex-direction: row;
    `};
  }

  p {
    margin: 14px 0 0;
    :not(:last-child) {
      border-right: 1px solid;
    }
    :last-child {
      padding: 0 0 0 10px;
    }
    :first-child {
      padding: 0 10px 0 0;
    }
    :nth-child(2) {
      padding: 0 10px;
    }
  }
`

const LinkTag = ({ children, href }) => (
  <A href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </A>
)

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="Urban Farmcy Logo" />
        </Link>
        <LinkTag href="https://www.urbanfarmcy.com.br">a urban farmcy</LinkTag>
        <LinkTag href="https://farmcyacademy.club.hotmart.com/login">
          plataforma farmcy academy
        </LinkTag>
        <LinkTag href="https://drive.google.com/open?id=1PXCrYKE9OTqSvN1T8frS5133ptiHA4dn">
          termos de uso
        </LinkTag>
        <SocialLinks>
          <LinkTag href="https://www.youtube.com/channel/UCqj-1coJQk8IXIGeSb4uQ_A">
            <img src={youtube} alt="Youtube do Urban Farmcy" />
          </LinkTag>
          <LinkTag href="https://www.facebook.com/farmcyacademy">
            <img src={facebook} alt="Facebook do Urban Farmcy" />
          </LinkTag>
          <LinkTag href="https://www.instagram.com/farmcyacademy/?hl=pt-br">
            <img src={instagram} alt="Instagram do Urban Farmcy" />
          </LinkTag>
          <A href="mailto:sac@urbanfarmcy.com.br" aria-label="Enviar email">
            <img src={mail} alt="Email" />
          </A>
        </SocialLinks>
      </Container>
      <OnlyMobile>
        <div>
          <A as="p">2019</A>
          <A as="p">Urban Farmcy</A>
          <A as="p">Farmcy Academy</A>
        </div>
      </OnlyMobile>
    </FooterWrapper>
  )
}
