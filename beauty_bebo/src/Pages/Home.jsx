import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BestSellers from "../Components/BestSellers";
import FiftyPercentOffBanner from "../Components/FiftyPercentOffBanner";
import FourtyPercentOffBanner from "../Components/FourtyPercentOffBanner";
import HomeSliderData from "../Components/HomeSliderData";
import HomeTabs from "../Components/HomeTab";
import LatestProduct from "../Components/LastesProductsCompo";
import MostViewed from "../Components/MostViewed";
import Slideshow from "../Components/SlideShow";
import ThirtyPercentOff from "../Components/ThirtyPercentOffBanner";
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
            <SimpleGrid columns={[1,1,1,3]} rowGap='30px' gap='30px'w='90%' m='auto' mt='2%' p='10px'>
                <Box>
                    <Text borderBottom={'2px solid #dd2985'} w='100px'>BEST SELLER</Text>
                    <BestSellers/>
                </Box>
                <Box>
                    <Text borderBottom={'2px solid #dd2985'} w='140px'>LATEST PRODUCTS</Text>
                    <LatestProduct/>
                </Box>
                <Box>
                    <Text borderBottom={'2px solid #dd2985'} w='110px'>MOST VIEWED</Text>
                    <MostViewed/>
                </Box>
            </SimpleGrid>
         <WelcomeToBeautyProducts/>

        </>
    )
}