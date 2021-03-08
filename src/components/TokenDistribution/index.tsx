import { Flex, Box, Button, FlexProps, useDisclosure, Text, TextProps, Spacer, Stack, ButtonProps } from "@chakra-ui/react";
import { Progress } from "./compoents/CustomProgress";
import { useWallet } from "use-wallet";
import MetaCoinLogo from "../../../public/assets/logo_meta@2x.png";
import { Image, ImageProps } from "@chakra-ui/react";
import { ConnectWalletModal } from "../ConnectWalletModal";

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

const TokenDistributionStyles: FlexProps = {
    width: "1000px",
    margin: "0 auto 128px",
    fontFamily: "DINAlternate-Bold,DINAlternate"
}

const TitleText: TextProps = {
    color: "#333333",
    fontSize: "56px",
    fontWeight: "bold",
    lineHeight: "66px",
    marginBottom: "24px"
}

const LogoImage: ImageProps = {
    width: "256px",
    height: "256px",
    padding: "40px"
}

const RoundButton: ButtonProps = {
    marginTop: 2,
    rounded: 24,
    width: "192px",
    marginLeft: "auto",
    marginRight: "auto"
}

export function TokenDistribution() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const metaTotalSupply = 1145141919810
    const metaSold = 191981000000
    const percentage = (metaSold / metaTotalSupply * 100);
    const isNearlyEnd = percentage >= 90
    const wallet = useWallet()
    return (
        <Flex {...TokenDistributionStyles}>
            <Box p="2" display='grid' justifyContent="center">
                <Image {...LogoImage} src={MetaCoinLogo}  />
                {wallet.status !== 'connected'
                    ? <Button {...RoundButton} onClick={onOpen}>Connect wallet</Button>
                    : <Button {...RoundButton} colorScheme="mttk">Get Meta Now!</Button>}
            </Box>
            <Spacer />
            <Box width={640}>
                <Text {...TitleText}>META Token Distribution</Text>
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
    )
}