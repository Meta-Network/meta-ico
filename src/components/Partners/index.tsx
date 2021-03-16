import { Box, BoxProps, Wrap, WrapProps, WrapItem, Image, ImageProps, Heading, HeadingProps } from "@chakra-ui/react";
import LogoArweave from "../../assets/img/logo-arweave.svg";
import LogoPolygon from "../../assets/img/logo-polygon.png";
import LogoXOrder from "../../assets/img/logo-xorder.png";
import LogoGitcoin from "../../assets/img/logo-gitcoin.png";
import LogoLoop from "../../assets/img/logo-loop.png";

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
    LogoLoop
]

export function PartnersDisplay() {
    return (
        <Box className={ styles.wrapper }>
            <h2 className={ `common-title ${styles.title}` }>Partner & Supporter </h2>
            <Wrap {...LogoWrap}>
                {logosUrls.map((logo, idx) => (
                    <WrapItem key={idx}>
                        <Image  {...LogoProps} src={logo} />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}