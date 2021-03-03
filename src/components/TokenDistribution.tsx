import { Flex, Box, Button, useDisclosure, Text, Spacer, Progress } from "@chakra-ui/react";
import { useWallet } from "use-wallet";
import { ConnectWalletModal } from "./ConnectWalletModal";

export function TokenDistribution() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const metaTotalSupply = 1145141919810
    const metaSold = 191981000000
    const percentage = (metaSold / metaTotalSupply * 100);
    const isNearlyEnd = percentage >= 90
    const wallet = useWallet()
    return <Flex>
        <Box p="4">
          {wallet.status !== 'connected'
            ? <Button onClick={onOpen}>Connect wallet</Button>
            : <>
              <Text>👛 {wallet.account}</Text>
              <Text>Connect by {wallet.connector}</Text>
              <Button colorScheme="red">Get Meta Now</Button></>}
        </Box>
        <Spacer />
        <Box p="4">
          <Text fontSize="3xl">META Token Distribution</Text>
          <Text>TOTAL DISTRIBUTED</Text>
          <Progress value={percentage} borderRadius={15} variant="orange-dynamic" />
          <Text>{metaSold} META Sold</Text>
          <Text>{metaTotalSupply - metaSold} META Left</Text>
          <Text>11:45:14 Remaining</Text>
          
        </Box>
        <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
      </Flex>
}