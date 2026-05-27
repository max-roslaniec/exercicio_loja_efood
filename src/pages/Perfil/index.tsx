import React from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import ProductList, { Product } from '../../components/ProductList'

const mockProducts: Product[] = [
  {
    id: 1,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 2,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 3,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 4,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 5,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 6,
    foto: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
    preco: 60.9,
    nome: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  }
]

const Perfil = () => {
  return (
    <>
      <HeaderPerfil />
      <Banner
        tipo="Italiana"
        nome="La Dolce Vita Trattoria"
        capa="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop"
      />
      <ProductList products={mockProducts} />
    </>
  )
}

export default Perfil
