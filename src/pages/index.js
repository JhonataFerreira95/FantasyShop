import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'



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
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
