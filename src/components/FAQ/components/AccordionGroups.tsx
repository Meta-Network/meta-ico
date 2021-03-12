import { Box, BoxProps, Heading, HeadingProps, Accordion, UseAccordionProps } from "@chakra-ui/react"
import React from "react"
import { Line } from "../../Line"

const WrapperBox: BoxProps = {
    width: '100%',
    maxWidth: "640px",
    marginTop: "24px"
}

const TitleHeading: HeadingProps = {
    color: "#333333",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "28px",
    marginBottom: "16px"
}

const ContentBox: BoxProps = {
    marginBottom: "24px"
}

export interface AccordionGroupsProps {
    title: string
    accordionProps?: UseAccordionProps
}

export const AccordionGroups: React.FC<AccordionGroupsProps> = ({ title, accordionProps, children }) => {
    return (
        <Box {...WrapperBox}>
            <Heading {...TitleHeading}>{title}</Heading>
            <Box {...ContentBox}>
                <Accordion {...accordionProps}>{children}</Accordion>
            </Box>
            <Line />
        </Box>
    )
}
