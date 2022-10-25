import Image from 'next/image'
import styles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function About() {
    return (
        <div className={`columns`}>
            <div className={`column`}>
                <Image src='/images/about.jpg' width={465} height={455} className={utilStyles.image} alt='photo of author sipping coffee and photo of giant wooden hand'/>
            </div>

            <div className={`${utilStyles.content} column`}>
                <h3>This is me</h3>
                <ul className={styles.description}>
                    <ul><span className={styles.attribute}>Name</span>: Amy Chan</ul>
                    <ul><span className={styles.attribute}>Location</span>: Chicago, IL</ul>
                    <ul><span className={styles.attribute}>Occupation</span>: Full-Stack Developer (specializing in Salesforce Commerce Cloud)</ul>
                    <ul><span className={styles.attribute}>Interests</span>: traveling, miniature schnauzers, taking photos of creepy things</ul>
                </ul>
            </div>
        </div>
    )
}
