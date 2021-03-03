import { Heading } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { PartnersDisplay } from "../components/Partners";
import { TokenDistribution } from '../components/TokenDistribution';
import { WhatIsMeta } from '../components/WhatIsMeta';

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading>
        Meta Network
      </Heading>
      <WhatIsMeta />
      <PartnersDisplay />
      <TokenDistribution />
    </main>
  )
}
