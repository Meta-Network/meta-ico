import { Box, BoxProps, Grid, GridProps, Heading, HeadingProps } from "@chakra-ui/react"
import React from "react"
import { Product } from "./components/Product"
import LogoMatataki from "../../assets/img/logo-matataki.png"
import LogoQuest from "../../assets/img/logo-quest.png"
import LogoArcLight from "../../assets/img/logo-arclight.png"

import styles from './index.module.scss';

const TitleHeading: HeadingProps = {
    color: "#333333",
    textAlign: "center",
    marginBottom: "100px"
}

export function WhatCanMetaDo() {

    const productList = [
        {
            className: 'mtk',
            logo: LogoMatataki,
            name: 'Matataki',
            text: 'Fan-Ticket based digital library which is publicly immortalized.',
            url: 'https://matataki.io'
        },
        {
            className: 'quest',
            logo: LogoQuest,
            name: 'Quest',
            text: 'A community of future crowdsourcing gig economy.',
            url: 'https://quest.matataki.io'
        },
        {
            className: 'arclight',
            logo: LogoArcLight,
            name: 'ArcLight',
            text: 'When Music meets Permaweb...',
            url: 'https://arclight.arcucy.io'
        }
    ]

    return (
        <Box className={styles.container}>
            <h2 className={ `common-title ${styles.title}` }>What's going on in Meta Ecosystem</h2>
            <Grid className={ styles.item }>
                {
                    productList.map((i: any, idx: number) => (
                        <Product key={idx} className={styles[i.className]} name={ i.name } logo={i.logo} url={ i.url }>{ i.text }</Product>
                    ))
                }
            </Grid>
        </Box>
    )
}
