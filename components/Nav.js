import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function Nav() {
    return (
        <nav className={`column`}>
            <div className={styles.navlinks}>
                <span className={styles.navTitle}>Navigation</span>
                <Link href="/"><a>start</a></Link>
                <Link href="about"><a>who i am</a></Link>
                <Link href="resume"><a>things i&apos;ve done</a></Link>
                <Link href="contact"><a>contact...?</a></Link>
            </div>
        </nav>
    )
}