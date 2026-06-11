import React, { useEffect } from 'react'
import { Produto } from '../../types'
import { useCart } from '../../contexts/CartContext'
import {
  Overlay,
  ModalContainer,
  ModalImagem,
  ModalConteudo,
  ModalTitulo,
  ModalDescricao,
  ModalPorcao,
  BotaoAdicionar,
  BotaoFechar
} from './styles'

type Props = {
  produto: Produto
  onClose: () => void
}

const formatarPreco = (preco: number) =>
  preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const Modal = ({ produto, onClose }: Props) => {
  const { addItem } = useCart()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleAddToCart = () => {
    addItem(produto)
    onClose()
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <BotaoFechar onClick={onClose} aria-label="Fechar modal">
          X
        </BotaoFechar>
        <ModalImagem src={produto.foto} alt={produto.nome} />
        <ModalConteudo>
          <ModalTitulo>{produto.nome}</ModalTitulo>
          <ModalDescricao>{produto.descricao}</ModalDescricao>
          <ModalPorcao>Serve: {produto.porcao}</ModalPorcao>
          <BotaoAdicionar onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatarPreco(produto.preco)}
          </BotaoAdicionar>
        </ModalConteudo>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
