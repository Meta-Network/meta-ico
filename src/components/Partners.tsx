import { Box, Wrap, WrapItem, Image, ImageProps, Heading } from "@chakra-ui/react";
import LogoArweave from "../assets/img/logo-arweave.svg";
import LogoPolygon from "../assets/img/logo-polygon.png";
import LogoXOrder from "../assets/img/logo-xorder.png";

const LogoProps: ImageProps = {
    height: "40px",
    filter: "grayscale(100%)",
    margin: "1",
    userSelect: "none"
}

// Better use external CDN to store these logos
const logosUrls: string[] = [
    LogoArweave,
    LogoPolygon,
    LogoXOrder,
    // Just test for the layout
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
]

export function PartnersDisplay() {
    return <Box>
        <Heading textAlign="center">Partner & Supporter </Heading>
        <Wrap justify="center" spacing="2rem" margin="2rem">
            { logosUrls.map((logo, idx) => <WrapItem key={idx}>
                <Image  {...LogoProps} src={logo} />
            </WrapItem>) }
        </Wrap>
    </Box>
}