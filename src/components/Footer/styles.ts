import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.footer};
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 80px;
  gap: 8px;
`

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: bold;
`

export const Text = styled.p`
  font-size: 10px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
`
