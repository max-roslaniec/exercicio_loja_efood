import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  color: ${colors.footer};
  padding: 8px;
  border-radius: 8px;
`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  background-color: ${colors.footer};
  color: ${colors.primary};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 4px;
`
