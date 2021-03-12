import { Flex, FlexProps, Heading, Grid, GridItem, Image, Text, TextProps, Center, ImageProps, HeadingProps, GridProps } from "@chakra-ui/react";
import { Box } from "react-feather";
import Icon1 from "../../../public/assets/icon1@2x.png";
import Icon2 from "../../../public/assets/icon2@2x.png";
import Icon3 from "../../../public/assets/icon3@2x.png";
import Icon4 from "../../../public/assets/icon4@2x.png";

import styles from "./index.module.scss";

const TitleProp: HeadingProps = {
  fontFamily: "DINAlternate-Bold, DINAlternate",
  fontSize: "56px",
  fontWeight: "bold",
  lineHeight: "66px"
}

export default function WhyMeta(props: any) {
  const list = [
    {
      img: Icon1,
      w: '128px',
      text: 'High Profit'
    },
    {
      img: Icon2,
      w: '112px',
      text: 'High savety'
    },
    {
      img: Icon3,
      w: '140px',
      text: 'Realtime-info'
    },
    {
      img: Icon4,
      w: '127px',
      text: 'Diverse usage scenarios'
    }
  ]
  return (<>
    <Heading {...TitleProp}>
      Why Meta?
    </Heading>
    <Grid className={styles.container}>
    {
      list.map((i: any, idx: number) => (
        <div key={ idx } className={ styles.box }>
          <Image src={i.img} w={i.w} />
          <Text>{ i.text }</Text>
        </div>
      ))
    }
    </Grid>
  </>);
}