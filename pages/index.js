import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? styles.dark : styles.light;
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Harshvardhan Admuthe</title>
        <meta name="description" content="Portfolio of Harshvardhan Admuthe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.toggle}>
          <button onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
        <Image src="/profile.jpg" alt="Harshvardhan" width={160} height={160} className={styles.avatar} />
        <h1 className={styles.title}>Hi, I'm Harshvardhan Admuthe</h1>
        <p className={styles.subtitle}>AI/ML Learner | Creator | Vision Explorer</p>

        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            I’m an AI & Machine Learning undergraduate based in Bengaluru, India.
            I enjoy working at the intersection of technology, storytelling, and self-expression.
            My interests span computer vision, research, and building digital experiences that reflect who I am.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.card}>
            <h3>Research: Object Detection in Still Images</h3>
            <p>Ongoing exploration into image-based object recognition using ML & OpenCV.</p>
          </div>
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