import styles from '../styles/navbar.module.css'
import { useWallet } from "use-wallet";
import { getShortedAddress } from '../utils';

export function Navbar() {
  const wallet = useWallet()
    return <section className="navbar site-section no-margin">
      <section className="section-container">
        <h1 className="logo">META Network</h1>
        <nav className={styles['navbar-nav']}>
          <a href="#">Blog</a>
          <a href="#">GitHub</a>
          {wallet.status === 'connected' ? <>
            <span>👛 {getShortedAddress(wallet.account)}</span>
            <button onClick={() => wallet.reset()}>Disconnect</button>
            </> : <button>Connect</button>}
      </nav>
      </section>
    </section>
}