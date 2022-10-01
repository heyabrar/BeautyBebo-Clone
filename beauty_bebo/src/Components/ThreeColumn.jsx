import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BestSellers from "./BestSellers";
import LatestProduct from "./LatestProductsCompo";
import MostViewed from "./MostViewed";

export default function ThressColumn ( ){
    return (
        <>
            <SimpleGrid columns={[1,1,1,3]} rowGap='30px' gap='30px'w='90%' m='auto' mt='2%' p='10px'>
                    <Box>
                        <Text fontSize={'14px'} borderBottom={'2px solid #dd2985'} w='100px' ml={{base : '0px', md : '75px', lg : '10px'}}>BEST SELLER</Text>
                        <BestSellers/>
                    </Box>
                    <Box>
                        <Text fontSize={'14px'} borderBottom={'2px solid #dd2985'} w='130px' ml={{base : '0px', md : '75px', lg : '10px'}}>LATEST PRODUCTS</Text>
                        <LatestProduct/>
                    </Box>
                    <Box>
                        <Text fontSize={'14px'} borderBottom={'2px solid #dd2985'} w='110px' ml={{base : '0px', md : '75px', lg : '10px'}} >MOST VIEWED</Text>
                        <MostViewed/>
                    </Box>
                </SimpleGrid>
        </>
    );
};