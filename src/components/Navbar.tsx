import { useMemo } from 'react'
import styles from '../styles/navbar.module.css'
import {
  Flex, Button, Box, Link as StyledLink,
  useDisclosure, ButtonProps
} from "@chakra-ui/react"
import { ConnectWalletModal } from "./ConnectWalletModal";
import Link from "next/link";
import { useWallet } from "use-wallet";
import { useRouter } from "next/router";
import { getShortedAddress, processDecimals } from '../utils';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import cn from 'classnames'
import { useERC20Api } from "../hooks/useERC20Api";
import { useERC20 } from "../hooks/useERC20";
import { utils, BigNumber } from 'ethers'

interface tokenInfoState {
  balance?: BigNumber
  decimals?: number
  name?: string
}

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet()
  const router = useRouter()
  const [active, setActive] = useState<boolean>(false)
  const [tokenInfo, setTokenInfo] = useState<tokenInfoState>({})

  const token = useERC20('0x36eb1b02cb7be3ffa1ee7bd2a3c7d036002730f7')
  const { fetchBalance, fetchDecimals, fetchName } = useERC20Api(token)

  // return <section className="navbar site-section no-margin">
  //   <section className="section-container">
  //     <h1 className="logo">
  //       <Link href="/">META Network</Link>
  //     </h1>
  //     <nav className={styles['navbar-nav']}>
  // <a href="#">Blog</a>
  // <a href="#">GitHub</a>
  //       {wallet.status === 'connected' ? <>
  //         <span>👛 {getShortedAddress(wallet.account)}</span>
  //         <button onClick={() => wallet.reset()}>Disconnect</button>
  //         </> : <button onClick={() => router.push('/connect')}>Connect</button>}
  //   </nav>
  //   </section>
  // </section>

  const scrollFn = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 60) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  const balance = useMemo(() => {
    if (tokenInfo.balance && tokenInfo.decimals) {
      let { balance, decimals } = tokenInfo
      const balanceVal = utils.formatUnits(balance, decimals)
      console.log('balanceVal', balanceVal)

      return String(processDecimals(Number(balanceVal), 4))
    } else return 0
  }, [tokenInfo])

  const fetchTokenInfoFn = async (account: string) => {
    try {
      const resBalance: any = await fetchBalance(account)
      console.log('res', resBalance.toString())

      const resDecimals = await fetchDecimals()
      console.log('res1', resDecimals)

      const resName = await fetchName()

      setTokenInfo({
        balance: resBalance,
        decimals: resDecimals,
        name: resName
      })
    } catch (e) {
      console.log('e', e)
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') { // 只在开发模式显示
      if (wallet.status === 'connected' && wallet.account) {
        // fetchTokenInfoFn(wallet.account)
      }
    }
  }, [wallet.account, wallet.status])

  useEffect(() => {
    window.addEventListener('scroll', scrollFn, false)
  })

  return (
    <StyledHeader className={cn({
      'active': active
    })}>
      <StyledHeaderWrapper>
        <Link href="/">
          <StyledHeaderTitle>Meta Network</StyledHeaderTitle>
        </Link>
        <Box>
          {
            (tokenInfo.name && tokenInfo.balance) ? (
              <span style={{ marginRight: 10 }}>
                {tokenInfo.name}:&nbsp;
                { balance}
              </span>
            ) : null
          }
          <StyledLink href="https://medium.com/meta-network" isExternal marginRight="1rem">Blog</StyledLink>
          {wallet.status === 'connected' ? (
            <>
              <span className={styles.address}>👛 {getShortedAddress(wallet.account)}</span>
              <Button className="btn" colorScheme="red" variant="outline" onClick={() => wallet.reset()}>Disconnect</Button>
            </>
          ) : <Button className="btn" {...ConnectButton} onClick={onOpen}>Connect Wallet</Button>}
        </Box>
        <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

const ConnectButton: ButtonProps = {
  color: '#542DE0'
}

const StyledHeader = styled(Flex)`
  color: #fff;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  transition: all .3s;
  z-index: 10;
  &.active {
    background-color: #fff;
    color: #542DE0;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  }
`
const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 10px;
    .btn {
      padding: 4px 10px;
      font-size: 14px;
    }
  }
`
const StyledHeaderTitle = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`