import React from 'react'
import { HeaderBar, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/fundo.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Logo src={logo} alt="eFood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeaderBar>
)

export default Header
