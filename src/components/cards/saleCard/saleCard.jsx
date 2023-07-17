import Image from 'next/image'

import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard() {
    return (
        <div className={styles.salecard}>
            <Image src='/products/pixark.jpg' width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva!</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>-75%</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R$75,49</p>
                        <h4 className={styles.discountprice}>R$18,87</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>

    )
}