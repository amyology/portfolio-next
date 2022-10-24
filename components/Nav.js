import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function Nav() {
    return (
        <nav class="column">
            <div className={styles.navlinks}>
                <Link href="about"><a>who i am</a></Link>
                <Link href="resume"><a>things i've done</a></Link>
                <Link href="contact"><a>contact...?</a></Link>
            </div>
        </nav>
    )
}