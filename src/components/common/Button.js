import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import media from '../../theme/media'

export default styled(
  // eslint-disable-next-line no-unused-vars
  ({ element: Element = 'button', ...props }) => {
    // Element can be a component link <Link />
    if (typeof Element === 'object') {
      return React.cloneElement(Element, props)
    }
    return (
      <Element {...props}>
        <span>{props.children}</span>
      </Element>
    )
  },
)`
  padding: 0.857em 0;
  width: ${({ type }) => (type === 'transparent' ? '205px' : '360px')};
  border-radius: 5px;
  background-color: ${({ theme, type }) => (type === 'transparent' ? 'transparent' : theme.colors.primary)};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border: 1px solid ${({ theme, type }) => (type === 'transparent' ? theme.colors.white : theme.colors.primary)};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme, type }) => (type === 'transparent' ? theme.font.weight.light : theme.font.weight.bold)};
  transition: background-color 250ms ease, color 250ms ease;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: ${({ theme, type }) =>
      darken(0.05, type === 'transparent' ? 'transparent' : theme.colors.primary)};
    color: ${({ theme }) => darken(0.05, theme.colors.white)};
    text-decoration: none;
  }

  ${media.xs`
    width: ${({ type }) => (type === 'transparent' ? '120px' : '270px')};
    font-size: ${({ theme, type }) => (type === 'transparent' ? theme.font.size.small : theme.font.size.regular)};
    padding: ${({ type }) => (type === 'transparent' ? '0.75em 0' : '1em 0')};
  `};
`
