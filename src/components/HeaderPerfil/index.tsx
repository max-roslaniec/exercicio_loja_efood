import React from 'react'
import { HeaderBar, HeaderContainer, LinkText, Logo, CartText } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/fundo.svg'
import { useCart } from '../../contexts/CartContext'

const HeaderPerfil = () => {
  const { items, openCart } = useCart()

  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <HeaderContainer className="container">
        <LinkText to="/">Restaurantes</LinkText>
        <Logo src={logo} alt="eFood" />
        <CartText onClick={openCart} style={{ cursor: 'pointer' }}>
          {items.length} produto(s) no carrinho
        </CartText>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default HeaderPerfil
