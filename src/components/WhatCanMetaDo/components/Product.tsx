import { Flex, FlexProps, Heading, HeadingProps, Image, ImageProps, Text, TextProps } from "@chakra-ui/react"
import React from "react"

const LogoImage: ImageProps = {
    width: "160px",
    height: "160px",
    marginRight: "24px"
}

const ContentFlex: FlexProps = {
    flexDirection: "column",
    justifyContent: "center"
}

const ContentHeading: HeadingProps = {
    color: "#333333",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "28px",
    marginBottom: "16px"
}

export interface ProductProps {
    logo: string
    name: string
}

export const Product: React.FC<ProductProps> = ({ logo, name, children }) => {
    return (
        <Flex>
            <Image {...LogoImage} src={logo} />
            <Flex {...ContentFlex}>
                <Heading {...ContentHeading}>{name}</Heading>
                <Text>{children}</Text>
            </Flex>
        </Flex>
    )
}
