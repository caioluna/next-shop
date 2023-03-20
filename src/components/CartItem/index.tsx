import React from 'react'
import { Container, ImageContainer, InfoContainer } from './styles'

export function CartItem() {
  return (
    <Container>
      <ImageContainer>
        Image
      </ImageContainer>

      <InfoContainer>
        <p>Camiseta Beyond the Limits</p>
        <strong>R$ 79,90</strong>
        <button>Remover</button>
      </InfoContainer>
    </Container>
  )
}
