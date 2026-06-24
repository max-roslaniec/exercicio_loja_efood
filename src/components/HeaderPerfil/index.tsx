import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'
import { HeaderBar, HeaderContainer, LinkText, Logo, CartText } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/fundo.svg'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <HeaderBar style={{ backgroundImage: `url(${background})` }}>
      <HeaderContainer className="container">
        <LinkText to="/">Restaurantes</LinkText>
        <Logo src={logo} alt="eFood" />
        <CartText onClick={() => dispatch(openCart())} style={{ cursor: 'pointer' }}>
          {items.length} produto(s) no carrinho
        </CartText>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default HeaderPerfil
