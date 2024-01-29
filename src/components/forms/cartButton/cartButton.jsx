import { useState } from 'react'

import CartMenu from '@/components/cartMenu/CartMenu'

import styles from './cartButton.module.css'

import { BsCart4 } from 'react-icons/bs'

export default function cartButton () {
    const [open, setOpen] = useState ()
    return (
        <div>
            <BsCart4 
            className={styles.icon}
            size={40}
            onClick={() => {setOpen (!open)}}
            />
            {open && <CartMenu />}
        </div>
    )
}
