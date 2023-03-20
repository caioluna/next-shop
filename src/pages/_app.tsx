import { useState } from "react";

import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import logoImg from '../assets/logo.svg'
import cartIcon from '../assets/cart-icon.svg'

import { Container, Header, CartButton, Label } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import { CartModal } from "../components/CartModal";

globalStyles() // Ideal that this stays outside of the function App, otherwise it will be called needlessly on every page change. Since the styles are global, they only need to be applied once.

export default function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState(1)
  const [isCartModalOpen, setIsCartModalOpen] = useState(true)

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="ignite shop logo" />
        </Link>

        <CartButton>
          <Image src={cartIcon} alt="cart icon" />
          {cartItems > 0 && (
            <Label>{cartItems}</Label>
          )}
        </CartButton>
      </Header>

      <Component {...pageProps} />

      {isCartModalOpen && <CartModal />}
    </Container>
  )
}
