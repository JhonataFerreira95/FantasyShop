import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

export default function CartButton() {
    return (
        <div>
            <BsCart4 className={styles.icon}
             size={40}
             onClick={() => {console.log("clicou aqui")}}
             />
        </div>
    )
}
