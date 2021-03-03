import { Box, BoxProps, Heading, HeadingProps, Text, TextProps } from "@chakra-ui/react";
import { Line } from "../../Line";

const WrapperBox: BoxProps = {
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

const ContentText: TextProps = {
    color: "#333333",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    marginBottom: "24px"
}

export interface IntroductionProps {
    title: string
}

export const Introduction: React.FC<IntroductionProps> = ({ title, children }) => {
    return (
        <Box {...WrapperBox}>
            <Heading {...TitleHeading}>{title}</Heading>
            <Text {...ContentText}>{children}</Text>
            <Line />
        </Box>
    )
}