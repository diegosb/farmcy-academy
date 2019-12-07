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
  width: ${({ type }) => (type === 'transparent' ? '205px' : '320px')};
  border-radius: 5px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'transparent':
        return 'transparent'
      case 'secondary':
        return theme.colors.darkest
      default:
        return theme.colors.primary
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border: 1px solid
    ${({ theme, type }) => (type === 'transparent' ? theme.colors.white : theme.colors.primary)};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme, type }) =>
    type === 'transparent' ? theme.font.weight.light : theme.font.weight.bold};
  transition: background-color 250ms ease, color 250ms ease;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;

  :active,
  :focus,
  :hover {
    background-color: ${({ theme, type }) =>
      darken(
        0.05,
        type === 'transparent' || type === 'secondary' ? 'transparent' : theme.colors.primary,
      )};
    color: ${({ theme }) => darken(0.05, theme.colors.white)};
    text-decoration: none;
    outline: none;
  }

  ${media.xs`
    width: ${({ type }) => (type === 'transparent' ? '120px' : '290px')};
    font-size: ${({ theme, type }) =>
      type === 'transparent' ? theme.font.size.small : theme.font.size.regular};
    padding: ${({ type }) => (type === 'transparent' ? '0.75em 0' : '1em')};
    height: ${({ type }) => (type === 'transparent' ? 'auto' : '48px')};
    margin: 0 auto;
  `};
`
