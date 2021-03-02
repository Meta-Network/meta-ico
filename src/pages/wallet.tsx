import Head from 'next/head'
import { utils } from "ethers";
import { useWallet } from 'use-wallet'
import styles from '../styles/Home.module.css'

export default function Wallet() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  return (
      <main className={styles.main}>
        <Head>
          <title>My Wallet - Meta Network</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>
            My Wallet
        </h1>
        {wallet.status === 'connected' ? (
        <div>
          <div>Account: <code>{wallet.account}</code></div>
          <div>Balance: {utils.formatEther(wallet.balance)} BNB</div>
          <div>Connector: {wallet.connector}</div>
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
  )
}
