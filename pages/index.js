
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harshvardhan Admuthe</title>
        <meta name="description" content="Portfolio of Harshvardhan Admuthe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/profile.jpg" alt="Harshvardhan" width={150} height={150} className={styles.avatar} />
        <h1 className={styles.title}>Hi, I'm Harshvardhan Admuthe</h1>
        <p className={styles.subtitle}>AI/ML Learner | Creator | Vision Explorer</p>

        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            I’m an AI & Machine Learning undergraduate based in Bengaluru, India.
            I enjoy working at the intersection of technology, storytelling, and self-expression.
            My interests span computer vision, research, and building digital experiences that reflect who I am.
            Outside of code, I’m an active collector, creator, and learner—driven by curiosity and a desire to build things that matter.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <h3>Research on Object Detection in Still Images</h3>
          <p>Ongoing project exploring image-based object detection using ML techniques.</p>
        </section>

        <section className={styles.section}>
          <h2>Resume</h2>
          <a href="https://www.overleaf.com/project/686f6c059ee094a738c4fb26" target="_blank" rel="noopener noreferrer">
            View my resume on Overleaf
          </a>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            <a href="https://www.linkedin.com/in/harshvardhan-a-095621250/" target="_blank">LinkedIn</a> | 
            <a href="https://www.instagram.com/harshvardhanadmuthe/" target="_blank"> Instagram</a>
          </p>
        </section>
      </main>
    </div>
  )
}
