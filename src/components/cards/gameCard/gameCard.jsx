import Image from 'next/image'

import styles from './gameCard.module.css'

import Button from '@/components/forms/button/button'

export default function GameCard() {
    return (
        <div className={styles.gamecard}>
            <Image className={styles.image} src='/products/Black-Desert-Online-Nova-região-Terra-do-Amanhecer.jpg' width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>Black desert online</h3>
                <p className={styles.category}>MMO, JxJ on-line, Cooperativo on-line.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$17,46</h2>
                    <Button>Adiconar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}