import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { Restaurante } from '../../types'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        const encontrado = data.find((r) => r.id === Number(id))
        setRestaurante(encontrado || null)
      })
  }, [id])

  if (!restaurante) {
    return (
      <>
        <HeaderPerfil />
      </>
    )
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
        capa={restaurante.capa}
      />
      <ProductList products={restaurante.cardapio} />
    </>
  )
}

export default Perfil
