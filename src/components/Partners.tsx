import { Box, Flex, Image, ImageProps, Heading } from "@chakra-ui/react";

const LogoProps: ImageProps = {
    height: "100px",
    filter: "grayscale(100%)",
    margin: '1'
}

export function PartnersDisplay() {
    return <Box>
        <Heading textAlign="center">Partner & Supporter </Heading>
        <Flex>
            <Image  {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        <Image {...LogoProps} src="https://bit.ly/sage-adebayo" />
        </Flex>
    </Box>
}