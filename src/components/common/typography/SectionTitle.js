import styled from 'styled-components'
import { mq } from '../../../theme/media'

export default styled.h3`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.lightText};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  line-height: 2;
  text-transform: uppercase;
  ${mq('xs', 'sm')`
    font-size: ${({ theme }) => theme.font.size.title};
  `};
`
