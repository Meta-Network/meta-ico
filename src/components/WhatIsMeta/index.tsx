import { Box, BoxProps, Flex, FlexProps, Spacer, Image, ImageProps, Heading, HeadingProps, Button, ButtonProps } from "@chakra-ui/react"
import { ArrowRight } from "react-feather"
import ImgWhatIsMeta from "../../assets/img/img-whatismeta.png"
import { Introduction } from "./components/Introduction"
import { Line } from "../Line"

const WrapperFlex: FlexProps = {
    width: "100%",
    maxWidth: '1280px',
    margin: '128px auto'
}

const LeftContentFlex: FlexProps = {
    width: "46%",
    flexDirection: "column"
}

const TitleHeading: HeadingProps = {
    color: "#333333",
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "66px",
    marginBottom: "64px"
}

const ButtonWrapperBox: BoxProps = {
    marginTop: "64px",
    marginBottom: "24px"
}

const MoreInfoButton: ButtonProps = {
    borderRadius: "4px"
}

const RightContentBox: BoxProps = {
    width: "40%",
    alignSelf: "center"
}

const RigntContentImage: ImageProps = {
    userSelect: "none"
}

export function WhatIsMeta() {
    return (
        <Flex {...WrapperFlex}>
            <Flex {...LeftContentFlex}>
                <Heading {...TitleHeading}>What is Meta?</Heading>
                <Line />
                <Introduction title="Prefunded projects">
                    Creators can raise money via a token to create something (e.g., write an essay) and then the holders of that token will accrue value for early support of the project.
                </Introduction>
                <Introduction title="Programmable revenues">
                    When a creator makes something, they can generate value across the lifetime of that object from such as art resales or song streams.
                </Introduction>
                <Introduction title="Access">
                    Many communities today are freely available to the masses. Tokenization can enable unique access requirements which incentivize communities and users to pay for access and participate more actively.
                </Introduction>
                <Box {...ButtonWrapperBox}>
                    <Button {...MoreInfoButton} rightIcon={<ArrowRight />} colorScheme="mttk" variant="solid">
                        Get more info
                    </Button>
                </Box>
            </Flex>
            <Spacer />
            <Box {...RightContentBox}>
                <Image {...RigntContentImage} src={ImgWhatIsMeta} />
            </Box>
        </Flex>
    )
}
