import { Box, Wrap, WrapProps, WrapItem, Image, ImageProps } from "@chakra-ui/react";
import LogoArweave from "../../assets/img/logo-arweave.svg";
import LogoPolygon from "../../assets/img/logo-polygon.png";
import LogoXOrder from "../../assets/img/logo-xorder.png";
import LogoGitcoin from "../../assets/img/logo-gitcoin.png";
import LogoLoop from "../../assets/img/logo-loop.png";
import LogoNGCVentures from "../../assets/img/logo-ngc-ventures.png";
import LogoCyberightCapital from "../../assets/img/logo-cyberight-capital.png";
import Logo499DAOs from "../../assets/img/logo-499-daos.png";
import LogoYFII from "../../assets/img/logo-yfii.png";
import LogoMCDEX from "../../assets/img/logo-mcdex.png";
import LogoDForce from "../../assets/img/logo-dforce.png";
import LogoBinance from "../../assets/img/logo-binance.png";
import LogoPrimitiveCrypto from "../../assets/img/logo-primitive-crypto.png";
import LogoTernaryCaptial from "../../assets/img/logo-ternary-captial.png";
import LogoNineTCaptial from "../../assets/img/logo-ninet-capital.jpg";

import styles from './index.module.scss';

const LogoProps: ImageProps = {
    height: "60px",
    filter: "grayscale(100%)",
    margin: "1",
    userSelect: "none"
}

const LogoWrap: WrapProps = {
    justify: "center",
    spacing: "2rem",
    margin: "2rem"
}

// Better use external CDN to store these logos
const logosUrls: string[] = [
    LogoArweave,
    LogoPolygon,
    LogoXOrder,
    LogoGitcoin,
    LogoLoop,
    LogoNGCVentures,
    LogoCyberightCapital,
    Logo499DAOs,
    LogoYFII,
    LogoMCDEX,
    LogoDForce,
    LogoBinance,
    LogoPrimitiveCrypto,
    LogoTernaryCaptial,
    LogoNineTCaptial
]

export function PartnersDisplay() {
    return (
        <Box className={ styles.wrapper }>
            <h2 className={ `common-title ${styles.title}` }>Partner & Supporter</h2>
            <Wrap {...LogoWrap}>
                {logosUrls.map((logo, idx) => (
                    <WrapItem key={idx}>
                        <Image {...LogoProps} src={logo} alt='logo' />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}