import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-color: ${colors.footer};
  padding: 40px 0;
  height: 186px;
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinkText = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 125px;
`

export const CartText = styled.span`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
`
