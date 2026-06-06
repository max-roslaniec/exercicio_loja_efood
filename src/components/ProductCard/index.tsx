import React from 'react'
import { Card, Img, Titulo, Descricao, Botao } from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  onClick: () => void
}

const ProductCard = ({ foto, preco, id, nome, descricao, porcao, onClick }: Props) => {
  const getDescricaoCurta = (text: string) => {
    if (text.length > 130) {
      return text.slice(0, 127) + '...'
    }
    return text
  }

  return (
    <Card>
      <Img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricaoCurta(descricao)}</Descricao>
      <Botao onClick={onClick}>Adicionar ao carrinho</Botao>
    </Card>
  )
}

export default ProductCard
