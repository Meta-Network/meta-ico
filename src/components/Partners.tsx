import { Box, Wrap, WrapItem, Image, ImageProps, Heading } from "@chakra-ui/react";

const LogoProps: ImageProps = {
    height: "40px",
    filter: "grayscale(100%)",
    margin: '1'
}

// Better use external CDN to store these logos
const logosUrls: string[] = [
    "https://raw.githubusercontent.com/ethglobal/sponsor-logos/master/arweave.svg",
    "https://polygon.technology/wp-content/uploads/2021/01/logo-polygon.png",
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
        <Wrap justify="center" spacing="2rem">
            { logosUrls.map((logo, idx) => <WrapItem key={idx}>
                <Image  {...LogoProps} src={logo} />
            </WrapItem>) }
        </Wrap>
    </Box>
}