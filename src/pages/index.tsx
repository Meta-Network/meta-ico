import { Heading } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { PartnersDisplay } from "../components/Partners";
import { TokenDistribution } from '../components/TokenDistribution';
import { WhatIsMeta } from '../components/WhatIsMeta';
import WhyMeta from "../components/WhyMeta";
import { FAQ } from "../components/FAQ";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading>
        Meta Network
      </Heading>
      <WhatIsMeta />
      <WhyMeta />
      {/* 空投未开始， UI 暂时不对外界开放 */}
      { process.env.NODE_ENV === 'development' && <TokenDistribution />}
      <FAQ />
      <PartnersDisplay />
    </main>
  )
}
