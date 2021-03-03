import { AccordionItem, AccordionItemProps, AccordionButton, AccordionButtonProps, Box, BoxProps, AccordionPanel, AccordionPanelProps } from "@chakra-ui/react"
import React from "react"
import { ChevronRight } from "react-feather"
import styles from './AccordionIcon.module.css'

const AccordionItemStyle: AccordionItemProps = {
    border: "none"
}

const AccordionButtonStyle: AccordionButtonProps = {
    padding: "0.5rem 0"
}

const AccordionPanelStyle: AccordionPanelProps = {
    paddingLeft: "34px"
}

const IconBox: BoxProps = {
    marginRight: "10px"
}

const TitleBox: BoxProps = {
    flex: 1,
    textAlign: "left",
    color: "#333333",
    fontSize: "20px",
    fontWeight: "500"
}

export interface AccordionProps {
    title: string
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    return (
        <AccordionItem {...AccordionItemStyle}>
            {({ isExpanded }) => (
                <React.Fragment>
                    <AccordionButton {...AccordionButtonStyle}>
                        <Box {...IconBox}>
                            <ChevronRight className={ isExpanded ? styles.open : styles.close} />
                        </Box>
                        <Box {...TitleBox}>{title}</Box>
                    </AccordionButton>
                    <AccordionPanel {...AccordionPanelStyle} pb={4}>{children}</AccordionPanel>
                </React.Fragment>
            )}
        </AccordionItem>
    )
}
