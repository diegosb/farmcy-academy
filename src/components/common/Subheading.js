import styled from 'styled-components'
import { mq } from '../../theme/media'

export default styled.h4`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: center;
  padding: 8px 0 0;
  margin: 0;
  ${mq('xs', 'sm')`
    font-size: 20px;
  `};
`
