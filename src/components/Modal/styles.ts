import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background-color: ${colors.primary};
  max-width: 1024px;
  width: 90%;
  display: flex;
  position: relative;
  padding: 32px;
  gap: 24px;
`

export const ModalImagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ModalConteudo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`

export const ModalTitulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const ModalDescricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const ModalPorcao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${colors.footer};
  color: ${colors.primary};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }
`

export const BotaoFechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 4px;

  &:hover {
    opacity: 0.8;
  }
`
