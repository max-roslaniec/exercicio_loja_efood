import React from 'react'
import RestaurantList from '../../components/RestaurantList'

const mockRestaurants = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destaque: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peças exclusivas preparadas pelos nossos sushimen. Ingredientes frescos e selecionados para garantir a melhor experiência gastronômica.',
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    titulo: 'La Dolce Vita',
    destaque: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'As melhores massas e pizzas da cidade, preparadas com ingredientes importados da Itália e receitas tradicionais de família.',
    capa: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop'
  }
]

const Home = () => {
  return (
    <>
      <RestaurantList restaurants={mockRestaurants} />
    </>
  )
}

export default Home
