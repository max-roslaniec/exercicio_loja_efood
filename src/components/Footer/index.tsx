import React from 'react'
import { FooterContainer, Logo, Links, SocialLink, Text } from './styles'
import logo from '../../assets/images/logo.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="eFood" />
      <Links>
        <SocialLink href="#">Insta</SocialLink>
        <SocialLink href="#">Face</SocialLink>
        <SocialLink href="#">Twitter</SocialLink>
      </Links>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </div>
  </FooterContainer>
)

export default Footer
