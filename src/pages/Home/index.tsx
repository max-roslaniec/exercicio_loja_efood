import React from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const mockRestaurants = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destaque: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    titulo: 'La Dolce Vita Trattoria',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    titulo: 'La Dolce Vita Trattoria',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <RestaurantList restaurants={mockRestaurants} />
    </>
  )
}

export default Home
