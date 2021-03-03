import { Heading } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { PartnersDisplay } from "../components/Partners";
import { TokenDistribution } from '../components/TokenDistribution';

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading>
        Meta Network
        </Heading>
      <PartnersDisplay />
      <TokenDistribution />
    </main>
  )
}
