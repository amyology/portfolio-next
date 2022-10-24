import Image from 'next/image'
import styles from '../styles/contact.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Contact() {
    return (
        <div class="columns">
            <div className={`column`}>
                <Image src='/images/contact.jpg' width={595} height={588} className={utilStyles.image}/>
            </div>
            <div className={`${utilStyles.content} column`}>
                <h3>Let's get in touch</h3>
                <p><a href="mailto:amychandev@gmail.com">amychandev@gmail.com</a></p>

                <p class="mt-3">
                    <span>You can find me at</span>
                    <a href="https://www.linkedin.com/in/amy-chan" target="_blank" className={styles.contactlink}>LinkedIn</a>
                    <a href="http://github.com/amyology" target="_blank" className={styles.contactlink}>GitHub</a>
                    <a href="http://codepen.io/amychan" target="_blank" className={styles.contactlink}>Codepen</a>
                </p>
            </div>
        </div>
    )
}
