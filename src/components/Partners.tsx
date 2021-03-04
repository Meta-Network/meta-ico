import { Box, BoxProps, Wrap, WrapProps, WrapItem, Image, ImageProps, Heading, HeadingProps } from "@chakra-ui/react";
import LogoArweave from "../assets/img/logo-arweave.svg";
import LogoPolygon from "../assets/img/logo-polygon.png";
import LogoXOrder from "../assets/img/logo-xorder.png";

const WrapperBox: BoxProps = {
    width: "100%",
    maxWidth: '1280px',
    margin: '0 auto 128px'
}

const LogoProps: ImageProps = {
    height: "60px",
    filter: "grayscale(100%)",
    margin: "1",
    userSelect: "none"
}

const TitleHeading: HeadingProps = {
    color: "#333333",
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "66px",
    textAlign: "center",
    marginBottom: "64px"
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
]

export function PartnersDisplay() {
    return (
        <Box {...WrapperBox}>
            <Heading {...TitleHeading}>Partner & Supporter </Heading>
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