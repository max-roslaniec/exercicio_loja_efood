import React from 'react'
import { Imagem, Tipo, Nome } from './styles'

type Props = {
  tipo: string
  nome: string
  capa: string
}

const Banner = ({ tipo, nome, capa }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Nome>{nome}</Nome>
    </div>
  </Imagem>
)

export default Banner
