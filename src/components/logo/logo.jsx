import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src='/steam.svg' width={60} height={60} />
            <h1 className={styles.name}>FantasyShop</h1>
        </div>
    )
}
