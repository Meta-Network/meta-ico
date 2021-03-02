import Head from 'next/head'
import { utils } from "ethers";
import { useWallet } from 'use-wallet'
import styles from '../styles/Home.module.css'

export default function Wallet() {
    const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wallet - Meta Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
                  My Wallet
        </h1>
        {wallet.status === 'connected' ? (
        <div>
          <div>Account: <code>{wallet.account}</code></div>
          <div>Balance: {utils.formatEther(wallet.balance)} BNB</div>
          <button onClick={() => wallet.reset()}>Disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect('injected')}>MetaMask</button>
          <button onClick={() => wallet.connect('walletconnect')}>Wallet Connect</button>
        </div>
      )}
      </main>

      <footer className={styles.footer}>
        Meta Network All Right Reserved. Twitter Facebook Telegram GitHub
      </footer>
    </div>
  )
}
