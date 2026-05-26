import React from 'react'
import { Card, Img, Titulo, Nota, Descricao, Tags, Tag, Botao, HeaderCard } from './styles'

type Props = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantCard = ({ id, titulo, destaque, tipo, avaliacao, descricao, capa }: Props) => (
  <Card>
    <Img style={{ backgroundImage: `url(${capa})` }}>
      <Tags>
        {destaque && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Tags>
    </Img>
    <div className="content">
      <HeaderCard>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {avaliacao} <span>★</span>
        </Nota>
      </HeaderCard>
      <Descricao>{descricao}</Descricao>
      <Botao to={`/restaurante/${id}`}>Saiba mais</Botao>
    </div>
  </Card>
)

export default RestaurantCard
