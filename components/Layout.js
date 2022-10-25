import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/layout.module.scss'

export default function Layout({children}) {
    return (
        <div className={`columns`}>
            <Head>
                <title>a.chan portfolio</title>
                <meta name="description" content="a.chan portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>

            <Nav className={styles.nav}/>

            <main className={`column is-four-fifths`}>
                <h1 className={styles.title}><Link href="/"><a>a.chan</a></Link></h1>

                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    )
}