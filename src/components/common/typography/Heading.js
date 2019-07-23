import styled from 'styled-components'
import { mq } from '../../../theme/media'

export default styled.h2`
  font-size: ${({ theme }) => theme.font.size.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.text};
  padding: 16px 0 20px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 880px;

  ${mq('xs', 'sm')`
    font-size: ${({ theme }) => theme.font.size.large};
  `};
`
