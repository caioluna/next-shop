import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

globalStyles() // Ideal that this stays outside of the function App, otherwise it will be called needlessly on every page change. Since the styles are global, they only need to be applied once.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="ignite shop logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
