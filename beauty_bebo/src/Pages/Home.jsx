import { Box, Container, Image  } from "@chakra-ui/react";
import FiftyPercentOffBanner from "../Components/FiftyPercentOffBanner";
import FourtyPercentOffBanner from "../Components/FourtyPercentOffBanner";
import HomeSliderData from "../Components/HomeSliderData";
import HomeTabs from "../Components/HomeTab";
import Slideshow from "../Components/SlideShow";
import ThirtyPercentOff from "../Components/ThirtyPercentOffBanner";
import ThressColumn from "../Components/ThreeColumn";
import WelcomeToBeautyProducts from "../Components/WelcomeToBeautyProducts";

export default function HomePage ( ){
    return (
        <>  
        <Box h={{base : '83px', md : '125px', lg : '180px'}}></Box>
            <Slideshow/>
            <FourtyPercentOffBanner/>
            <HomeSliderData/>
            <ThirtyPercentOff/> 
            <HomeTabs/>
            <FiftyPercentOffBanner/>
            <ThressColumn/>
            <Container maxW={{base : '100%', md : '90%', lg :'90%'}} h={{base : '100px', md : '200px', lg : '300'}} mt='3%'>
                <Image h='100%' w='100%' src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"/>
            </Container>
         <WelcomeToBeautyProducts/>
        </>
    )
}