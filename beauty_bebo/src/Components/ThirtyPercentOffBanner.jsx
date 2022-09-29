import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ThirtyPercentOff ( ){
    return (
        <>
        <SimpleGrid className="ThirtyPercentBannerSimpleGrid" columns={[1,1,2]} w={{base : '95%' , md : '95%' , lg : '85%'}}>
          <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
            <Link to={'/mombabycare'}><Image m='auto' src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"/></Link>
          </Box>

          <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
            <Link to='/hair'><Image m='auto'  src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"/></Link>
          </Box>
        </SimpleGrid>
        </>
    )
}