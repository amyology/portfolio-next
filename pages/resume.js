import Image from 'next/image'
import styles from '../styles/resume.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Resume() {
    return (
        <div className={`columns`}>
            <div className={`column`}>
                <Image src='/images/resume.jpg' width={580} height={530} className={utilStyles.image} alt='photo of a road in the desert and photo of a bird'/>
            </div>

            <div className={`${utilStyles.content} column`}>
                <h3>My work/experience</h3>
                <p className={styles.description}>Tools I have used before in a professional or personal capacity:
                    Salesforce B2C Commerce (Salesforce Commerce Cloud/Demandware),
                    Javascript,
                    Node.js,
                    Express.js,
                    Vue.js,
                    Next.js,
                    jQuery,
                    Ruby,
                    Ruby on Rails,
                    Sass,
                    C#,
                    HTML,
                    CSS,
                    Git,
                    SQL,
                    MySQL,
                    PostGreSQL,
                    Unity 3D,
                    Vuforia,
                    Bootstrap,
                    Foundation,
                    Bulma,
                    Materialize,
                    Photoshop,
                    Illustrator,
                    Affinity Photo
                </p>
                <a href="/other/AmyChanResume.pdf" target="_blank">Grab a copy of my resume.</a>
            </div>
        </div>
    )
}
