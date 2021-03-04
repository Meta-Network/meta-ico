import { Box, BoxProps, Grid, GridProps, Heading, HeadingProps } from "@chakra-ui/react"
import React from "react"
import { Product } from "./components/Product"
import LogoMatataki from "../../assets/img/logo-matataki.png"
import LogoQuest from "../../assets/img/logo-quest.png"
import LogoArcLight from "../../assets/img/logo-arclight.png"

const WrapperBox: BoxProps = {
    maxWidth: '1280px',
    margin: '0 auto 128px'
}

const TitleHeading: HeadingProps = {
    color: "#333333",
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    lineHeight: "66px",
    textAlign: "center",
    marginBottom: "64px"
}

const ContentGrid: GridProps = {
    templateColumns: "repeat(3, 1fr)",
    gap: 6
}

export function WhatCanMetaDo() {
    return (
        <Box {...WrapperBox}>
            <Heading {...TitleHeading}>What's going on in Meta Ecosystem</a></Heading>
            <Grid {...ContentGrid}>
                <Product name="Matataki" logo={LogoMatataki}>Fan-Ticket based digital library which is publicly immortalized.</Product>
                <Product name="Quest" logo={LogoQuest}>A community of future crowdsourcing gig economy.</Product>
                <Product name="ArcLight" logo={LogoArcLight}>When Music meets Permaweb...</Product>
            </Grid>
        </Box>
    )
}
