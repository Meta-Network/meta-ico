import { Flex, Box, Button, FlexProps, useDisclosure, Text, TextProps, Spacer, Heading, Stack, ButtonProps, BoxProps } from "@chakra-ui/react";
import { Progress } from "./compoents/CustomProgress";
import { useWallet } from "use-wallet";
import MetaCoinLogo from "../../../public/assets/logo_meta@2x.png";
import { Image, ImageProps } from "@chakra-ui/react";
import { ConnectWalletModal } from "../ConnectWalletModal";

import styles from './index.module.scss';

const HeadTextProps: TextProps = {
    fontSize: '16px',
    fontFamily: 'PingFangSC-Medium, PingFang SC',
    fontWeight: 500,
    color: '#333',
}

const NumberTextProps: TextProps = {
    fontSize: '40px',
    fontFamily: 'DINAlternate-Bold, DINAlternate',
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 1,
    marginTop: '8px'
}

const minorTextProps: TextProps = {
    fontSize: "14px",
    fontFamily: 'PingFangSC-Medium, PingFang SC',
    fontWeight: 500,
    color: '#B2B2B2',
}


const unitTextProps: TextProps = {
    ...minorTextProps,
    marginLeft: 2
}

const LogoImage: ImageProps = {
    width: "256px",
    height: "256px",
    padding: '20px',
    boxSizing: 'border-box'
}

const RoundButton: ButtonProps = {
    fontFamily: 'PingFangSC-Medium, PingFang SC',
    marginTop: '40px',
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
        <Flex className={ styles.wrapper }>
            <Box display='grid' justifyContent="center">
                <Image {...LogoImage} src={MetaCoinLogo} />
                {wallet.status !== 'connected'
                    ? <Button {...RoundButton} colorScheme="mttk" onClick={onOpen}>Connect wallet</Button>
                    : <Button {...RoundButton} colorScheme="mttk">Get Meta Now!</Button>}
            </Box>
            <Box className={ styles['info-wrapper'] }>
                <h2 className={ `common-title ${styles['token-title']}` }>META Token Distribution</h2>
                <Text {...HeadTextProps}>TOTAL DISTRIBUTED</Text>
                <Progress className={styles.progress} value={percentage} borderRadius={15} colorScheme="orange" />
                <Flex justifyContent="space-between">
                    <Text {...minorTextProps}>0 META</Text>
                    <Text {...minorTextProps}>{metaTotalSupply} META</Text>
                </Flex>
                <Stack className={styles['stack-container']}>
                    <Text {...HeadTextProps}>CURRENT DISTRIBUTION</Text>
                    <Flex justifyContent="space-between" style={{ marginTop: 8 }}>
                        <Flex alignItems="baseline">
                            <Text className={styles['number-text']}>
                                100000000<sub>META</sub>
                            </Text>
                        </Flex>
                        <Flex alignItems="baseline">
                            <Text className={styles['number-text']}>
                                114514<sub>BNB Received</sub>
                            </Text>
                        </Flex>
                    </Flex>
                    <Box style={{ marginTop: 24 }}>
                        <Text {...HeadTextProps}>CURRENT DISTRIBUTION ENDS IN</Text>
                        <Text {...NumberTextProps}>11:45:14</Text>
                    </Box>
                </Stack>
            </Box>
            <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}