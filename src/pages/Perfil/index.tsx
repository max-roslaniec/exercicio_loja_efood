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
    descricao: 'A clássica Marguerita: molho de tomate suculento, mozzarella de búfala, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 2,
    foto: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop',
    preco: 89.9,
    nome: 'Sushi Misto',
    descricao: 'Combinado de 20 peças de sushi variadas: salmão, atum, peixe branco e rolls especiais. Acompanha wasabi e shoyu.',
    porcao: '1 pessoa'
  },
  {
    id: 3,
    foto: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop',
    preco: 55.5,
    nome: 'Spaghetti à Bolonhesa',
    descricao: 'Massa artesanal cozida al dente com molho bolonhesa tradicional, preparado com carne moída de primeira e tomates frescos.',
    porcao: '1 pessoa'
  },
  {
    id: 4,
    foto: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop',
    preco: 30.0,
    nome: 'Frango Empanado',
    descricao: 'Tiras de frango empanadas super crocantes, perfeitas para acompanhar sua refeição ou como aperitivo.',
    porcao: '1 a 2 pessoas'
  },
  {
    id: 5,
    foto: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop',
    preco: 120.0,
    nome: 'Salada Gourmet',
    descricao: 'Mix de folhas verdes com tomate cereja, queijo brie, nozes e molho especial de mostarda e mel.',
    porcao: '1 pessoa'
  },
  {
    id: 6,
    foto: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop',
    preco: 45.0,
    nome: 'Tiramisu',
    descricao: 'Clássica sobremesa italiana feita com café, queijo mascarpone e cacau em pó. Um final perfeito para sua refeição.',
    porcao: '1 pessoa'
  }
]

const Perfil = () => {
  return (
    <>
      <HeaderPerfil />
      <Banner
        tipo="Italiana"
        nome="La Dolce Vita"
        capa="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop"
      />
      <ProductList products={mockProducts} />
    </>
  )
}

export default Perfil
