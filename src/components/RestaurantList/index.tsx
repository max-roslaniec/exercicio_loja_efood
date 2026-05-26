import React from 'react'
import { Container, List } from './styles'
import RestaurantCard from '../RestaurantCard'

type Restaurant = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </List>
  </Container>
)

export default RestaurantList
