import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ConentForSingleRenderPage ( ) {
    return (
        <>
         <SimpleGrid className="ThirtyPercentBannerSimpleGrid" columns={[1,1,2]} w={{base : '95%' , md : '95%' , lg : '85%'}}>
            <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
              <Link to={'/fragrance'}><Image m='auto' src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"/></Link>
            </Box>

            <Box  w={{base : '95%', md :'90%', lg : '90%'}} m='auto'>
              <Link to='/mombabycare'><Image m='auto'  src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"/></Link>
            </Box>
         </SimpleGrid>
        </>
    );
};