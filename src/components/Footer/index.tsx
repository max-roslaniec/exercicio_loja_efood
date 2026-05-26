import React from 'react'
import { FooterContainer, Logo, Links, SocialLink, Text } from './styles'
import logo from '../../assets/images/logo.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="eFood" />
      <Links>
        <li>
          <SocialLink href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg">
              <circle cx="12" cy="12" r="12" fill="#E66767"/>
              <path d="M16 8H13.5C12.1193 8 11 9.11929 11 10.5V12H8V15H11V22H14V15H16.5L17 12H14V10.5C14 10.2239 14.2239 10 14.5 10H16V8Z" fill="#FFEBD9"/>
            </svg>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg">
              <circle cx="12" cy="12" r="12" fill="#E66767"/>
              <path d="M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM12 14.8653C10.4172 14.8653 9.13467 13.5828 9.13467 12C9.13467 10.4172 10.4172 9.13467 12 9.13467C13.5828 9.13467 14.8653 10.4172 14.8653 12C14.8653 13.5828 13.5828 14.8653 12 14.8653Z" fill="#FFEBD9"/>
              <path d="M17.1422 12C17.1422 14.8399 14.8399 17.1422 12 17.1422C9.16013 17.1422 6.85779 14.8399 6.85779 12C6.85779 9.16013 9.16013 6.85779 12 6.85779C14.8399 6.85779 17.1422 9.16013 17.1422 12ZM18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" fill="#FFEBD9"/>
            </svg>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg">
              <circle cx="12" cy="12" r="12" fill="#E66767"/>
              <path d="M18 7.5C17.4 7.8 16.7 8 16 8.1C16.7 7.7 17.3 7 17.5 6.2C16.9 6.6 16.1 6.9 15.3 7C14.7 6.4 13.8 6 12.9 6C11.1 6 9.7 7.4 9.7 9.2C9.7 9.5 9.7 9.7 9.8 9.9C7.1 9.8 4.7 8.5 3.1 6.5C2.8 7 2.7 7.6 2.7 8.2C2.7 9.3 3.3 10.3 4.1 10.9C3.6 10.9 3.1 10.7 2.6 10.5C2.6 10.5 2.6 10.5 2.6 10.5C2.6 12.1 3.7 13.4 5.2 13.7C4.9 13.8 4.6 13.8 4.3 13.8C4.1 13.8 3.9 13.8 3.7 13.7C4.1 15 5.3 16 6.8 16C5.7 16.9 4.2 17.4 2.6 17.4C2.3 17.4 2.1 17.4 1.8 17.3C3.3 18.3 5.1 18.9 7 18.9C13.2 18.9 16.6 13.8 16.6 9.4C16.6 9.3 16.6 9.1 16.6 9C17.3 8.5 17.9 7.9 18 7.5Z" fill="#FFEBD9"/>
            </svg>
          </SocialLink>
        </li>
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
