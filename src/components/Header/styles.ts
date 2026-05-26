import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.footer};
  padding: 40px 0;
  text-align: center;
  height: 384px;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 138px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  max-width: 540px;
  margin: 0 auto;
  line-height: 42px;
`
