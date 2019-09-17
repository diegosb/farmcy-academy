import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import arrow from '../../img/icons/arrow-right.svg'

const Return = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  a {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.light};
    color: ${({ theme }) => theme.colors.lightText};
    img {
      margin-right: 8px;
      transform: rotate(180deg);
    }
    :focus,
    :active,
    :hover {
      color: ${({ theme }) => theme.colors.lightText};
      text-decoration: none;
      outline: none;
    }
  }
`

const ReturnHome = () => (
  <Return>
    <Link to="/">
      <img src={arrow} alt="Voltar para home" /> Voltar
    </Link>
  </Return>
)

export default ReturnHome
