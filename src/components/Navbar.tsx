import styles from '../styles/navbar.module.css'
import Link from "next/link";
import { useWallet } from "use-wallet";
import { useRouter } from "next/router";
import { getShortedAddress } from '../utils';

export function Navbar() {
  const wallet = useWallet()
  const router = useRouter()
    return <section className="navbar site-section no-margin">
      <section className="section-container">
        <h1 className="logo">
          <Link href="/">META Network</Link>
        </h1>
        <nav className={styles['navbar-nav']}>
          <a href="#">Blog</a>
          <a href="#">GitHub</a>
          {wallet.status === 'connected' ? <>
            <span>👛 {getShortedAddress(wallet.account)}</span>
            <button onClick={() => wallet.reset()}>Disconnect</button>
            </> : <button onClick={() => router.push('/connect')}>Connect</button>}
      </nav>
      </section>
    </section>
}