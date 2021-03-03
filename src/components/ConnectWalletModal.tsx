import {
  Button, Box, Link, Modal, ModalBody, ModalOverlay, ModalFooter,
  ModalContent, ModalCloseButton, ModalHeader, AlertIcon, Alert,
} from "@chakra-ui/react"
import { WalletConnect } from "./Icon/WalletConnect";
import { useWallet } from "use-wallet";
import { MetaMask } from "./Icon/MetaMask";

export function ConnectWalletModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet();
  const connectTo = (platform: 'injected' | 'walletconnect') => wallet.connect(platform).then(() => onClose());
  
  return <Modal isOpen={isOpen} size="sm" onClose={onClose}>
    <ModalOverlay style={{ height: '100%', width: '100%' }} />
    <ModalContent style={{ width: '100%' }} >
      <ModalHeader>Connect to a wallet</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Alert status="info">
          <AlertIcon />
          Binance Smart Chain network only. (Chain ID: 56)
        </Alert>
        <Button
          onClick={() => connectTo('injected')} leftIcon={<MetaMask />}
          colorScheme="orange" variant="outline" width="100%" margin="1rem 0">MetaMask</Button>
        <Button onClick={() => connectTo('walletconnect')} leftIcon={<WalletConnect />}
          colorScheme="blue" variant="outline" width="100%" margin="1rem 0">Wallet Connect</Button>
      </ModalBody>

      <ModalFooter>
        <Link href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain">Learn how to connect?</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
}