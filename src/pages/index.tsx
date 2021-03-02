import Head from 'next/head'
import Link from "next/link"
import { useWallet } from "use-wallet";
import { Flex, Button, Spacer, Box, Text, CircularProgress, CircularProgressLabel, useDisclosure } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { ConnectWalletModal } from "../components/ConnectWalletModal";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet()
  const metaTotalSupply = 1145141919810
  const metaSold = 191981000000

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Meta Network
        </h1>
      <Flex>
        <Box p="4">
          <CircularProgress value={40} size="128px" color="green.400">
            <CircularProgressLabel>{(metaSold / metaTotalSupply * 100).toFixed(2)}%</CircularProgressLabel>
          </CircularProgress>
          <p>META have been distributed</p>
        </Box>
        <Spacer />
        <Box p="4">
          <Text fontSize="3xl">META Global Distribution</Text>
          <Text>{metaSold} META Sold</Text>
          <Text>{metaTotalSupply - metaSold} META Left</Text>
          <Text>11:45:14 Remaining</Text>
          {wallet.status !== 'connected'
            ? <Button onClick={onOpen}>Connect wallet</Button>
            : <>
              <Text>👛 {wallet.account}</Text>
              <Text>Connect by {wallet.connector}</Text>
              <Button colorScheme="red">Just take my money</Button></>}
        </Box>
      </Flex>
      <ConnectWalletModal isOpen={isOpen} onClose={onClose} />

    </main>
  )
}
