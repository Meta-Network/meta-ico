import React from "react"
import { Box, Flex, Image, ImageProps, UseAccordionProps } from "@chakra-ui/react"
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
                        <Accordion title="What is Meta Network?">
                            EMPOWERING CREATORS WITH A TOKEN ECONOMY<br />
                            Meta Network combines several Web3 technologies including DeFi and decentralized storage to create a community-driven creators network. We improve the interaction between creators and fans through a token economy, and capitalize the data created by users in social networks, ultimately enabling Data as Labor.
                        </Accordion>
                        <Accordion title="Why is Meta Network?">
                            <b>Low Barrier</b> : Our users can use our predefined service without any specific knowledge of web3 and private keys.<br />
                            <b>Open Source</b>: All our services are on github and are as open as possible.<br />
                            <b>Self-host</b>: Users are always in full control of their own data.<br />
                            <b>Interoperability</b>: With the advantages of DeFi money lego and our comprehensive developer documents, third party developers can access users’ assets as well as social network data to build third party Dapps and share passive profit with users.
                        </Accordion>
                        <Accordion title="What feature does it include in Meta Network?">
                            Meta Ecosystem<br />
                            Core Module<br />
                            Fan Ticket<br />
                            One-stop platform for issuing personal tokens(a.k.a. Social Money)
                        </Accordion>
                        <Accordion title="Creator Toolkits">
                            <b>Matataki</b><br />
                            PoC content community powered by Fan Ticket and IPFS.<br /><br />
                            <b>Matataki Editor</b><br />
                            Extended Markdown editor with the ability to insert NFT and encrypted data.<br /><br />
                            <b>Arclight</b><br />
                            PoC music community powered by Fan Ticket and Arweave.<br /><br />
                            <b>Timelines</b><br />
                            Social Network Aggregator to provide single source of truth digital avatar for third party Meta dapp developers.
                        </Accordion>
                        <Accordion title="What can you do with Fan Ticket?">
                            <b>Social money</b>: based on personal credit<br />
                            <b>A decentralized community</b>: tool for creators<br />
                            <b>More revenue</b>: hold/pay Fan Ticket to get access to articles<br />
                            <b>More influence</b>: use your Fan Ticket to reward others<br />
                            <b>Decentralized community</b>: develop your fans who hold your Fan Ticket
                        </Accordion>
                        <Accordion title="Meta Network Universel Applications">
                            Matataki<br />
                            Meta DAO<br />
                            Portal for Fan Ticket<br />
                            Airdropper<br />
                            Quest<br />
                            Hexo-plugin<br />
                            Telegram Bot<br />
                            <a className={ styles['faq-link'] } href='https://www.matataki.io/dapp'>Find More</a>
                        </Accordion>
                        <Accordion title="How about the opportunity">
                            In the past 16 months, we achieved:<br />
                            32.72% avg. per quarter user growth rate.<br />
                            32.00% avg. per quarter article growth rate.<br />
                            40.82% avg. per quarter transaction growth rate.<br />
                            42.04% avg. per quarter increase in minted Social Money.<br />
                            We have a total of 10k+ users, and a total of 221 Creators.<br />
                        </Accordion>
                    </AccordionGroups>
                    {/* <AccordionGroups title="Getting Started" accordionProps={DefaultAccordionProps}>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                        <Accordion title="Where can I use Meta?">
                            Mask Network is now available on Matataki. We will support more platforms in the future.
                        </Accordion>
                    </AccordionGroups> */}
                </Flex>
            </Flex>
        </Box>
    )
}
