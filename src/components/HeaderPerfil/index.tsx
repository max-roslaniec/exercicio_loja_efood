import React from 'react'
import { HeaderBar, HeaderContainer, LinkText, Logo, CartText } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/fundo.svg'

const HeaderPerfil = () => (
  <HeaderBar style={{ backgroundImage: `url(${background})` }}>
    <HeaderContainer className="container">
      <LinkText to="/">Restaurantes</LinkText>
      <Logo src={logo} alt="eFood" />
      <CartText>0 produto(s) no carrinho</CartText>
    </HeaderContainer>
  </HeaderBar>
)

export default HeaderPerfil
