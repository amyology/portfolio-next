import Image from 'next/image'
import styles from '../styles/index.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <div className={`columns`}>
        <div className={`column`}>
            <Image src='/images/index.jpg' width={620} height={480} className={utilStyles.image} alt='photo of clouds and photo of navy pier'/>
        </div>
        <div className={`${utilStyles.content} column`}>
            <h3>Hello</h3>
            <p className={styles.description}>
                My name is <span>Amy Chan</span>. <br/>
                I am a <span>full-stack developer</span> <br/>
                based in <span>Chicago</span>.
            </p>
        </div>
    </div>
  )
}
