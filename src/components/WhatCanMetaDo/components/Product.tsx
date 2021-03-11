import { Flex, FlexProps, Heading, HeadingProps, Image, ImageProps, Text, TextProps } from "@chakra-ui/react"
import React from "react"
import Link from "next/link";

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
    className: string,
    logo: string
    name: string
    url: string
}

export const Product: React.FC<ProductProps> = ({ className, logo, name, url, children }) => {
    return (
        <Link href={url}>
            <a target="_blank" className={className}>
                <Image src={logo} />
                <Flex {...ContentFlex} className="text">
                    <Heading {...ContentHeading}>{name}</Heading>
                    <Text>{children}</Text>
                </Flex>
            </a>
        </Link>
    )
}
