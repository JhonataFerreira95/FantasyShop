import Image from 'next/image'

import styles from './gameCard.module.css'

import Button from '@/components/forms/button/button'

export default function GameCard({ image ,title, category, price }) {
    return (
        <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.category}>{category}</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R${price}</h2>
                    <Button>Adiconar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

GameCard.defaultProps = {
    image: 'FINAL FANTASY VII REMAKE INTERGRADE.jpg',
    title: 'FINAL FANTASY VII REMAKE INTERGRADE',
    category: 'Um jogador, cartas steam, nuvem steam, conquista steam.',
    price: '349,90'

}