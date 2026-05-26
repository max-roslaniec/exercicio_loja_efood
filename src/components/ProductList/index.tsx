import React from 'react'
import { Container, List } from './styles'
import ProductCard from '../ProductCard'

export type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <Container className="container">
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </List>
  </Container>
)

export default ProductList
