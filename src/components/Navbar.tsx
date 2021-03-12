import styles from '../styles/navbar.module.css'
import {
  Flex, Spacer, Heading, Button, Box, Link as StyledLink,
  useDisclosure, FlexProps, BoxProps, ButtonProps
} from "@chakra-ui/react"
import { ConnectWalletModal } from "./ConnectWalletModal";
import Link from "next/link";
import { useWallet } from "use-wallet";
import { useRouter } from "next/router";
import { getShortedAddress } from '../utils';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import cn from 'classnames'


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
  width: 100%;
  max-width: 1400px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 0 auto;
`

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet()
  const router = useRouter()
  const [active, setActive] = useState<boolean>(false)
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

  useEffect(() => {
    window.addEventListener('scroll', scrollFn, false)
  })

  return (
    <StyledHeader className={cn({
      'active': active
    })}>
      <StyledHeaderWrapper>
        <Box p="2">
          <Heading size="md">
            <Link href="/">Meta Network</Link>
          </Heading>
        </Box>

        <Box>
          <StyledLink href="#" isExternal marginRight="0.5rem">Blog</StyledLink>
          <StyledLink href="#" isExternal marginRight="0.5rem">GitHub</StyledLink>
          {wallet.status === 'connected' ? (
            <>
              <span className={styles.address}>👛 {getShortedAddress(wallet.account)}</span>
              <Button colorScheme="red" variant="outline" onClick={() => wallet.reset()}>Disconnect</Button>
            </>
          ) : <Button {...ConnectButton} onClick={onOpen}>Connect Wallet</Button>}
        </Box>
        <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
