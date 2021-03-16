import React from "react"
import { Box, BoxProps, Flex, FlexProps, Image, ImageProps, Heading, HeadingProps, Spacer, UseAccordionProps } from "@chakra-ui/react"
import ImgFAQ from "../../assets/img/img-faq.png"
import { Line } from "../Line"
import { AccordionGroups } from "./components/AccordionGroups"
import { Accordion } from "./components/Accordion"
import styles from './index.module.scss';


const LeftContentImage: ImageProps = {
    userSelect: "none"
}

const DefaultAccordionProps: UseAccordionProps = {
    allowMultiple: true,
}

const FirstAccordionProps: UseAccordionProps = {
    ...DefaultAccordionProps,
    defaultIndex: [0],
}

export function FAQ() {
    return (
        <Box className={ styles.wrapper }>
            <h2 className={ `common-title ${styles['faq-title']}` }>FAQ</h2>
            <Flex className={ styles['faq-wrapper'] }>
                <Box className={ styles['left-content'] }>
                    <Image {...LeftContentImage} src={ImgFAQ} />
                </Box>
                <Flex className={ styles['right-content'] }>
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
