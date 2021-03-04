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
                <Introduction title="Social money">
                    Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.
                </Introduction>
                <Introduction title="High profit">
                    Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.
                </Introduction>
                <Introduction title="Platform crypto">
                    Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.Benefit from the latest in blockchain and web security verification standards with end-to-end authentication that enables superior data integrity.
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
