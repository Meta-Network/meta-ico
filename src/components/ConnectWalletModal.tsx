import {
  Button, Box, Link, Modal, ModalBody, ModalOverlay, ModalFooter, ModalContent, ModalCloseButton, ModalHeader,
} from "@chakra-ui/react"
import { WalletConnect } from "./Icon/WalletConnect";
import { useWallet } from "use-wallet";
import { MetaMask } from "./Icon/MetaMask";

export function ConnectWalletModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet();
  const connectTo = (platform: 'injected' | 'walletconnect') => wallet.connect(platform).then(() => onClose());
  return <Modal isOpen={isOpen} size="sm" onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
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
        <Link href="#">Learn how to connect?</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
}