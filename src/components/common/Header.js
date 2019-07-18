import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../theme/media'

import Button from './Button'
import logo from '../../img/logo.png'

const Logo = styled.img`
  width: 205px;
  height: auto;
  ${media.xs`
    width: 120px;
  `};
`

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`

const Header = ({ withLogin }) => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Farmcy Academy Logo" />
      {withLogin ? (
        <Button type="transparent" element="a" href="https://farmcyacademy.club.hotmart.com/login">
          Login
        </Button>
      ) : null}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  withLogin: PropTypes.bool,
}

Header.defaultProps = {
  withLogin: false,
}

export default Header
