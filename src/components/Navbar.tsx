import styles from '../styles/navbar.module.css'
import {
  Flex, Spacer, Heading, Button, Box, Link as StyledLink,
  useDisclosure, Modal, ModalBody, ModalOverlay, ModalFooter, ModalContent, ModalCloseButton, ModalHeader,
  ButtonGroup
} from "@chakra-ui/react"
import { ConnectWalletModal } from "./ConnectWalletModal";
import Link from "next/link";
import { useWallet } from "use-wallet";
import { useRouter } from "next/router";
import { getShortedAddress } from '../utils';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet()
  const router = useRouter()
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
  return <Flex margin="1rem">
  <Box p="2">
      <Heading size="md">
        <Link href="/">Meta Network</Link>
      </Heading>
  </Box>
    <Spacer />

    <Box>
      <StyledLink href="#" isExternal marginRight="0.5rem">Blog</StyledLink>
      <StyledLink href="#" isExternal marginRight="0.5rem">GitHub</StyledLink>
      {wallet.status === 'connected' ? <>
        <span>👛 {getShortedAddress(wallet.account)}</span>
        <Button colorScheme="red" variant="outline" onClick={() => wallet.reset()}>Disconnect</Button>
        </> : <Button onClick={onOpen}>Connect Wallet</Button>}
    </Box>
    <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
</Flex>
}