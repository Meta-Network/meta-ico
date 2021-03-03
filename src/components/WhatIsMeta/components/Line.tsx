import { Box, BoxProps } from "@chakra-ui/react";

const LineBox: BoxProps = {
    maxWidth: "640px",
    width: "100%",
    height: "1px",
    backgroundColor: "#B2B2B2"
}

export function Line() {
    return (
        <Box {...LineBox} />
    )
}
