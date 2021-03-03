import { Flex, FlexProps, Heading, Grid, GridItem, Image, Text, TextProps, Center, ImageProps } from "@chakra-ui/react";
import { Box } from "react-feather";
import Icon1 from "../../../public/assets/icon1@2x.png";
import Icon2 from "../../../public/assets/icon2@2x.png";
import Icon3 from "../../../public/assets/icon3@2x.png";
import Icon4 from "../../../public/assets/icon4@2x.png";

const ImageProp: ImageProps = {
  verticalAlign: "middle",
  margin: "auto",
}

const TextProp: TextProps = {
  align: "center",
  verticalAlign: "bottom",
  fontFamily: "DINAlternate-Bold, DINAlternate",
  fontSize: "20px",
}

export default function WhyMeta(props: any) {
  console.log(Icon1)
  return (<>
    <Heading>
      Why Meta?
    </Heading>
    <Grid margin="128px 0" templateColumns="repeat(4, 1fr)" gap={6}>
      <Image src={Icon1} w="128px" {...ImageProp} />
      <Image src={Icon2} w="112px" {...ImageProp} />
      <Image src={Icon3} w="140px" {...ImageProp} />
      <Image src={Icon4} w="127px" {...ImageProp} />
      <Text {...TextProp}>High Profit</Text>
      <Text {...TextProp}>High savety</Text>
      <Text {...TextProp}>Realtime-info</Text>
      <Text {...TextProp}>Diverse usage scenarios</Text>
    </Grid>
  </>);
}