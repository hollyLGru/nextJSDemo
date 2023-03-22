import styles from '@/styles/Home.module.css'
import Link from "next/link"

const About = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.aboutHeader}>THIS IS THE ABOUT PAGE</h2>
            <Link className={styles.link} href="/">Home</Link>
        </div>
    )
}

export default About;