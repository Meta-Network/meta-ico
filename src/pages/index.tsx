import Head from 'next/head'
import Link from "next/link"
import { useWallet } from "use-wallet";
import styles from '../styles/Home.module.css'

export default function Home() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const wallet = useWallet()

  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          Meta Network
        </h1>
        {wallet.status === 'connected' ? wallet.account : 'Not Connected'}
        <Link href="/wallet">Go to Wallet</Link>
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
  )
}
