import Image from 'next/image'

import styles from './saleCard.module.css'

export default function SaleCard() {
    return (
        <div>
            <Image src='/products/pixark.jpg' width={250} height={300} />
            <div>
                <h3>Oferta Exclusiva!</h3>
                <div>
                    <div>-75%</div>
                    <div>
                        <p>R$75,49</p>
                        <h4>R$18,87</h4>
                    </div>
                </div>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>

    )
}