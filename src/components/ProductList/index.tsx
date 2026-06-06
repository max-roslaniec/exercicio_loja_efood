import React, { useState } from 'react'
import { Container, List } from './styles'
import ProductCard from '../ProductCard'
import Modal from '../Modal'
import { Produto } from '../../types'

type Props = {
  products: Produto[]
}

const ProductList = ({ products }: Props) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  return (
    <Container className="container">
      <List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => setProdutoSelecionado(product)}
          />
        ))}
      </List>
      {produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </Container>
  )
}

export default ProductList
