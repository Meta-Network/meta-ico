import { Flex, Box, Button, useDisclosure, Text, TextProps, Spacer, Progress, Stack } from "@chakra-ui/react";
import { useWallet } from "use-wallet";
import MetaCoinLogo from "../../public/assets/logo_meta@2x.png";
import { Image } from "@chakra-ui/react";
import { ConnectWalletModal } from "./ConnectWalletModal";

const HeadTextProps: TextProps = {
    fontWeight: 500
}

const NumberTextProps: TextProps = {
    fontSize: "4xl",
    fontWeight: "bold"
}

const minorTextProps: TextProps = {
    fontSize: "xs",
    color: "gray.500"
}


const unitTextProps: TextProps = {
    ...minorTextProps,
    marginLeft:2
}

export function TokenDistribution() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const metaTotalSupply = 1145141919810
    const metaSold = 191981000000
    const percentage = (metaSold / metaTotalSupply * 100);
    const isNearlyEnd = percentage >= 90
    const wallet = useWallet()
    return <Flex>
        <Box p="2" display='grid'>
            <Image src={MetaCoinLogo} width={256} height={256} />
          {wallet.status !== 'connected'
            ? <Button onClick={onOpen} marginTop={2}>Connect wallet</Button>
            : 
              <Button colorScheme="purple" marginTop={2} rounded={24}>Get Meta Now</Button>}
        </Box>
        <Spacer />
        <Box width={640}>
          <Text fontSize="3xl" fontWeight="bold">META Token Distribution</Text>
          <Text {...HeadTextProps}>TOTAL DISTRIBUTED</Text>
            <Progress value={percentage} borderRadius={15} colorScheme="orange" />
            <Flex>
                <Text {...minorTextProps}>0 META</Text>
                <Spacer />
                <Text {...minorTextProps}>{metaTotalSupply} META</Text>
            </Flex>
            <Stack>
                <Text {...HeadTextProps}>CURRENT DISTRIBUTION</Text>
                <Flex>
                    <Flex alignItems="baseline">
                        <Text {...NumberTextProps}>100000000</Text>
                        <Text {...unitTextProps}>META</Text>
                    </Flex>
                    <Spacer />
                    <Flex alignItems="baseline">
                        <Text {...NumberTextProps}>114514</Text>
                        <Text  {...unitTextProps}>BNB Received</Text>
                    </Flex>
                </Flex>
                <Box>
                    <Text {...HeadTextProps}>CURRENT DISTRIBUTION ENDS IN</Text>
                    <Text {...NumberTextProps}>11:45:14:55</Text>
                </Box>
            </Stack>
        </Box>
        <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
      </Flex>
}