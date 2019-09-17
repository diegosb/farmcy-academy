import styled from 'styled-components'
import media from '../../../theme/media'

export default styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
  margin-bottom: 60px;
  ${media.xs`
      font-size: 28px;
      margin-bottom: 20px;
  `};
`
