import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return (
    <div className={styles.container}>
      <Head>
        <title>Meta Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meta Network
        </h1>

        <p className={styles.description}>
          {
            isDevelopment
              ? <>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
              </>
              : <>Coming Soon</>
          }
          
        </p>
      </main>

      <footer className={styles.footer}>
        Meta Network All Right Reserved. Twitter Facebook Telegram GitHub
      </footer>
    </div>
  )
}
