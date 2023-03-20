import Image from "next/image";
import { CartItem } from "../CartItem";
import { CheckoutButton, CloseButton, Container, ProductsArea, Summary } from "./styles";
import closeIcon from '../../assets/close-icon.svg'


export function CartModal() {
  return (
    <Container>
      <CloseButton>
        <Image src={closeIcon} alt='close modal button' />
      </CloseButton>
      <h3>Sacola de compras</h3>

      <ProductsArea>
        <CartItem />
      </ProductsArea>

      <Summary>
        <div>
          <p>Quantidade</p>
          <p>3 itens</p>
        </div>

        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>
      </Summary>

      <CheckoutButton>Finalizar compra</CheckoutButton>
    </Container>
  )
}
