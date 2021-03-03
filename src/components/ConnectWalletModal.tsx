import {
  Button, Box, Link, Modal, ModalBody, ModalOverlay, ModalFooter, ModalContent, ModalCloseButton, ModalHeader,
} from "@chakra-ui/react"
import { WalletConnect } from "./Icon/WalletConnect";
import { useWallet, ChainUnsupportedError, ConnectionRejectedError } from "use-wallet";
import { MetaMask } from "./Icon/MetaMask";
import { useEffect } from "react";

export function ConnectWalletModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet();
  const connectTo = (platform: 'injected' | 'walletconnect') => wallet.connect(platform).then(() => onClose());

  useEffect(() => {
    if (wallet.error instanceof ChainUnsupportedError) {
      alert('Wrong Network detected, Please switch to the Binance Smart Chain Mainnet')
    }
    if (wallet.error instanceof ConnectionRejectedError) {
      console.error('Connection Rejected', wallet.error)
      alert('Connection Rejected')
    }
  }, [wallet.error])

  return <Modal isOpen={isOpen} size="sm" onClose={onClose}>
    <ModalOverlay style={{ height: '100%', width: '100%' }} />
    <ModalContent style={{ width: '100%' }} >
      <ModalHeader>Connect to a wallet</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Button
          onClick={() => connectTo('injected')} leftIcon={<MetaMask />}
          colorScheme="orange" variant="outline" width="100%" margin="1rem 0">MetaMask</Button>
        <Button onClick={() => connectTo('walletconnect')} leftIcon={<WalletConnect />}
          colorScheme="blue" variant="outline" width="100%" margin="1rem 0">Wallet Connect</Button>
      </ModalBody>

      <ModalFooter>
        {/* {JSON.stringify(wallet.error)} */}
        {wallet.status}
        <Link href="#">Learn how to connect?</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
}