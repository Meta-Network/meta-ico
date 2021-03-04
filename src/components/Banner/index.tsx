import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"
import ImgMetaBanner from "../../assets/img/img-metabanner.png"

const WrapperBox: BoxProps = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${ImgMetaBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#542DE0",
    backgroundSize: "cover",
    marginTop: "-2px"
}

export function Banner() {
    return (
        <Box {...WrapperBox}></Box>
    )
}
