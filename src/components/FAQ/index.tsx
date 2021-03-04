import React from "react"
import { Box, BoxProps, Flex, FlexProps, Image, ImageProps, Heading, HeadingProps, Spacer, UseAccordionProps } from "@chakra-ui/react"
import ImgFAQ from "../../assets/img/img-faq.png"
import { Line } from "../Line"
import { AccordionGroups } from "./components/AccordionGroups"
import { Accordion } from "./components/Accordion"

const WrapperBox: BoxProps = {
    width: "100%",
    maxWidth: "1280px",
    margin: "128px auto"
}

const TitleHeading: HeadingProps = {
    color: "#333333",
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "66px",
    marginBottom: "64px"
}

const LeftContentBox: BoxProps = {
    width: "40%"
}

const LeftContentImage: ImageProps = {
    userSelect: "none"
}

const RightContentFlex: FlexProps = {
    width: "46%",
    flexDirection: "column"
}

const DefaultAccordionProps: UseAccordionProps = {
    allowMultiple: true
}

const FirstAccordionProps: UseAccordionProps = {
    ...DefaultAccordionProps,
    defaultIndex: [0]
}

export function FAQ() {
    return (
        <Box {...WrapperBox}>
            <Heading {...TitleHeading}>FAQ</Heading>
            <Flex>
                <Box {...LeftContentBox}>
                    <Image {...LeftContentImage} src={ImgFAQ} />
                </Box>
                <Spacer />
                <Flex {...RightContentFlex}>
                    <Line />
                    <AccordionGroups title="Getting Started" accordionProps={FirstAccordionProps}>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                    </AccordionGroups>
                    <AccordionGroups title="Getting Started" accordionProps={DefaultAccordionProps}>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                    </AccordionGroups>
                    <AccordionGroups title="Getting Started" accordionProps={DefaultAccordionProps}>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                    </AccordionGroups>
                </Flex>
            </Flex>
        </Box>
    )
}
