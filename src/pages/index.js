import Head from 'next/head'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'


export default function Home() {
  return (
    <>
      <Head>
        <title>FantasyShop: Sua loja virtual de jogos.</title>
        <meta name="description" content="FantasyShop: Sua loja virtual de jogos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div>
            <Subtitle>Outros jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
