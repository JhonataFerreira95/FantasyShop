import styles from './CartMenu.module.css'

import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu () {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                <CartOption />
                <CartOption />
                <CartOption />
            </div>
        </div>
    )
}

