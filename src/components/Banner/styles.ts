import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 32px;
  }
`

export const Tipo = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const Nome = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`
