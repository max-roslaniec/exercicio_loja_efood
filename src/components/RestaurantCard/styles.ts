import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  
  .content {
    padding: 8px;
    border-top: transparent;
  }
`

export const Img = styled.div`
  width: 100%;
  height: 217px;
  background-size: cover;
  background-position: center;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #FFB930;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Botao = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 4px 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  display: inline-block;
`
