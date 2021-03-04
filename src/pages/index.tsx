import styles from '../styles/Home.module.css'
import { PartnersDisplay } from "../components/Partners";
import { TokenDistribution } from '../components/TokenDistribution';
import { WhatIsMeta } from '../components/WhatIsMeta';
import WhyMeta from "../components/WhyMeta";
import { FAQ } from "../components/FAQ";
import { WhatCanMetaDo } from "../components/WhatCanMetaDo";

export default function Home() {
  return (
    <main className={styles.main}>
      <WhatIsMeta />
      <WhyMeta />
      <WhatCanMetaDo />
      {/* 空投未开始， UI 暂时不对外界开放 */}
      { process.env.NODE_ENV === 'development' && <TokenDistribution />}
      <PartnersDisplay />
      <FAQ />
    </main>
  )
}
