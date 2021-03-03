import { Flex, FlexProps, Heading, Grid, GridItem, Image, Text, Center } from "@chakra-ui/react";
import { Box } from "react-feather";
import Icon1 from "../../../public/assets/icon1@2x.png";
import Icon2 from "../../../public/assets/icon2@2x.png";
import Icon3 from "../../../public/assets/icon3@2x.png";
import Icon4 from "../../../public/assets/icon4@2x.png";


export default function WhyMeta(props: any) {
  console.log(Icon1)
  return (<>
    <Heading>
      Why Meta?
    </Heading>
    <Grid margin="128px 0" templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem>
        <Center>
          <Image src={Icon1} w="128px" align="center" />
        </Center>
        <Text align="center" verticalAlign="bottom">High Profit</Text>

      </GridItem>
      <GridItem>
        <Center>
          <Image src={Icon2} w="112px" align="center" />
        </Center>
        <Text align="center" verticalAlign="bottom">High savety</Text>

      </GridItem>
      <GridItem>
        <Center>
          <Image src={Icon3} w="140px" align="center" />
        </Center>
        <Text align="center" verticalAlign="bottom">Realtime-info</Text>

      </GridItem>
      <GridItem>
        <Center>
          <Image src={Icon4} w="127px" align="center" />
        </Center>
        <Text align="center" verticalAlign="bottom">Diverse usage scenarios</Text>

      </GridItem>
    </Grid>
  </>);
}