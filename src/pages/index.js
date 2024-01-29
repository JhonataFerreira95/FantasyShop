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
              <SaleCard
                image={'Shovel Knight Specter of Torment.jpg'}
                discount={'25%'}
                fullPrice={'19,99'}
                discountPrice={'14,99'}
              />
              <SaleCard
                image={'pixark.jpg'}
                discount={'75%'}
                fullPrice={'75,49'}
                discountPrice={'18,87'}
              />
              <SaleCard
                image={'Mega Man Legacy Collection 2.jpg'}
                discount={'50%'}
                fullPrice={'66,90'}
                discountPrice={'33,45'}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                image={'FINAL FANTASY VII REMAKE INTERGRADE.jpg'}
                title={'FINAL FANTASY VII REMAKE INTERGRADE'}
                category={'Um jogador, cartas steam, nuvem steam, conquista steam.'}
                price={'349,90'}
              />
              <GameCard
                image={'seven.jpg'}
                title={'Scissor Seven'}
                category={'Wuxia, Comédia, Slice of life.'}
                price={'175,80'}
              />
              <GameCard
                image={'Minecraft Dungeons Edição Ultimate.jpg'}
                title={'Minecraft Dungeons Edição Ultimate'}
                category={'Um jogador, cooperativo on-line, conquistas steam, multijogador multiplataforma.'}
                price={'147,45'}
              />
              <GameCard
                image={'Black-Desert-Online-Nova-região-Terra-do-Amanhecer.jpg'}
                title={'Black desert online'}
                category={'MMO, JxJ on-line, Cooperativo on-line.'}
                price={'17,46'}
              />
              <GameCard
                image={'FINAL FANTASY V.jpg'}
                title={'FINAL FANTASY V'}
                category={'Um jogador, conquistas steam, cartas steam.'}
                price={'70,00'}
              />
              <GameCard
                image={'A_Hat_in_Time.jpg'}
                title={'A Hat in Time'}
                category={'Cooperativo on-line, conquistas steam, oficina steam.'}
                price={'88,99'}
              />
              <GameCard
                image={'terraria.jpg'}
                title={'Terraria'}
                category={'Um jogador, JxJ on-line, Cooperativo on-line, conquistas steam, cartas steam.'}
                price={'19,99'}
              />
               <GameCard
                image={'counter-strike.jpg'}
                title={'Counter-Strike: Global Offensive'}
                category={'Conquista steam, multijogador, compras em aplicarivo, usa o valve antitrapaça.'}
                price={'17,46'}
              />
               <GameCard
                image={'zueirama.jpg'}
                title={'Zueirama'}
                category={'Um jogador, compatibilidade total com controle.'}
                price={'16,99'}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
