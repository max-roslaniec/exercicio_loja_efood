import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { Restaurante } from '../../types'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        setRestaurantes(data)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Header />
      {!isLoading && (
        <RestaurantList
          restaurants={restaurantes.map((r) => ({
            id: r.id,
            titulo: r.titulo,
            destaque: r.destacado,
            tipo: r.tipo,
            avaliacao: r.avaliacao,
            descricao: r.descricao,
            capa: r.capa
          }))}
        />
      )}
    </>
  )
}

export default Home
