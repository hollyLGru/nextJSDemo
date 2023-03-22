import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    return(
        <div className={styles.navbar}>
            <Link href="/" className={styles.links}>Home</Link>
            <Link href='/about' className={styles.links}>About</Link>
            <Link href='/profile' className={styles.links}>Profile</Link>
        </div>
    )
}

export default Navbar