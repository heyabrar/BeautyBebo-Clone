import { Box, Divider } from "@chakra-ui/react";
import FourtyPercentOffBanner from "../Components/FourtyPercentOffBanner";
import HomeSliderData from "../Components/HomeSliderData";
import Slideshow from "../Components/SlideShow";

export default function HomePage ( ){
    return (
        <>  
        <Box h={{base : '83px', md : '125px', lg : '180px'}}></Box>
            <Slideshow/>
            <FourtyPercentOffBanner/>
            <HomeSliderData/>
        </>
    )
}