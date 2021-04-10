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
        <Box className={styles.wrapper}>
            <h2 className={`common-title ${styles['faq-title']}`}>FAQ</h2>
            <Flex className={styles['faq-wrapper']}>
                <Box className={styles['left-content']}>
                    <Image {...LeftContentImage} src={ImgFAQ} />
                </Box>
                <Flex className={styles['right-content']}>
                    <Line />
                    <AccordionGroups title="Getting Started" accordionProps={FirstAccordionProps}>
                        <Accordion title="What is Meta Network?">
                            <p className={`${styles['item-text-blod']}`}>
                                EMPOWERING CREATORS WITH A TOKEN ECONOMY
                            </p>
                            <p className={styles['item-text']}>
                                Meta Network combines several Web3 technologies including DeFi and decentralized storage to create a community-driven creators network. We improve the interaction between creators and fans through a token economy, and capitalize the data created by users in social networks, ultimately enabling Data as Labor.
                            </p>
                        </Accordion>
                        <Accordion title="Why is Meta Network?">
                            <b>Idea</b>
                            <ul className={styles['item']}>
                                <li>Creators raise money via a token to create something (e.g., write an essay) and then the holders of that token will accrue value for early support of the project.</li>
                                <li>When a creator makes something, they can generate value across the lifetime of that object, such as art resales or song streams.</li>
                                <li>Tokenizat ion can enable unique access requirements which incentivize communities and users to pay for access and participate more actively.</li>
                            </ul>
                            <br />
                            <b>Advantage</b>
                            <ul className={styles['item']}>
                                <li> We are the world's most multifaceted and open blockchain infrastructure for social money.</li>
                                <li>We are the leading project based on social money networks in Asia.</li>
                                <li>We are influential among blockchain developers and creators in China.</li>
                                <li>We have three-years experience in researching and developing the ideas behind social money.</li>
                            </ul>
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
                            <p className={styles['item-text']}><b>Social money</b>: based on personal credit</p>
                            <p className={styles['item-text']}> <b>A decentralized community</b>: tool for creators</p>
                            <p className={styles['item-text']}> <b>More revenue</b>: hold/pay Fan Ticket to get access to articles</p>
                            <p className={styles['item-text']}> <b>More influence</b>: use your Fan Ticket to reward others</p>
                            <p className={styles['item-text']}> <b>Decentralized community</b>: develop your fans who hold your Fan Ticket</p>
                        </Accordion>
                        <Accordion title="How about the opportunity">
                            <p className={styles['item-text']}>In the past 16 months, we achieved:<br /></p>
                            <p className={styles['item-text']}>32.72% avg. per quarter user growth rate.<br /></p>
                            <p className={styles['item-text']}>32.00% avg. per quarter article growth rate.<br /></p>
                            <p className={styles['item-text']}>40.82% avg. per quarter transaction growth rate.<br /></p>
                            <p className={styles['item-text']}>42.04% avg. per quarter increase in minted Social Money.<br /></p>
                            <p className={styles['item-text']}>We have a total of 10k+ users, and a total of 221 Creators.<br /></p>
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
