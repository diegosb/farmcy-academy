import styled from 'styled-components'
import media from '../../theme/media'

export default styled.div`
  width: 100%;
  max-width: 1190px;
  margin: 0 auto;
  ${media.md`
    max-width: 90vw;
  `} ${media.xs`
    padding: 0 20px;
  `};
`
