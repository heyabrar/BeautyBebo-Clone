import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function ThirtyPercentOff ( ){
    return (
        <>
        <SimpleGrid className="ThirtyPercentBannerSimpleGrid" columns={[1,2,2]} w={{base : '95%' , md : '95%' , lg : '85%'}}>
          <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
            <Image m='auto' src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"/>
          </Box>

          <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
            <Image m='auto'  src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"/>
          </Box>
        </SimpleGrid>
        </>
    )
}