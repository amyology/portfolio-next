import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/layout.module.scss'

export default function Layout({children}) {
    return (
        <div className={styles.container} class="columns">
            <Head>
                <title>a.chan portfolio</title>
                <meta name="description" content="a.chan portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav className={styles.nav}/>

            <main class="column is-four-fifths">
                <h1 className={styles.title}><Link href="/"><a>a.chan</a></Link></h1>

                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    )
}